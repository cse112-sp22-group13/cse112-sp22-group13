// The ID of the recipe that we clicked on to get recipe expand.
const recipeId = window.location.hash.substring(1);
const localStorage = window.localStorage;

// Initialize creating the recipe expand page.
window.addEventListener('DOMContentLoaded', init);

/**
 * **************************INIT FUNCTION*************************************** *
 * This function is simply just called when we load the cook view page. It        *
 * just calls the createCookView() function which will create the html            *
 * structure of the cook view page.                                               *
 * ****************************************************************************** *
 */
async function init () {
  createCookView();
}

/**
 * **************************CREATECOOKVIEW FUNCTION*************************     *
 * Grabs the #id url fragment that was appended when we clicked on a recipe card  *
 * and creates the html structure of the cook view page by passing in the         *
 * data string from localStorage into a custom recipe-card-expand-container. See  *
 * recipeCardExpand.js for how this data is parsed.                               *
 * ****************************************************************************** *
 */
function createCookView () {
  const main = document.querySelector('main');
  const element = document.createElement('cook-view');
  element.data = localStorage.getItem(recipeId);
  main.appendChild(element);
}
