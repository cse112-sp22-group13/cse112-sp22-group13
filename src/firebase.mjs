
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getFirestore, collection, doc, getDocs, setDoc, updateDoc} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";

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

const collectionName = "recipes";

// Get the list of recipes from your database
async function getRecipes() {
    const recipesCol = collection(db, collectionName);
    const recipesSnapshot = await getDocs(recipesCol);
    const recipeList = recipesSnapshot.docs.map(doc => doc.data());
    return recipeList;
}

async function getRecipe(id){
    const recipesCol = collection(db, collectionName);
    return recipesCol.child(id);
}

// updates document in DB, or creates if doesn't exist
async function updateDB(fsCollection, jsonString) {

    // parse json string
    const json = JSON.parse(jsonString);

    // get reference to collection 
    const colRef = collection(db, fsCollection); 
    
    // replace with cuisine later 
    var docRef = doc(colRef, "diet");
    for (var idx in json.diets) {
        var subColRef = collection(docRef, json.diets[idx]);
        var subDocRef = doc(subColRef, (json.id).toString());
        await setDoc(subDocRef, json);
    }

    // TODO: add docs for ingredients and time
}

export {getRecipes, getRecipe, updateDB};