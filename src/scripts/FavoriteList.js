// import { searchForKey } from './searchKey.js';

window.addEventListener('DOMContentLoaded', init);
const localStorage = window.localStorage;

/**
 * Init function that automacially creates cards list when favorites page is clicked on.
 */

async function init () {
  console.log('here in favs page now');
  createFavCards();
}

/**
 * CREATEFAVCARDS function is called for you up above.
 * From within this function you can access the recipe data from the JSON
 * files with the recipeData Object above. Make sure you only display the
 * three recipes we give you, you'll use the bindShowMore() function to
 * show any others you've added when the user clicks on the "Show more" button.
 */
function createFavCards () {
  const main = document.querySelector('main');
  // get hash table
  const hashes = JSON.parse(localStorage['0']);
  // get favmap
  const favmap = new Map(JSON.parse(localStorage['2']));

  hashes.forEach(h => {
    if (favmap.get(h[1]) === true) {
      const element = document.createElement('recipe-card');
      element.data = localStorage[`${h[1]}`];
      element.id = h[1];
      // hides the recipe forever if it is considered deleted in localStorage (uncomment when ready to use)
      const deletedMap = new Map(JSON.parse(localStorage['3']));
      if (deletedMap.get(h[1]) === true) {
        element.classList.add('deleted');
      }
      element.addEventListener('click', () => {
        window.location.href = '../recipe_expand/recipe_expand.html' + '#' + h[1];
      });
      main.appendChild(element);
    }
  });
}
