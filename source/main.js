// main.js
import { cComplexSearch } from './apiComplexSearch.js';

window.addEventListener('DOMContentLoaded', init);

// Initialize function, begins all of the JS code in this file
async function init() {
    //initializeServiceWorker();

    let inititalSearch = {
        method: 'GET',
        url: 'https://api.spoonacular.com/recipes/complexSearch',
        params: {
            query: ' ', // The (natural language) recipe search query.
            offset: 0, // The number of results to skip (between 0 and 900).
            number: 20, //The number of expected results (between 1 and 100).
            apiKey: 'a6e411c0c3e349d29672f54d7ba122e3'
        }
    };
    let search = new cComplexSearch(initialSearch);
    cComplexSearch.fComplexSearch(search);

    console.log(search.data);


    /* try {
      await fetchRecipes();
    } catch (err) {
      console.log(`Error fetching recipes: ${err}`);
      return;
    } */
}

/**
 * Loading JSON into a JS file is oddly not super straightforward (for now), so
 * I built a function to load in the JSON files for you. It places all of the recipe data
 * inside the object recipeData like so: recipeData{ 'ghostcookies': ..., 'birthdayCake': ..., etc }
 */
/* async function fetchRecipes() {
  return new Promise((resolve, reject) => {
    recipes.forEach(recipe => {
      fetch(recipe)
        .then(response => response.json())
        .then(data => {
          // This grabs the page name from the URL in the array above
          data['page-name'] = recipe.split('/').pop().split('.')[0];
          recipeData[recipe] = data;
          if (Object.keys(recipeData).length == recipes.length) {
            resolve();
          }
        })
        .catch(err => {
          console.log(`Error loading the ${recipe} recipe`);
          reject(err);
        });
    });
  });
} */
