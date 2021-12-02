// import { searchForKey } from './searchKey.js';

// SEARCH BAR BUTTON
// const searchBar = document.querySelector('button');
// const inputTxt = document.querySelector('.search-bar');
// searchBar.addEventListener('click', searchRecipes);

window.addEventListener('DOMContentLoaded', init);
const localStorage = window.localStorage;

async function init () {
  console.log('here in favs page now');
  createFavCards();
}

/**
 * **************************CREATEFAVCARDS FUNCTION************************** *
 * This function is called for you up above.                                      *
 * From within this function you can access the recipe data from the JSON         *
 * files with the recipeData Object above. Make sure you only display the         *
 * three recipes we give you, you'll use the bindShowMore() function to           *
 * show any others you've added when the user clicks on the "Show more" button.   *
 * ****************************************************************************** *
 */
function createFavCards () {
  const main = document.querySelector('main');
  // get hash table
  const hashes = JSON.parse(localStorage['0']);
  // get favmap
  const favmap = new Map(JSON.parse(localStorage['2']));
  // get array of ids
  const elementIdArr = hashes.map(h => h[1]);

  elementIdArr.forEach(id => {
    ///
    if (favmap.get(id) === true) {
      const element = document.createElement('recipe-card');
      element.data = localStorage[`${id}`];
      element.id = id;
      // hides the recipe forever if it is considered deleted in localStorage (uncomment when ready to use)
      const deletedMap = new Map(JSON.parse(localStorage['3']));
      if (deletedMap.get(id) === true) {
        element.classList.add('deleted');
      }
      main.appendChild(element);
      element.addEventListener('click', (e) => {
        window.location.href = '../recipe_expand/recipe_expand.html' + '#' + element.id;
      });
    }
  });
}
