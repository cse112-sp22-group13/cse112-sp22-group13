// The ID of the recipe that we clicked on to get recipe expand.
const recipeId = window.location.hash.substring(1);
const localStorage = window.localStorage;

// Initialize creating the recipe expand page.
window.addEventListener('DOMContentLoaded', init);

async function init() {
    createRecipeExpand();
}

// Create the recipe expand view dynamically. See RecipeCardExpand.js
function createRecipeExpand() {
    const main = document.querySelector('main');
    const element = document.createElement('recipe-card-expand-container');
    element.data = localStorage.getItem(recipeId);
    main.appendChild(element);
}