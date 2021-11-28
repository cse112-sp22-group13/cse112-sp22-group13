import { searchForKey, getInstructionSteps } from './searchKey.js';

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

    // Recipe ingredients list + class.
    const recipeExpandIngredientsList = document.createElement('ul');
    recipeExpandIngredientsList.classList.add('recipe-expand-ingredients-list');
    recipeExpandIngredientsList.innerText = 'Ingredients:';

    // Parse the recipe's ingredients and appends them to the list.
    // NOTE: We use original here, which may or may not contain appropriate
    // # of units + ingredient name. The alternative is to parse amount,
    // unit, meta/metaInformation, and name to reconstruct the correct info.
    const ingredientsList = searchForKey(recipeData, 'extendedIngredients');
    for (let i = 0; i < ingredientsList.length; i++) {
      const recipeExpandIngredients = document.createElement('li');
      recipeExpandIngredients.innerText = ingredientsList[i].original;
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

    // Append the container to the shadowroot.
    this.shadowRoot.appendChild(recipeExpandContainer);
  }
}

// Define the custom recipe expand container html element.
customElements.define('recipe-card-expand-container', RecipeCardExpand);
