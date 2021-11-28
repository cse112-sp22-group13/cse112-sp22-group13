import { searchForKey/*, getInstructionSteps */ } from './searchKey.js';
// import { markFav, unFav } from './FavoriteRecipe.js';

// SEARCH BAR BUTTON
const searchBar = document.querySelector('button');
const inputTxt = document.querySelector('.search-bar');
searchBar.addEventListener('click', searchRecipes);

window.addEventListener('DOMContentLoaded', init);
const localStorage = window.localStorage;

async function init () {
  bindEnterKey();
  createRecipeCards();

  // now we have local storage with the hashtable (title->id) at key 0
  // and then the rest of local storage filled with id->json files

  // *************************TESTING BACKEND BELOW**************************
  // testing out searchTitle with a random title
  // const jsonObj = searchTitle(thing.data[5].title);
  // console.log('heres a json object for the title the user passed/searched:');
  // console.log(jsonObj);

  // TESTING SEARCHFORKEY
  /* const objTitle = searchForKey(thing.data[0], 'title');
  const objIng = searchForKey(thing.data[0], 'extendedIngredients');
  const objCheap = searchForKey(thing.data[0], 'cheap');
  const objDFree = searchForKey(thing.data[0], 'dairyFree');
  const objGFree = searchForKey(thing.data[0], 'glutenFree');
  const objVegan = searchForKey(thing.data[0], 'vegan');
  const objVege = searchForKey(thing.data[0], 'vegetarian');
  const objHealthy = searchForKey(thing.data[0], 'veryHealthy');
  console.log(objTitle);
  console.log(objIng);
  console.log(objCheap);
  console.log(objDFree);
  console.log(objGFree);
  console.log(objVegan);
  console.log(objVege);
  console.log(objHealthy);
  */

  // const arr = getTags(thing.data[3]);
  // console.log(arr);
}

/**
 * **************************CREATERECIPECARDS FUNCTION************************** *
 * This function is called for you up above.                                      *
 * From within this function you can access the recipe data from the JSON         *
 * files with the recipeData Object above. Make sure you only display the         *
 * three recipes we give you, you'll use the bindShowMore() function to           *
 * show any others you've added when the user clicks on the "Show more" button.   *
 * ****************************************************************************** *
 */
function createRecipeCards () {
  const main = document.querySelector('main');
  // get hash table
  const hashes = JSON.parse(localStorage['0']);
  // get array of ids
  const elementIdArr = hashes.map(h => h[1]);
  elementIdArr.forEach(id => {
    const element = document.createElement('recipe-card');
    element.data = localStorage[`${id}`];
    element.id = id;
    //hides the recipe forever if it is considered deleted in localStorage (uncomment when ready to use)
    const deletedMap = JSON.parse(localStorage['3']);
    if (deletedMap[id] == true) {
        element.classList.add("deleted");
    }
    main.appendChild(element);
    element.addEventListener('click', (e) => {
      window.location.href = '/src/recipe_expand/recipe_expand.html' + '#' + element.id;
    });
  });
}

/**
   * **************************SEARCHRECIPES FUNCTION************************** *
   * Connection between frontend and backend. When user clicks search button,   *
   * search bar input will be pulled and passed to getRecipesContainingKeyword. *
   * Then the array returned will populate cards on screen pertaining to input. *
   * ************************************************************************** *
   */
function searchRecipes () {
  // take user input from the search bar
  const input = inputTxt.value;
  if (input === '') {
    resetCards();
    return;
  }
  console.log(input);

  // pass over to getRecipesNotContainingKeyword
  const myArr = getRecipesNotContainingKeyword(input);
  console.log(myArr.length);
  // console.log(localStorage.length);

  if (myArr.length === localStorage.length - 2) {
    alert('No recipes matching search found for ' + input);
    return;
  }

  resetCards();
  // and make use of the array of json files returned from getRecipesContainingKeyword
  // to populate cards having to do with the input user put into the search bar textarea
  for (let i = 0; i < myArr.length; i++) {
    const recipeCard = document.getElementById(`${myArr[i]}`);
    recipeCard.classList.add('hidden');
  }
}

/**
   * ***************************RESETCARDS FUNCTION**************************** *
   * Show all Recipe Cards                                                      *
   * ************************************************************************** *
   */
function resetCards () {
  const recipeCards = document.querySelectorAll('recipe-card');
  recipeCards.forEach(function (card) {
    card.classList.remove('hidden');
  });
}

/**
   * *************GETRECIPESNOTCONTAININGKEYWORD FUNCTION************** *
   * For grabbing an array of id' with all recipes that don't           *
   * contain keyword inserted into the search bar. i.e. returning       *
   * an array of all bread recipes that don't contain the word          *
   * 'chocolate'                                                        *
   * ****************************************************************** *
   */
function getRecipesNotContainingKeyword (keyword) {
  // couple base cases
  let input = keyword.toLowerCase();
  if (keyword === 'dairy free') { input = 'dairyfree'; }
  if (keyword === 'gluten free') { input = 'glutenfree'; }

  const arr = [];
  // get hash table
  const hashes = JSON.parse(localStorage['0']);
  // get array of ids
  const elementIdArr = hashes.map(h => h[1]);

  for (const id of elementIdArr) {
    const jsonFile = JSON.parse(localStorage.getItem(id));
    const tags = getTags(jsonFile);
    // console.log(tags);

    // checks if input is NOT located in title, ingredients, or rest of tag array
    if (!(tags[0].includes(input) || tags[1].includes(input) || tags.includes(input))) {
      arr.push(id);
    }
  }
  return arr;
}

/**
   * *************************GETTAGS FUNCTION************************* *
   * Function that will build an array containing title, ingredients,   *
   * and tags for true booleans within the json file passed             *
   * ****************************************************************** *
   */
function getTags (jsonFile) {
  const tagsArr = [];
  // title
  tagsArr.push(String(searchForKey(jsonFile, 'title')).toLowerCase());
  // ingredients
  tagsArr.push(JSON.stringify(searchForKey(jsonFile, 'extendedIngredients')).toLowerCase());

  // booleans
  if (searchForKey(jsonFile, 'cheap')) { tagsArr.push('cheap'); }
  if (searchForKey(jsonFile, 'dairyFree')) { tagsArr.push('dairyfree'); }
  if (searchForKey(jsonFile, 'glutenFree')) { tagsArr.push('glutenfree'); }
  if (searchForKey(jsonFile, 'vegan')) { tagsArr.push('vegan'); }
  if (searchForKey(jsonFile, 'vegetarian')) { tagsArr.push('vegetarian'); }
  if (searchForKey(jsonFile, 'veryHealthy')) { tagsArr.push('healthy'); }

  return tagsArr;
}

/**
   * *************BINDENTERKEY FUNCTION************* *
   * Set enter key works for search bar              *
   * *********************************************** *
   */
function bindEnterKey () {
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      searchRecipes();
    }
  });
}
