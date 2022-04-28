import { searchForKey } from "./searchKey.js";

// The ID of the recipe that we clicked on to get recipe expand.
const recipeId = window.location.hash.substring(1);
const localStorage = window.localStorage;

// Initialize creating the recipe expand page.
window.addEventListener("DOMContentLoaded", init);

/**
 * INIT is automatically called when we load the recipe expand page. It called
 * the createRecipeExpand() function which will create the html structure of the
 * recipe expand page.
 */
async function init () {
    createRecipeExpand();
}

/**
 * CREATERECIPEEXPAND function grabs the #id url fragment that was appended when
 * we clicked on a recipe card and creates the html structure of the recipe expand
 * page by passing in the data string from localStorage into a custom
 * recipe-card-expand-container. See recipeCardExpand.js for how this data is parsed.
 */
function createRecipeExpand () {
    const main = document.querySelector("main");
    const element = document.createElement("recipe-card-expand-container");
    element.data = localStorage.getItem(recipeId);
    element.id = recipeId;
    main.appendChild(element);
}

/**
 * Export editRecipe function called when edit button is clicked in recipe-expand.html.
 * Hides the edit button and sets the input form and submit button to be viewable.
 */
export function editRecipe () {
    console.log("edit");
    // Example selecting the shadowroot + recipe expand container
    const recipeExpandRoot = document.querySelector("recipe-card-expand-container").data;
    const recipeExpandContainer = recipeExpandRoot.querySelector(".recipe-expand-grid-container");
    const recipeInputForm = recipeExpandRoot.querySelector(".recipe-form");

    recipeInputForm.classList.remove("hidden");
    recipeInputForm.children[0].classList.remove("hidden");

    const editButtonDiv = recipeExpandContainer.querySelector(".edit-div");
    editButtonDiv.classList.add("hidden");
    editButtonDiv.querySelector(".editbtn").classList.add("hidden");

    const submitButtonDiv = recipeExpandContainer.querySelector(".submit-div");
    submitButtonDiv.classList.remove("hidden");
    submitButtonDiv.querySelector(".submitbtn").classList.remove("hidden");
}

/**
 * Export saveRecipe alled when submit button is clicked in recipe-expand.html.
 * Grabs the new serving amount and scales ingredients accordingly. Writes back
 * changes to local storage. Hides submit button and input form, shows edit button again.
 */
export function saveRecipe () {
    console.log("save");
    // Get the edit button and show it
    const recipeExpandRoot = document.querySelector("recipe-card-expand-container").data;
    const recipeExpandContainer = recipeExpandRoot.querySelector(".recipe-expand-grid-container");
    const recipeInputForm = recipeExpandRoot.querySelector(".recipe-form");
    const editButtonDiv = recipeExpandContainer.querySelector(".edit-div");
    editButtonDiv.classList.remove("hidden");
    editButtonDiv.querySelector(".editbtn").classList.remove("hidden");

    // Hide submit button
    const submitButtonDiv = recipeExpandContainer.querySelector(".submit-div");
    submitButtonDiv.classList.add("hidden");
    submitButtonDiv.querySelector(".submitbtn").classList.add("hidden");

    // Update recipe given new serving amount
    const servings = recipeInputForm.children[0].value;
    updateRecipeServings(servings);

    // Update HTML for Serving
    const recipeServingContainer = recipeExpandContainer.querySelector(".recipe-expand-servings-time-container");
    recipeServingContainer.querySelector(".recipe-servings-label").innerText = "Servings: " + servings;

    // Update HTML for ingredients
    const ingredientContainer = recipeExpandContainer.querySelector(".recipe-expand-ingredients-container");
    const recipeExpandIngredientsList = document.createElement("ul");
    recipeExpandIngredientsList.classList.add("recipe-expand-ingredients-list");
    recipeExpandIngredientsList.id = "ingredientList";
    recipeExpandIngredientsList.innerText = "Ingredients:";
    const recipeId = document.querySelector("recipe-card-expand-container").id;
    const recipe = JSON.parse(localStorage[recipeId]);
    const ingredientsList = searchForKey(recipe, "extendedIngredients");

    for (let i = 0; i < ingredientsList.length; i++) {
        const recipeExpandIngredients = document.createElement("li");
        if (ingredientsList[i].unit === "") {
            recipeExpandIngredients.innerText = ingredientsList[i].amount + " " + ingredientsList[i].originalName;
        } else {
            recipeExpandIngredients.innerText = ingredientsList[i].amount + " " + ingredientsList[i].unit + " " + ingredientsList[i].originalName;
        }
        recipeExpandIngredientsList.appendChild(recipeExpandIngredients);
    }
    const oldIngredients = recipeExpandContainer.querySelector(".recipe-expand-ingredients-container").querySelector(".recipe-expand-ingredients-list");
    oldIngredients.remove();

    // Hide the input form
    ingredientContainer.appendChild(recipeExpandIngredientsList);
    recipeInputForm.classList.add("hidden");
    recipeInputForm.children[0].classList.add("hidden");
}

/**
 * Given a new number of servings, scales the amount of ingredients needed for the recipe
 * curently shown on recipe-expand.html accordingly.
 * @param {int} numServings , number of servings to modify the recipe's ingredients
 */
function updateRecipeServings (numServings) {
    const recipeExpandRoot = document.querySelector("recipe-card-expand-container").data;
    const recipeExpandContainer = recipeExpandRoot.querySelector(".recipe-expand-grid-container");
    const recipeServingContainer = recipeExpandContainer.querySelector(".recipe-expand-servings-time-container");
    const currServings = recipeServingContainer.querySelector(".recipe-servings-label").innerText.substring(10);
    // recipeServingContainer.querySelector('.recipe-servings-label').innerText = 'Servings: ' + numServings;

    if (isNaN(numServings)) {
        alert("Your Serving Amount is Not a Number, Try Again");
        return;
    }
    if (currServings === numServings) {
        return;
    }
    const difference = numServings / currServings;
    const recipeId = document.querySelector("recipe-card-expand-container").id;
    const recipe = JSON.parse(localStorage[recipeId]);
    const recipeIngredients = recipe.extendedIngredients;
    for (let i = 0; i < recipeIngredients.length; i++) {
        const numIngredient = recipeIngredients[i].amount;
        recipeIngredients[i].amount = numIngredient * difference;
    }
    recipe.servings = numServings;
    localStorage.setItem(recipeId, JSON.stringify(recipe));
}
