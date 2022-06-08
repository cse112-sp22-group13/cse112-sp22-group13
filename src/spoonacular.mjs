import {addRecipe, getRecipes, updateDB} from "./firebase.mjs";

/**
 * Initialize the database with data from Spoonacular. Run manually.
 */
async function initializeDB() {
    // fetch from spoonacular (replace url later)
    /*
    await fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=03722052291e4f84bce1021acd82624f&addRecipeInformation=True&fillIngredients=True&sort=popularity&query=spanish%20style%20salmon%20fillets" , {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })  
        .then(response => response.text())
        .then(text => JSON.parse(text))
        .then(thing => {
            // add recipes to DB
            for (const key in thing["results"]) {
                var elem = thing["results"][key];
                // addRecipe(JSON.stringify(elem));
                // updateDB("recipe_categories", JSON.stringify(elem));
            }
        });
    */
}

export {initializeDB};