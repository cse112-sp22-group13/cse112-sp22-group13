import { searchForKey, getInstructionSteps } from './searchKey.js';
import { editRecipe, saveRecipe } from './recipeExpand.js';

class RecipeCardExpand extends HTMLElement {
  constructor () {
    super();
    this.attachShadow({ mode: 'open' });
  }

  /**
     *  @return {*} The HTML structure of recipe expand
     */
  get data () {
    return this.shadowRoot;
  }

  /**
     *  @param {String} data The data to turn into JSOn and parse.
     */
  set data (data) {
    const recipeData = JSON.parse(data);
    console.log(recipeData);

    // Apply styling to the shadow dom
    const linkStyleSheet = document.createElement('link');
    linkStyleSheet.setAttribute('rel', 'stylesheet');
    linkStyleSheet.setAttribute('href', './recipe_expand.css');
    this.shadowRoot.appendChild(linkStyleSheet);

    // Container div + class.
    const recipeExpandContainer = document.createElement('div');
    recipeExpandContainer.classList.add('recipe-expand-grid-container');

    // Recipe title p + class.
    const recipeExpandTitle = document.createElement('p');
    recipeExpandTitle.classList.add('recipe-expand-title');
    recipeExpandTitle.innerText = searchForKey(recipeData, 'title');
    recipeExpandContainer.appendChild(recipeExpandTitle);

    // Recipe img container + class.
    const recipeExpandImgContainer = document.createElement('div');
    recipeExpandImgContainer.classList.add('recipe-img-container');

    // Recipe img + class
    const recipeExpandImg = document.createElement('img');
    recipeExpandImg.src = recipeData.image;
    recipeExpandImgContainer.appendChild(recipeExpandImg);
    recipeExpandContainer.appendChild(recipeExpandImgContainer);

    // Recipe servings/time container + class.
    const recipeExpandServingsTimeContainer = document.createElement('div');
    recipeExpandServingsTimeContainer.classList.add('recipe-expand-servings-time-container');

    // Recipe servings label + class.
    const recipeExpandServingsLabel = document.createElement('p');
    recipeExpandServingsLabel.classList.add('recipe-servings-label');
    recipeExpandServingsLabel.innerText = 'Servings:';

    // Recipe servings + class.
    const recipeExpandServings = document.createElement('p');
    recipeExpandServings.classList.add('recipe-servings');
    recipeExpandServings.innerText = searchForKey(recipeData, 'servings');

    // Recipe time label + class.
    const recipeExpandTimeLabel = document.createElement('p');
    recipeExpandTimeLabel.classList.add('recipe-time-label');
    recipeExpandTimeLabel.innerText = 'Time:';

    // Recipe time + class.
    const recipeExpandTime = document.createElement('p');
    recipeExpandTime.classList.add('recipe-time');
    recipeExpandTime.innerText = searchForKey(recipeData, 'readyInMinutes');

    // Construct the servings/time container and append to recipe expand.
    recipeExpandServingsTimeContainer.appendChild(recipeExpandServingsLabel);
    recipeExpandServingsTimeContainer.appendChild(recipeExpandServings);
    recipeExpandServingsTimeContainer.appendChild(recipeExpandTimeLabel);
    recipeExpandServingsTimeContainer.appendChild(recipeExpandTime);
    recipeExpandContainer.appendChild(recipeExpandServingsTimeContainer);

    // Recipe ingredients container + class.
    const recipeExpandIngredientsContainer = document.createElement('div');
    recipeExpandIngredientsContainer.classList.add('recipe-expand-ingredients-container');
    recipeExpandIngredientsContainer.id = 'ingredientContainer';

    // Recipe ingredients list + class.
    const recipeExpandIngredientsList = document.createElement('ul');
    recipeExpandIngredientsList.classList.add('recipe-expand-ingredients-list');
    recipeExpandIngredientsList.id = 'ingredientList';
    recipeExpandIngredientsList.innerText = 'Ingredients:';

    // Parse the recipe's ingredients and appends them to the list.
    // NOTE: We use original here, which may or may not contain appropriate
    // # of units + ingredient name. The alternative is to parse amount,
    // unit, meta/metaInformation, and name to reconstruct the correct info.
    const ingredientsList = searchForKey(recipeData, 'extendedIngredients');
    for (let i = 0; i < ingredientsList.length; i++) {
      const recipeExpandIngredients = document.createElement('li');

      /* let myOriginal = ingredientsList[i].original;
      let index = 0;
      for (let j = 0; j < myOriginal.length; j++) {
        if (myOriginal.substring(j, j + 1) === ' ') {
          index = j;
          break;
        }
      } */

      if (ingredientsList[i].unit === '') {
        recipeExpandIngredients.innerText = ingredientsList[i].amount +
          ' ' + ingredientsList[i].originalName;
      } else {
        recipeExpandIngredients.innerText = ingredientsList[i].amount +
          ' ' + ingredientsList[i].unit +
          ' ' + ingredientsList[i].originalName;
      }

      recipeExpandIngredientsList.appendChild(recipeExpandIngredients);
    }

    // Construct the ingredients container and append to recipe expand.
    recipeExpandIngredientsContainer.appendChild(recipeExpandIngredientsList);
    recipeExpandContainer.appendChild(recipeExpandIngredientsContainer);

    // Recipe instructions container + class.
    const recipeExpandInstructionsContainer = document.createElement('div');
    recipeExpandInstructionsContainer.classList.add('recipe-expand-instructions-container');

    // Recipe instructions list + class.
    const recipeExpandInstructionsList = document.createElement('ol');
    recipeExpandInstructionsList.classList.add('recipe-expand-instructions-list');
    recipeExpandInstructionsList.innerText = 'Instructions:';

    // Parse the recipe's instructions and appends them to the list.
    // NOTE: We also parse for supplies here, since we can't obtain them
    // any other way without making another network call.
    const instructionsList = getInstructionSteps(recipeData);
    const suppliesList = [];
    for (let i = 0; i < instructionsList.length; i++) {
      const recipeExpandInstructions = document.createElement('li');
      recipeExpandInstructions.innerText = instructionsList[i].step;
      recipeExpandInstructionsList.appendChild(recipeExpandInstructions);

      // Parse the instruction for the associated supplies.
      const parsedSupplies = instructionsList[i].equipment;
      // Iterate through the associated parsed supplies. If the element
      // is not in the supplies list, add it.
      for (let j = 0; j < parsedSupplies.length; j++) {
        if (!(suppliesList.filter((e) => e.id === parsedSupplies[j].id).length > 0)) {
          suppliesList.push(parsedSupplies[j]);
        }
      }
    }

    // Recipe supplies container + class.
    const recipeExpandSuppliesContainer = document.createElement('div');
    recipeExpandSuppliesContainer.classList.add('recipe-expand-supplies-container');

    // Recipe supplies list + class.
    const recipeExpandSuppliesList = document.createElement('ul');
    recipeExpandSuppliesList.classList.add('recipe-expand-supplies-list');
    recipeExpandSuppliesList.innerText = 'Supplies:';

    // Parse the recipe's supplies that we obtained earlier.
    for (let i = 0; i < suppliesList.length; i++) {
      const recipeExpandSupplies = document.createElement('li');
      recipeExpandSupplies.innerText = suppliesList[i].name;
      recipeExpandSuppliesList.appendChild(recipeExpandSupplies);
    }

    // Construct the instructions container. Construct the supplies
    // container. Append instructions after supplies.
    recipeExpandSuppliesContainer.appendChild(recipeExpandSuppliesList);
    recipeExpandInstructionsContainer.appendChild(recipeExpandInstructionsList);
    recipeExpandContainer.appendChild(recipeExpandSuppliesContainer);
    recipeExpandContainer.appendChild(recipeExpandInstructionsContainer);

    // Delvin's code, adds a cook view button to the bottom of the html structure.
    const recipeExpandButton = document.createElement('button');
    recipeExpandButton.classList.add('recipe-expand-button');
    recipeExpandButton.innerText = 'See Cook View';
    recipeExpandButton.addEventListener('click', () => {
      const recipeId = window.location.hash.substring(1);
      console.log('clicked', recipeId);
      window.location.href = `../cook_view/cook_view.html#${recipeId}`;
    });
    recipeExpandContainer.appendChild(recipeExpandButton);

    // Example getting the title + class
    // Recipe Title
    const recipeInputForm = document.createElement('form');
    recipeInputForm.classList.add('recipe-form');

    // Example converting the info to text and replacing it.
    const recipeInputFormInput = document.createElement('input');
    recipeInputFormInput.setAttribute('type', 'text');
    recipeInputForm.appendChild(recipeInputFormInput);
    recipeInputFormInput.value = '2';
    recipeInputForm.classList.add('hidden');
    recipeInputFormInput.classList.add('hidden');
    recipeExpandContainer.appendChild(recipeInputForm);

    // Submit button
    const submitButtonDiv = document.createElement('div');
    submitButtonDiv.id = 'submitButton';
    submitButtonDiv.classList.add('submit-div');
    const submitButton = document.createElement('button');
    submitButton.classList.add('submitbtn');
    submitButtonDiv.classList.add('hidden');
    submitButton.classList.add('hidden');
    submitButton.innerText = 'Submit';
    submitButton.addEventListener('click', () => { saveRecipe(); });
    submitButtonDiv.appendChild(submitButton);
    recipeExpandContainer.appendChild(submitButtonDiv);

    // Edit button
    const editButtonDiv = document.createElement('div');
    editButtonDiv.id = 'editButton';
    editButtonDiv.classList.add('edit-div');
    const editButton = document.createElement('button');
    editButton.classList.add('editbtn');
    editButton.innerText = 'Edit';
    editButton.addEventListener('click', () => { editRecipe(); });
    editButtonDiv.appendChild(editButton);
    recipeExpandContainer.appendChild(editButtonDiv);

    // Append the container to the shadowroot.
    this.shadowRoot.appendChild(recipeExpandContainer);
  }
}

// Define the custom recipe expand container html element.
customElements.define('recipe-card-expand-container', RecipeCardExpand);
