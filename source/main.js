// main.js
import { searchForKey, getInstructionSteps } from './extra.js';
import { ComplexSearch } from '../source/apiComplexSearch.js';
import { GenericFetch } from '../source/genericFetch.js';

window.addEventListener('DOMContentLoaded', init);
// LOCAL STORAGE
const localStorage = window.localStorage;

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
      offset: 1, // The number of results to skip (between 0 and 900).
      number: 1, // The number of expected results (between 1 and 100).
      apiKey: 'a6e411c0c3e349d29672f54d7ba122e3'
    }
  };
  const search = new ComplexSearch(initialSearch);

  await ComplexSearch.fComplexSearch(search);

  // grabbing recipes with id's
  let idString = '';

  // making hash table that maps titles (key) to recipe id's (values)
  const hashmap = new Map();
  for (const elem of search.data.results) {
    hashmap.set(elem.title, elem.id);
    idString = idString + elem.id + ',';
  }
  // console.log(JSON.stringify(Array.from(hashmap.entries())));
  // console.log(search.data.results);

  const bulkOptions = {
    method: 'GET',
    url: 'https://api.spoonacular.com/recipes/informationBulk',
    params: {
      ids: idString,
      includeNutrition: false,
      apiKey: 'a6e411c0c3e349d29672f54d7ba122e3'
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
  }

  // now we have local storage with the hashtable (title->id) at key 0
  // and then the rest of local storage filled with id->json files

  // testing out searchTitle with a random title
  const jsonObj = searchTitle(thing.data[5].title);
  console.log('heres a json object for the title the user passed/searched:');
  console.log(jsonObj);

  // Testing searchForKey
  const obj = searchForKey(thing.data[0], 'title');
  //const obj2 = searchForKey(searchForKey(thing.data[1], 'analyzedInstructions'), 'steps');
  //const obj2a = getInstructionSteps(thing.data[1]);
  //const obj3 = getInstructionSteps(thing.data[2]);
  console.log(obj);
  //console.log(obj2);
  //console.log(obj2a);
  //console.log(obj3);
}

// take user's input for a title and returns the json object for the desired recipe
function searchTitle (title) {
  const hashmap = new Map(JSON.parse(localStorage.getItem(0))); // grabbing that hash table
  console.log(hashmap);
  // localStorage.getItem(key) where the key is the title/user input
  const id = hashmap.get(title);
  // and then query local storage using the id to get recipe
  const jsonRecipeObj = localStorage.getItem(id);
  return jsonRecipeObj;
}


/**
 * Recursively search for a key nested somewhere inside an object
 * @param {Object} object the object with which you'd like to search
 * @param {String} key the key that you are looking for in the object
 * @returns {*} the value of the found key
 */
/*
function searchForKey(object, key) {
  var value;
  Object.keys(object).some(function (k) {
    if (k === key) {
      value = object[k];
      return true;
    }
    if (object[k] && typeof object[k] === 'object') {
      value = searchForKey(object[k], key);
      return value !== undefined;
    }
  });
  return value;
}
*/
