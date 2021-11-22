// main.js
import { searchForKey, getInstructionSteps } from './extra.js';
import { ComplexSearch } from './apiComplexSearch.js';
import { GenericFetch } from './genericFetch.js';

const API_KEY = '85859c45fa7949ec8b915c61690f2ce1';

window.addEventListener('DOMContentLoaded', init);
// LOCAL STORAGE
const localStorage = window.localStorage;
// for functions to use as keys to access json files in localStorage
const idArr = [];
// SEARCH BAR BUTTON
const searchBar = document.querySelector('button');
searchBar.addEventListener('click', searchRecipes);
const inputTxt = document.getElementById('search-bar');

/**
 * Initialize function, begins all of the JS code in this file
 * */
async function init () {
  // initializeServiceWorker();

  const initialSearch = {
    method: 'GET',
    url: 'https://api.spoonacular.com/recipes/complexSearch',
    params: {
      query: ' ', // The (natural language) recipe search query.
      offset: 0, // The number of results to skip (between 0 and 900).
      number: 20, // The number of expected results (between 1 and 100).
      apiKey: API_KEY
    }
  };
  const search = new ComplexSearch(initialSearch);

  await ComplexSearch.fComplexSearch(search);
  //console.log(search.data);

  // grabbing recipes with id's
  let idString = '';

  // making hash table that maps titles (key) to recipe id's (values)
  const hashmap = new Map();
  for (const elem of search.data.results) {
    hashmap.set(elem.title, elem.id);
    idString = idString + elem.id + ',';
    idArr.push(elem.id);
  }
  // console.log(JSON.stringify(Array.from(hashmap.entries())));
  // console.log(search.data.results);

  const bulkOptions = {
    method: 'GET',
    url: 'https://api.spoonacular.com/recipes/informationBulk',
    params: {
      ids: idString,
      includeNutrition: false,
      apiKey: API_KEY
    }
  };

  const thing = new GenericFetch(bulkOptions);
  await GenericFetch.fGenericFetch(thing);
  //console.log(thing.data);

  // FILLING LOCAL STORAGE
  // first set a place in local storage that will hold the hash table itself at key 0
  localStorage.setItem(0, JSON.stringify(Array.from(hashmap.entries())));
  // extract json object and put into local storage
  for (const elem of thing.data) {
    localStorage.setItem(elem.id, JSON.stringify(elem));
    //console.log(elem);
  }

  createRecipeCards();
  // now we have local storage with the hashtable (title->id) at key 0
  // and then the rest of local storage filled with id->json files

  // testing out searchTitle with a random title
  //const jsonObj = searchTitle(thing.data[5].title);
  //console.log('heres a json object for the title the user passed/searched:');
  //console.log(jsonObj);

  // TESTING SEARCHFORKEY
  const obj = searchForKey(thing.data[0], 'title');
  const obj2 = searchForKey(searchForKey(thing.data[1], 'analyzedInstructions'), 'steps');
  const obj2a = getInstructionSteps(thing.data[1]);
  const obj3 = getInstructionSteps(thing.data[2]);
  console.log(obj);
  console.log(obj2);
  console.log(obj2a);
  console.log(obj3);

  // TESTING GETRECIPESCONTAININGKEYWORD
  const myArr = getRecipesContainingKeyword('chocolate');
  //console.log(myArr.length);
}



function createRecipeCards () {
  // This function is called for you up above.
  // From within this function you can access the recipe data from the JSON
  // files with the recipeData Object above. Make sure you only display the
  // three recipes we give you, you'll use the bindShowMore() function to
  // show any others you've added when the user clicks on the "Show more" button.
  const main = document.querySelector("main");
  // get Hash Tables
  const hashes = JSON.parse(localStorage['0']);
  // get array of ids
  const elementIdArr = hashes.map(h => h[1]);
  elementIdArr.forEach(id => {
    const element = document.createElement('recipe-card');
    element.data = localStorage[`${id}`];
    main.appendChild(element);
  });
}



// HERE ARE SOME FILES WE CAN EVENTUALLY PUT INTO EXTRA.JS BUT WE'D HAVE
// TO HAVE EXTRA.JS HAVE ACCESS TO THE idArr GLOBAL VARIABLE

// take user's input for a title and returns the json object for the desired recipe
function searchTitle (title) {
  const hashmap = new Map(JSON.parse(localStorage.getItem(0))); // grabbing that hash table
  // console.log(hashmap);
  // get the id that the title maps to
  const id = hashmap.get(title);
  // and then query local storage using the id to get recipe
  const jsonRecipeObj = localStorage.getItem(id);
  return jsonRecipeObj;
}

// FOR GRABBING AN ARRAY OF JSON FILES CONTAINING A KEYWORD LIKE 'CHOCOLATE'
function getRecipesContainingKeyword (keyword) {
  const arr = [];
  // localStorage.getItem(key) where the key is the title/user input
  for (const id of idArr) {
    const jsonFile = localStorage.getItem(id);
    if (checkForValue(jsonFile, keyword)) {
      arr.push(jsonFile);
    }
  }
  return arr;
}

function checkForValue (json, value) {
  const jsonAsString = JSON.stringify(json);
  if (jsonAsString.includes(value)) {
    return true;
  }
  return false;
}

function searchRecipes () {
  const input = inputTxt.value;
  console.log(input);
  // take user input from the search bar
  // pass over to getRecipesContainingKeyword
  // const mySearchedFiles = getRecipesContainingKeyword(input);
  // and make use of the array of json files returned from getRecipesContainingKeyword
  // to populate cards having to do with the input user put into the search bar textarea
}
