import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    doc,
    getDoc,
    getDocs,
    setDoc,
    updateDoc,
    query,
    where,
    addDoc
} from "firebase/firestore/lite";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    FacebookAuthProvider,
    signInWithPopup,
    sendPasswordResetEmail
} from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyAEWF3Hxz9GquMTz_huVUes7q-zXbzAVJE",
    authDomain: "kneadit-b63a8.firebaseapp.com",
    projectId: "kneadit-b63a8",
    storageBucket: "kneadit-b63a8.appspot.com",
    messagingSenderId: "492712284341",
    appId: "1:492712284341:web:61a4697a986914abbb6efc",
    measurementId: "G-59HFYTH3KC"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth(app);

//var email = "peder@gmail.com";
//var password = "heiheiArsenal12";
//createUserWithEmailAndPassword(auth,email, password).then(cred => {
//    console.log(cred);
//});

const logInWithEmailAndPassword = async (email, password) => {
    try {
        const res = await signInWithEmailAndPassword(auth, email, password);
        return { email: res.user.email, uid: res.user.uid };
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const registerWithEmailAndPassword = async (email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        return { email: res.user.email, uid: res.user.uid };
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);

        if (docs.docs.length === 0) {
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email
            });
        }
        console.log({ email: res.user.email, uid: res.user.uid });
        return { email: res.user.email, uid: res.user.uid };
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const facebookProvider = new FacebookAuthProvider();
const signInWithFacebook = async () => {
    try {
        const res = await signInWithPopup(auth, facebookProvider);
        const user = res.user;
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);

        if (docs.docs.length === 0) {
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                name: user.displayName,
                authProvider: "facebook",
                email: user.email
            });
        }
        console.log({ email: res.user.email, uid: res.user.uid });
        return { email: res.user.email, uid: res.user.uid };
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const passwordReset = async (email) => {
    sendPasswordResetEmail(auth, email)
        .then(() => {
            alert("Password reset email sent!");
        })
        .catch((err) => {
            console.error(err);
            alert(err.message);
        });
};

// Get the list of recipes from your database

function testConsole(){
    console.log("Hey!");
}

async function getRecipeIds(recipeType, recipeData) {
    var ids = [];

    // check if url query exists
    if (recipeType && recipeData) {
        const colRef = collection(db, "recipe_categories");
        const docRef = doc(colRef, recipeType);
        const subColRef = collection(docRef, recipeData);

        const querySnapshot = await getDocs(subColRef);

        // gets ids of all recipes in category
        querySnapshot.forEach((doc) => {
            ids.push(doc.data().data);
        });
    }

    return ids;
}

// get recipe from id
async function getRecipe(id) {
    var recipe;

    const docRef = doc(db, "recipes", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        recipe = docSnap.data();
    } else {
        console.log("No document found.");
    }

    return recipe;
}

// add recipe to db
async function addRecipe(jsonString) {
    var docRef;

    // get reference to collection
    const colRef = collection(db, "recipes");

    // parse json string
    const json = JSON.parse(jsonString);

    // add recipes to db
    docRef = doc(colRef, json.id.toString());
    await setDoc(docRef, json);
}

// updates document in DB, or creates if doesn't exist
async function updateDB(fsCollection, jsonString) {
    var docRef;
    var subColRef;
    var subDocRef;

    // parse json string
    const json = JSON.parse(jsonString);

    // get reference to collection
    const colRef = collection(db, fsCollection);

    // split by cuisine
    docRef = doc(colRef, "cuisines");

    // get each cuisine in recipe
    for (var c in json.cuisines) {
        subColRef = collection(docRef, json.cuisines[c]);
        subDocRef = doc(subColRef, json.id.toString());
        await setDoc(subDocRef, { data: json.id.toString() });
    }

    const possible_ingredients = [
        "Bread",
        "Produce",
        "Seafood",
        "Spices and Seasonings",
        "Milk, Eggs, Other Dairy",
        "Oil, Vinegar, Salad Dressing",
        "Cereal",
        "Baking",
        "Health Foods",
        "Ethnic Foods",
        "Beverages",
        "Canned and Jarred"
    ];

    // split by ingredients
    docRef = doc(colRef, "ingredients");
    var ingredientList = [];
    var hasIngredient = new Array(possible_ingredients.length).fill(false);

    // get each ingredient in recipe
    for (var i in json.extendedIngredients) {
        var ingredient = json.extendedIngredients[i].aisle;

        // ingredient exists in json
        if (ingredient != null && ingredient != "?") {
            // parse ingredient from json
            ingredient = ingredient.split(";")[0].split("/");

            // check if current ingredient is in list of possible ones
            for (var pi in possible_ingredients) {
                if (ingredient == possible_ingredients[pi]) {
                    hasIngredient[pi] = true;
                    break;
                }
            }
        }
    }

    // get all related ingredients for recipe
    for (var hi in hasIngredient) {
        if (hasIngredient[hi]) {
            ingredientList.push(possible_ingredients[hi]);
        }
    }

    for (var ing in ingredientList) {
        subColRef = collection(docRef, ingredientList[ing]);
        subDocRef = doc(subColRef, json.id.toString());
        await setDoc(subDocRef, { data: json.id.toString() });
    }

    // split by time
    docRef = doc(colRef, "time");
    subColRef = collection(docRef, json.readyInMinutes.toString());
    subDocRef = doc(subColRef, json.id.toString());
    await setDoc(subDocRef, { data: json.id.toString() });
}

export {
    addRecipe,
    getRecipeIds,
    signInWithFacebook,
    signInWithGoogle,
    getRecipe,
    updateDB,
    registerWithEmailAndPassword,
    logInWithEmailAndPassword,
    passwordReset
};