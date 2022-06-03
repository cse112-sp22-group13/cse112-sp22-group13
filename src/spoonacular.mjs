//import {addRecipe, getRecipes, updateDB} from "./firebase.mjs";
//const myFunctions = require("../src/firebase.cjs");

async function initializeDB() {
    // fetch from spoonacular (replace url later)
    await fetch("https://raw.githubusercontent.com/cse112-sp22-group13/cse112-sp22-group13/feature/firebaseDatabase/src/why.txt", {
        method: "GET",
        headers: {
            "Content-Type": "text/plain",
            "Accept-Encoding": "gzip"
        }
    })  
        .then(response => response.text())
        .then(text => JSON.parse(text))
        .then(thing => {
            // add recipes to DB
            for (const key in thing) {
                var elem = thing[key];
                //addRecipe(JSON.stringify(elem));
                //updateDB("recipe_categories", JSON.stringify(elem));
            }
        });
}

export {initializeDB};