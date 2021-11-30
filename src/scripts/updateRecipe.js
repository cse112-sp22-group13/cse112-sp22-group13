
/**
 *
 * @param {*} numServings , number of servings to modify the recipe's ingredients
 */
export function updateRecipe (numServings) {
  const currServings = document.querySelector('.recipe-servings').textContent;
  if (isNaN(numServings)) {
    alert('Your Serving Amount is Not a Number, Try Again');
    return;
  }
  if (currServings === numServings) {
    return;
  }
  const difference = numServings / currServings;
  const ingredients = document.querySelectorAll('ul.recipe-expand-ingredients-list > li');
  const recipeId = document.querySelector('recipe-card-expand-container').id;
  const recipe = JSON.parse(localStorage[recipeId]);
  const recipeIngredients = recipe[extendedIngredients];
  for (let i = 0; i < ingredients.length; i++) {
    const numIngredient = ingredients[i].textContent.charAt(0);
    ingredients[i].textContent.replace('${numIngredient}', numIngredient * difference);
    recipeIngredients[i].amount = numIngredient * difference;
  }
  localStorage.setItem(recipeId, JSON.stringify(recipe));
}
