/**
 * ******************************MAIN.JS FILE****************************** *
 * Location of init function where backend fetches the recipes from the API *
 * and stores the json files into local storage. Local storage will contain *
 * a hashmap that maps a recipe title to a key, and the key will map to the *
 * respective json file. Functions searchTitle, searchForKey, and           *
 * getRecipesContainingKeyword will fetch recipes from search bar input.    *
 * Lastly, backend functionallity allows frontend to populate the cards and *
 * single recipe pages.                                                     *
 * ************************************************************************ *
 */

import { ComplexSearch } from './apiComplexSearch.js';
import { GenericFetch } from './genericFetch.js';

// Backend devs will switch up using their own spoonacular key for fetching
const API_KEY = '85859c45fa7949ec8b915c61690f2ce1';

window.addEventListener('DOMContentLoaded', init);
// LOCAL STORAGE
const localStorage = window.localStorage;

/**
  * **********************INITIALIZE FUNCTION********************** *
  * Recipes will be fetched as soon as website is booted up, and    *
  * local storage is filled.                                        *
  * *************************************************************** *
  */
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
  // console.log(search.data);

  // grabbing recipes with id's
  let idString = '';

  // making hash table that maps titles (key) to recipe id's (values)
  const hashmap = new Map();
  for (const elem of search.data.results) {
    hashmap.set(elem.title, elem.id);
    idString = idString + elem.id + ',';
  }

  // SANAT
  const objSanat = {
    analyzedInstructions: [{ name: '', steps: [] }],
    title: 'Sanat',
    image: 'https://avatars.githubusercontent.com/u/31770675?v=4',
    extendedIngredients: [{ original: 'naan bread' }, { original: 'spices' }, { original: 'hot dog' }],
    cheap: true,
    dairyFree: false,
    glutenFree: false,
    vegan: false,
    vegetarian: false,
    healthy: false
  };
  hashmap.set(objSanat.title, 1);
  localStorage.setItem(1, JSON.stringify(objSanat));

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
  console.log(thing.data);

  // FILLING LOCAL STORAGE
  // first set a place in local storage that will hold the hash table itself at key 0
  localStorage.setItem(0, JSON.stringify(Array.from(hashmap.entries())));
  // extract json object and put into local storage
  for (const elem of thing.data) {
    localStorage.setItem(elem.id, JSON.stringify(elem));
    console.log(elem);
  }
  console.log("we are here");

  // MAKING FAVORITES HASHMAP THAT WILL BE LOCATED AT #2 IN LOCAL STORAGE
  const favmap = new Map();
  // MAKING DELETES HASHMAP THAT WILL BE LOCATED AT #3 IN LOCAL STORAGE
  const deletedMap = new Map();
  // get hash table
  const hashes = JSON.parse(localStorage['0']);
  // get array of ids
  const elementIdArr = hashes.map(h => h[1]);
  for (let i = 0; i < elementIdArr.length; i++) {
    // initialze every id as false (not yet a favorite)
    favmap.set(elementIdArr[i], false);
  }
  // store the fav and del maps in localstorage
  localStorage.setItem(2, JSON.stringify(Array.from(favmap.entries())));
  localStorage.setItem(3, JSON.stringify(Array.from(deletedMap.entries())));

  console.log('local storage has ', localStorage.length, ' elements');

  // Making Deleted Hashmap that will be located at #3 in local storage
  const deletedMap = new Map();
  for (let i = 0; i < elementIdArr.length; i++) {
    deletedMap.set(elementIdArr[i], false);
  }
  console.log(deletedMap);
  localStorage.setItem(3, JSON.stringify(Array.from(deletedMap.entries())));
}
