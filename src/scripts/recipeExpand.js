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
  bindDelete();
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

    // Example getting the title + class
    // Recipe Title
    const recipeTitleForm = document.createElement('form');
    recipeTitleForm.classList.add(recipeExpandContainer.children[0].className);

    // Example converting the info to text and replacing it.
    const recipeTitleFormInput = document.createElement('input');
    recipeTitleFormInput.setAttribute('type', 'text');
    recipeTitleForm.appendChild(recipeTitleFormInput);
    recipeTitleFormInput.value = recipeExpandContainer.children[0].innerText;
    recipeExpandContainer.replaceChild(recipeTitleForm, recipeExpandContainer.children[0]);

    // Swap the button as an example, realistically our implementation
    // should have another button that appears + dissapears probably near bottom.
    document.querySelector('#editButton .editbtn').onclick = saveRecipe;
}

// TODO: Figure out how to parse multiple lines into one large div containing <li>
function saveRecipe() {
    // Example selecting the shadowroot + title form container
    const recipeExpandRoot = document.querySelector('recipe-card-expand-container').data;
    const recipeExpandContainer = recipeExpandRoot.querySelector('.recipe-expand-grid-container');
    const recipeTitleForm = recipeExpandRoot.querySelector('.recipe-expand-title');

    // Example getting the title form + class
    // Recipe Title
    const recipeTitle = document.createElement('p');
    recipeTitle.classList.add(recipeTitleForm.className);

    // Example converting the info to text and replacing it.
    recipeTitle.innerText = recipeTitleForm.children[0].value;
    recipeExpandContainer.replaceChild(recipeTitle, recipeTitleForm);

    document.querySelector('#editButton .editbtn').onclick = editRecipe;
}

function bindDelete() {
  document.querySelector(".deletebtn").addEventListener("click", function() {deleteRecipe(document.querySelector("recipe-card-expand-container").id)});
}

/**
 * 
 * @param {*} id , Id of Recipe to Delete
 */
function deleteRecipe(id) {
  // get hash table
  const deletedMap = new Map(JSON.parse(localStorage['3']));
  deletedMap.set(parseInt(id), true);
  localStorage.setItem(3, JSON.stringify(Array.from(deletedMap.entries())));
}
