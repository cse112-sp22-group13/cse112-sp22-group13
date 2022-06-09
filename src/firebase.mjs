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
    addDoc,
    arrayUnion,
    arrayRemove
} from "firebase/firestore/lite";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    sendPasswordResetEmail,
    signOut
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

// Initialize Firebase instance
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth(app);

/** 
 * Get a comment from the recipe id.
 * @param {String} recipe The recipe to get the comment for
 * @returns A string representing the recipe comment
 */
const getComment = async (recipe) => {
    if (auth.currentUser === null) {
        return "";
    }
    const docRef = doc(db, "users", auth.currentUser.uid);
    const docSnap = await getDoc(docRef);
    //get recipeid, either by input or something else
    try {
        const comment = docSnap.data().comments[recipe];
        if (comment == null) {
            return "";
        } else {
            return comment;
        }
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

/** 
 * Edit the comment for a recipe.
 * @param {String} recipe The recipe to edit the comment of
 * @param {String} comment The comment for the recipe
 */
const editComment = async (recipe, comment) => {
    if (auth.currentUser === null) {
        alert("You are not signed in!");
        return;
    }
    const docRef = doc(db, "users", auth.currentUser.uid);
    //get recipeID, either by input or something else
    try {
        const recipeid = "comments." + recipe;
        await updateDoc(docRef, {
            [recipeid]: comment
        });
        alert("Comment saved!");
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

/**
 * Get a user's favorite recipes.
 * @returns users favorite recipes, as an array of recipe ids
 */
const getFavorites = async () => {
    try {
        if (auth.currentUser === null) {
            return null;
        }
        const docRef = doc(db, "users", auth.currentUser.uid);
        const docSnap = await getDoc(docRef);
        return docSnap.get("favorites");
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

/**
 * Toggle the recipe in the user's favorite list (favorites if unfavorited, unfavorites if favorited).
 * @param {*} recipe The recipe to favorite/unfavorite
 */
const checkFavorite = async (recipe) => {
    try {
        if (auth.currentUser === null) {
            alert("You are not signed in! Please sign in to save recipes!");
            return;
        }
        const docRef = doc(db, "users", auth.currentUser.uid);
        const docSnap = await getDoc(docRef);
        const favoriteList = docSnap.get("favorites");
        if (favoriteList.includes(recipe)) {
            alert("Recipe was removed from favorites.");
            //replace number in array remove with actual recipe id
            await updateDoc(docRef, { favorites: arrayRemove(recipe) });
        } else {
            alert("Recipe was added to favorites.");
            //replace number in array remove with actual recipe id
            await updateDoc(docRef, { favorites: arrayUnion(recipe) });
        }
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

/**
 * Log in user using input email and password.
 * @param {String} email Email of user
 * @param {String} password Password of user
 * @returns 
 */
const logInWithEmailAndPassword = async (email, password) => {
    try {
        const res = await signInWithEmailAndPassword(auth, email, password);
        return { email: res.user.email, uid: res.user.uid };
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

/**
 * Register user using input and password.
 * @param {String} email Email of user
 * @param {String} password Password of user
 * @returns 
 */
const registerWithEmailAndPassword = async (email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);

        if (docs.docs.length === 0) {
            await setDoc(doc(db, "users", user.uid), {
                authProvider: "regular",
                email: user.email,
                favorites: [],
                comments: {}
            });
        }
        return { email: res.user.email, uid: res.user.uid };
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const googleProvider = new GoogleAuthProvider();

/**
 * Sign in user using Google authentication.
 */
const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);

        if (docs.docs.length === 0) {
            await setDoc(doc(db, "users", user.uid), {
                authProvider: "google",
                email: user.email,
                favorites: [],
                comments: {}
            });
        }
        return { email: res.user.email, uid: res.user.uid };
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

/**
 * Send user a password reset email.
 * @param {String} email Email to send the reset email to
 */
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

/**
 * Get a list of recipes from the database with a search type of recipeType and a query of recipeData.
 * @param {String} recipeType Type of the search
 * @param {String} recipeData Query of the search
 * @returns Recipes found in the search
 */
async function getRecipeIds(recipeType, recipeData) {
    if (recipeType == "Name") {
        var recipes = [];
        var toSearch = recipeData.toLowerCase();
        const colRef = collection(db, "recipes");

        const querySnapshot = await getDocs(colRef);
        //var cols = querySnapshot.get("title");
        // gets ids of all recipes in category
        querySnapshot.forEach((doc) => {
            // If name matches, push
            let title = doc.data().title.toLowerCase();

            if (title.includes(toSearch)) {
                recipes.push(doc.data().id.toString());
            }
        });
        return recipes;
    }

    var searchData = [];
    var ids = [];

    // handle prep times
    var prep = -1;
    const preptimes = [
        ["10", "15", "20", "30"],
        ["35", "40", "45", "55"],
        [
            "64",
            "75",
            "105",
            "110",
            "130",
            "150",
            "165",
            "180",
            "270",
            "350",
            "400",
            "500",
            "510"
        ]
    ];

    if (recipeData == "Less Than 30 Minutes") {
        prep = 0;
    } else if (recipeData == "30 To 60 Minutes") {
        prep = 1;
    } else if (recipeData == "60 Minutes Or More") {
        prep = 2;
    }

    // not search by preptime
    if (prep < 0) {
        if (recipeData == "Bread") {
            recipeData = "Baking";
        }
        searchData.push(recipeData);
        // search by preptime
    } else {
        searchData = preptimes[prep];
    }

    // check if url query exists
    if (recipeType && recipeData) {
        // iterate through searchdata, gets all recipe ids from fitting categories
        for (var i = 0; i < searchData.length; i++) {
            const colRef = collection(db, "recipe_categories");
            const docRef = doc(colRef, recipeType);
            const subColRef = collection(docRef, searchData[i]);

            const querySnapshot = await getDocs(subColRef);

            // gets ids of all recipes in category
            querySnapshot.forEach((doc) => {
                ids.push(doc.data().data);
            });
        }
    }
    return ids;
}

/**
 * Get recipe information from its ID.
 * @param {String} id ID of the recipe to fetch
 * @returns Recipe information being queried
 */
async function getRecipe(id) {
    var recipe;

    const docRef = doc(db, "recipes", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        recipe = docSnap.data();
    } else {
        console.error("No document found.");
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

/**
 * Updates a document in the database or creates the document if it does not exist.
 * @param {String} fsCollection document to create/update
 * @param {String} jsonString content to update with
 */
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

/**
 * Logs out the user.
 */
const logOut = async () => {
    signOut(auth)
        .then(() => {})
        .catch((err) => {
            console.error(err);
            alert(err.message);
        });
};

export {
    addRecipe,
    getRecipeIds,
    signInWithGoogle,
    getRecipe,
    updateDB,
    registerWithEmailAndPassword,
    logInWithEmailAndPassword,
    passwordReset,
    checkFavorite,
    getFavorites,
    getComment,
    editComment,
    logOut
};
