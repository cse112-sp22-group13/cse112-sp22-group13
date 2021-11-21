import { searchForKey } from "./extra.js";

class RecipeCard extends HTMLElement {
  constructor () {
    // Part 1 Expose - TODO
    super();
    this.attachShadow({ mode: 'open' });
    // You'll want to attach the shadow DOM here
  }

  get data () {
    return this.shadowRoot;
  }

  /**
   * @param {any} data
   */
  set data (data) {
    // Here's the root element that you'll want to attach all of your other elements to
    console.log(JSON.parse(data)['image']);
    const recipeGrid = document.createElement('div');
    recipeGrid.classList.add('recipe-grid-container');
    const imgGrid = document.createElement('div');
    imgGrid.classList.add('recipe-grid-img');
    let img1 = document.createElement('img');
    
    img1.src = (JSON.parse(data)['image']);
    img1.height = '108px';
    img1.width = '108px';
    img1.alt = 'recipe-preview';
    imgGrid.appendChild(img1);
    recipeGrid.appendChild(imgGrid);

    let titleGrid = document.createElement('div');
    titleGrid.classList.add('recipe-grid-title');
    let p1 = document.createElement('p');
    p1.innerText = searchForKey(JSON.parse(data), 'title');
    titleGrid.appendChild(p1);
    recipeGrid.appendChild(titleGrid);

    let timeOrgGrid = document.createElement('div');
    timeOrgGrid.classList.add('recipe-grid-time-org')
    let time = document.createElement('time');
    time.classList.add('recipe-time');
    time.innerText = searchForKey(JSON.parse(data), 'readyInMinutes');
    let p2 = document.createElement('p');
    p2.classList.add('organization');
    p2.innerText = (searchForKey(JSON.parse(data), 'creditsText'));

    timeOrgGrid.appendChild(time);
    timeOrgGrid.appendChild(p2);
    recipeGrid.appendChild(timeOrgGrid);

    let descriptionGrid = document.createElement('div');
    descriptionGrid.classList.add('recipe-grid-description');
    let p3 = document.createElement('p');
    p3.innerText = searchForKey(JSON.parse(data), "summary");
    descriptionGrid.appendChild(p3);
    recipeGrid.appendChild(descriptionGrid);

    let tagsGrid = document.createElement('div');
    let tagList = document.createElement('ul');
    tagsGrid.classList.add('recipe-grid-tags-rating');
    tagList.classList.add('tags');
    tagList.innerText = "Tags: ";
    let tag = document.createElement("li");
    tag.classList.add('tag');
    tag.innerText = "Temp Tag 1";
    tagList.appendChild(tag);
    tagsGrid.appendChild(tagList);
    recipeGrid.appendChild(tagList);

    let ratingGrid = document.createElement('div');
    ratingGrid.classList.add('recipe-grid-rating');
    let p4 = document.createElement('p');
    p4.innerText = "Spoonacular Score: " + searchForKey(JSON.parse(data), "spoonacularScore");
    ratingGrid.appendChild(p4);
    recipeGrid.appendChild(ratingGrid);
    

    //console.log(searchForKey(JSON.parse(data), "title"));
  }
}

/*********************************************************************/
/** *                       Helper Functions:                       ***/
/** *          Below are some functions I used when making          ***/
/** *     the solution, feel free to use them or not, up to you     ***/
/*********************************************************************/
/**
   * Extract the URL from the given recipe schema JSON object
   * @param {Object} data Raw recipe JSON to find the URL of
   * @returns {String} If found, it returns the URL as a string, otherwise null
   */
function getUrl (data) {
  if (data.url) return data.url;
  if (data['@graph']) {
    for (let i = 0; i < data['@graph'].length; i++) {
      if (data['@graph'][i]['@type'] === 'Article') return data['@graph'][i]['@id'];
    }
  };
  return null;
}

/**
   * Similar to getUrl(), this function extracts the organizations name from the
   * schema JSON object. It's not in a standard location so this function helps.
   * @param {Object} data Raw recipe JSON to find the org string of
   * @returns {String} If found, it retuns the name of the org as a string, otherwise null
   */
function getOrganization (data) {
  if (data.publisher?.name) return data.publisher?.name;
  if (data['@graph']) {
    for (let i = 0; i < data['@graph'].length; i++) {
      if (data['@graph'][i]['@type'] === 'Organization') {
        return data['@graph'][i].name;
      }
    }
  };
  return null;
}

/**
   * Converts ISO 8061 time strings to regular english time strings.
   * Not perfect but it works for this lab
   * @param {String} time time string to format
   * @return {String} formatted time string
   */
function convertTime (time) {
  let timeStr = '';

  // Remove the 'PT'
  time = time.slice(2);

  const timeArr = time.split('');
  if (time.includes('H')) {
    for (let i = 0; i < timeArr.length; i++) {
      if (timeArr[i] === 'H') return `${timeStr} hr`;
      timeStr += timeArr[i];
    }
  } else {
    for (let i = 0; i < timeArr.length; i++) {
      if (timeArr[i] === 'M') return `${timeStr} min`;
      timeStr += timeArr[i];
    }
  }

  return '';
}

/**
   * Takes in a list of ingredients raw from imported data and returns a neatly
   * formatted comma separated list.
   * @param {Array} ingredientArr The raw unprocessed array of ingredients from the
   *                              imported data
   * @return {String} the string comma separate list of ingredients from the array
   */
function createIngredientList (ingredientArr) {
  let finalIngredientList = '';

  /**
     * Removes the quantity and measurement from an ingredient string.
     * This isn't perfect, it makes the assumption that there will always be a quantity
     * (sometimes there isn't, so this would fail on something like '2 apples' or 'Some olive oil').
     * For the purposes of this lab you don't have to worry about those cases.
     * @param {String} ingredient the raw ingredient string you'd like to process
     * @return {String} the ingredient without the measurement & quantity
     * (e.g. '1 cup flour' returns 'flour')
     */
  function _removeQtyAndMeasurement (ingredient) {
    return ingredient.split(' ').splice(2).join(' ');
  }

  ingredientArr.forEach(ingredient => {
    ingredient = _removeQtyAndMeasurement(ingredient);
    finalIngredientList += `${ingredient}, `;
  });

  // The .slice(0,-2) here gets ride of the extra ', ' added to the last ingredient
  return finalIngredientList.slice(0, -2);
}

// Define the Class so you can use it as a custom element.
// This is critical, leave this here and don't touch it
customElements.define('recipe-card', RecipeCard);
