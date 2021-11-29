// The ID of the recipe that we clicked on to get recipe expand.
const recipeId = window.location.hash.substring(1);
const localStorage = window.localStorage;

// Initialize creating the recipe expand page.
window.addEventListener('DOMContentLoaded', init);

/**
 * **************************INIT FUNCTION*************************************** *
 * This function is simply just called when we load the recipe expand page. It    *
 * just calls the createRecipeExpand() function which will create the html        *
 * structure of the recipe expand page.                                           *
 * ****************************************************************************** *
 */
async function init () {
  createRecipeExpand();
}

/**
 * **************************CREATERECIPEEXPAND FUNCTION************************* *
 * Grabs the #id url fragment that was appended when we clicked on a recipe card  *
 * and creates the html structure of the recipe expand page by passing in the     *
 * data string from localStorage into a custom recipe-card-expand-container. See  *
 * recipeCardExpand.js for how this data is parsed.                               *
 * ****************************************************************************** *
 */
function createRecipeExpand () {
  const main = document.querySelector('main');
  const element = document.createElement('recipe-card-expand-container');
  element.data = localStorage.getItem(recipeId);
  element.id = recipeId;
  main.appendChild(element);
}

// TODO: Figure out a nicer way to iterate through children and selectively replace
// children with forms that have input for 1 line, and textarea for multiple lines.
function editRecipe() {
    // Example selecting the shadowroot + recipe expand container
    const recipeExpandRoot = document.querySelector('recipe-card-expand-container').data;
    const recipeExpandContainer = recipeExpandRoot.querySelector('.recipe-expand-grid-container');
    const recipeInputForm = recipeExpandRoot.querySelector('.recipe-form');

    recipeInputForm.classList.remove("hidden");
    recipeInputForm.children[0].classList.remove("hidden");
    //recipeExpandContainer.replaceChild(recipeTitleForm, recipeExpandContainer.children[0]);

    // Swap the button as an example, realistically our implementation
    // should have another button that appears + dissapears probably near bottom.
    document.querySelector('#editButton .editbtn').onclick = saveRecipe;
}

// TODO: Figure out how to parse multiple lines into one large div containing <li>
function saveRecipe() {
    // Example selecting the shadowroot + title form container
    const recipeExpandRoot = document.querySelector('recipe-card-expand-container').data;
    const recipeExpandContainer = recipeExpandRoot.querySelector('.recipe-expand-grid-container');
    const recipeInputForm = recipeExpandRoot.querySelector('.recipe-form');

    // Example getting the title form + class
    // Recipe Title
    const servings = recipeInputForm.children[0].value;
    updateRecipeServings(servings);

    const recipeServingContainer = recipeExpandContainer.querySelector('.recipe-expand-servings-time-container');
    recipeServingContainer.querySelector('.recipe-servings').innerText = servings;
    
    const oldIngredients = recipeExpandContainer.querySelector(".recipe-expand-ingredients-container").querySelector('.recipe-expand-ingredients-list');
    //console.log(oldIngredients);
    oldIngredients.remove();

    const ingredientContainer = recipeExpandContainer.querySelector('.recipe-expand-ingredients-container');
    const recipeExpandIngredientsList = document.createElement('ul');
    recipeExpandIngredientsList.classList.add('recipe-expand-ingredients-list');
    recipeExpandIngredientsList.id = "ingredientList";
    recipeExpandIngredientsList.innerText = 'Ingredients:';
    const recipeId = document.querySelector('recipe-card-expand-container').id;
    const recipe = JSON.parse(localStorage[recipeId]);
    const ingredientsList = searchForKey(recipe, 'extendedIngredients');
    console.log(ingredientsList);
    for (let i = 0; i < ingredientsList.length; i++) {
      const recipeExpandIngredients = document.createElement('li');
      recipeExpandIngredients.innerText = ingredientsList[i].amount + ingredientsList[i].original.substring(1);
      recipeExpandIngredientsList.appendChild(recipeExpandIngredients);
    }

    console.log(recipeExpandIngredientsList);
    ingredientContainer.appendChild(recipeExpandIngredientsList);
    recipeInputForm.classList.add("hidden");
    recipeInputForm.children[0].classList.add("hidden");

    document.querySelector('#editButton .editbtn').onclick = editRecipe;
}

/**
 * 
 * @param {*} numServings , number of servings to modify the recipe's ingredients
 */
function updateRecipeServings (numServings) {
  const recipeExpandRoot = document.querySelector('recipe-card-expand-container').data;
  const recipeExpandContainer = recipeExpandRoot.querySelector('.recipe-expand-grid-container');
  const recipeServingContainer = recipeExpandContainer.querySelector('.recipe-expand-servings-time-container');
  let currServings = recipeServingContainer.querySelector('.recipe-servings').innerText;
  recipeServingContainer.querySelector('.recipe-servings').innerText = numServings;
  
  console.log(currServings);
  
  
  if (isNaN(numServings)) {
      alert('Your Serving Amount is Not a Number, Try Again');
      return;
  }
  if (currServings == numServings) {
      return;
  }
  let difference = numServings/currServings;
  const recipeId = document.querySelector('recipe-card-expand-container').id;
  const recipe = JSON.parse(localStorage[recipeId]);
  const recipeIngredients = recipe['extendedIngredients'];
  for (let i = 0; i < recipeIngredients.length; i++) {
      let numIngredient = recipeIngredients[i]['amount'];
      recipeIngredients[i]['amount'] = numIngredient * difference;
  }
  console.log(recipe);
  localStorage.setItem(recipeId, JSON.stringify(recipe));
}

function searchForKey (object, key) {
  let value;
  Object.keys(object).some(function (k) {
    if (k === key) {
      value = object[k];
      return true;
    }
    if (object[k] && typeof object[k] === 'object') {
      value = searchForKey(object[k], key);
      return value !== undefined;
    }
    return false;
  });
  return value;
}