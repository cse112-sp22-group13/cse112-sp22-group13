import {addRecipe, getRecipes, updateDB} from "./firebase.mjs";
//const myFunctions = require("../src/firebase.cjs");

async function initializeDB() {
    // fetch from spoonacular (replace url later)
    await fetch("https://raw.githubusercontent.com/cse112-sp22-group13/cse112-sp22-group13/feature/firebaseDatabase/src/why.txt", {
    // await fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=03722052291e4f84bce1021acd82624f&addRecipeInformation=True&fillIngredients=True&sort=popularity&query=spanish%20style%20salmon%20fillets" , {
        method: "GET",
        headers: {
            "Content-Type": "text/plain",
            "Accept-Encoding": "gzip"
            // "Content-Type": "application/json"
        }
    })  
        .then(response => response.text())
        .then(text => JSON.parse(text))
        .then(thing => {
            // add recipes to DB
            for (const key in thing) {
                var elem = thing[key];
                // addRecipe(JSON.stringify(elem));
                // updateDB("recipe_categories", JSON.stringify(elem));
            }
        });
}

export {initializeDB};