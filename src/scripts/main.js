/********************************MAIN.JS FILE********************************/
/* Location of init function where backend fetches the recipes from the API */
/* and stores the json files into local storage. Local storage will contain */
/* a hashmap that maps a recipe title to a key, and the key will map to the */
/* respective json file. Functions searchTitle, searchForKey, and           */
/* getRecipesContainingKeyword will fetch recipes from search bar input.    */
/* Lastly, backend functionallity allows frontend to populate the cards and */
/* single recipe pages.                                                     */
/****************************************************************************/

import { searchForKey, getInstructionSteps } from './extra.js';
import { ComplexSearch } from './apiComplexSearch.js';
import { GenericFetch } from './genericFetch.js';

// Backend devs will switch up using their own spoonacular key for fetching
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

/************************INITIALIZE FUNCTION************************/
/* Recipes will be fetched as soon as website is booted up, and    */
/* local storage is filled.                                        */
/*******************************************************************/
async function init () {
  // initializeServiceWorker(); will eventually implement

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
  // console.log(thing.data);

  // FILLING LOCAL STORAGE
  // first set a place in local storage that will hold the hash table itself at key 0
  localStorage.setItem(0, JSON.stringify(Array.from(hashmap.entries())));
  // extract json object and put into local storage
  for (const elem of thing.data) {
    localStorage.setItem(elem.id, JSON.stringify(elem));
  }

  // now we have local storage with the hashtable (title->id) at key 0
  // and then the rest of local storage filled with id->json files

  /**************************TESTING BACKEND BELOW**************************/
  // testing out searchTitle with a random title
  const jsonObj = searchTitle(thing.data[5].title);
  console.log('heres a json object for the title the user passed/searched:');
  console.log(jsonObj);

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
  console.log(myArr.length);
}

// HERE ARE SOME FILES WE CAN EVENTUALLY PUT INTO EXTRA.JS BUT WE'D HAVE
// TO HAVE EXTRA.JS HAVE ACCESS TO THE idArr GLOBAL VARIABLE

/************************SEARCHTITLE FUNCTION************************/
/* Take user's input for a title and returns the json object for    */
/* the desired recipe. Should take them directly to the single      */
/* recipe page if title is input exactly.                           */
/********************************************************************/
function searchTitle (title) {
  const hashmap = new Map(JSON.parse(localStorage.getItem(0))); // grabbing that hash table
  // console.log(hashmap);
  // get the id that the title maps to
  const id = hashmap.get(title);
  // and then query local storage using the id to get recipe
  const jsonRecipeObj = localStorage.getItem(id);
  return jsonRecipeObj;
}

/*****************GETRECIPESCONTAININGKEYWORD FUNCTION*****************/
/* For grabbing an array of json files with all recipes that contain  */
/* a keyword inserted into the search bar. i.e. returning an array    */
/* of all bread recipes that contain the word 'chocolate'             */
/**********************************************************************/
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

/***************************CHECKFORVALUE FUNCTION***************************/
/* Function utilized by getRecipesContainingKeyword. Will turn a json into  */
/* a string and check if string contains keyword. If yes, return true.      */
/****************************************************************************/
function checkForValue (json, value) {
  const jsonAsString = JSON.stringify(json);
  if (jsonAsString.includes(value)) {
    return true;
  }
  return false;
}

/****************************SEARCHRECIPES FUNCTION****************************/
/* Connection between frontend and backend. When user clicks search button,   */
/* search bar input will be pulled and passed to getRecipesContainingKeyword. */
/* Then the array returned will populate cards on screen pertaining to input. */
/******************************************************************************/
function searchRecipes () {
  const input = inputTxt.value;
  console.log(input);
  // take user input from the search bar
  // pass over to getRecipesContainingKeyword
  // const mySearchedFiles = getRecipesContainingKeyword(input);
  // and make use of the array of json files returned from getRecipesContainingKeyword
  // to populate cards having to do with the input user put into the search bar textarea
}
