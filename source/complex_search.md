
Put this at top of main.js:

`import { ComplexSearch } from './source/apiComplexSearch.js';`

Obviously, change the location of file what is appropriate.

First, you need to create the object complexSearch_c and pass in an options object holding all the parameters for the fetch call, for example:
`let complexObj = new ComplexSearch(options);`

To change all of these parameters after they are set. `complexObj.changeAll(new_options);`

To actually initiate a search, just call the function complexSearch_f from the class complexSearch_c and pass the object inside:
`await ComplexSearch.fComplexSearch(complexObj);` (the await seems to be necessary)
The data returned will be stored in the `data` field of the object, `complexObj.data` </br>

complexSearch_c.bread_t holds all the types of bread which we can prepend to the string of the query.
The bread field can be changed like this `complexObj.bread = ComplexSearch.tBread.BAGEL`
The enum-esque object `tBread` that is within complexSearch_c is a preferred way to set bread as all the values are appropriately spaced,
and there is autocomplete.

Schema of Data Returned:
```
number: {number} // same number value we sent in through options
offset: {number} // same offset value we sent in through options
results: {
   id: {number}
   image: {string} //image link
   imageType: {string} //jpg, png, etc
   title: {string}
}
totalResults: {number} // total number of recipes that can possibly be accessed through the query we sent (with different number, offset values of course)
```
Schema of options object to be passed in to complexSearch_c constructor (not all of the params have to be set, and they shouldn't be all set. Just use what you need. **Absolute minimum: query, number, offset, apiKey**)
```
let options = {
         method: 'GET',
         url: 'https://api.spoonacular.com/recipes/complexSearch',
         params: {
            query: {string}, // The (natural language) recipe search query.
            cuisine: {string}, // The cuisine(s) of the recipes. One or more, comma separated (will be interpreted as 'OR').
            excludeCuisine: {string}, // The cuisine(s) the recipes must not match. One or more, comma separated (will be interpreted as 'AND'). 
            diet: {string}, // The diet for which the recipes must be suitable.
            intolerances: {string}, // A comma-separated list of intolerances. All recipes returned must not contain ingredients that are not suitable for people with the intolerances entered.
            equipment: {string}, // The equipment required. Multiple values will be interpreted as 'or'. For example, value could be "blender, frying pan, bowl".
            includeIngredients: {string}, // A comma-separated list of ingredients that should/must be used in the recipes.
            excludeIngredients: {string}, // A comma-separated list of ingredients or ingredient types that the recipes must not contain.
            type: {string}, // The type of recipe.
            instructionsRequired: {boolean}, // Whether the recipes must have instructions.
            fillIngredients: {boolean}, // Add information about the ingredients and whether they are used or missing in relation to the query.
            addRecipeInformation: {boolean}, // If set to true, you get more information about the recipes returned.
            addRecipeNutrition: {boolean}, // If set to true, you get nutritional information about each recipes returned.
            author: {string}, // The username of the recipe author.
            tags: {number}, // User defined tags that have to match. The author param has to be set.
            recipeBoxId: {number}, // The id of the recipe box to which the search should be limited to.
            titleMatch: {string}, // Enter text that must be found in the title of the recipes.
            maxReadyTime: {number}, // The maximum time in minutes it should take to prepare and cook the recipe.
            ignorePantry: {boolean}, // Whether to ignore typical pantry items, such as water, salt, flour, etc.
            sort: {string}, // The strategy to sort recipes by. See a full list of supported sorting options - https://spoonacular.com/food-api/docs#Recipe-Sorting-Options
            sortDirection: {string}, // The direction in which to sort. Must be either 'asc' (ascending) or 'desc' (descending).
            minCarbs: {number}, // The minimum amount of carbohydrates in grams the recipe must have.
            maxCarbs: {number}, // The maximum amount of carbohydrates in grams the recipe can have.
            minProtein: {number}, // The minimum amount of protein in grams the recipe must have.
            maxProtein: {number}, // The maximum amount of protein in grams the recipe can have.
            minCalories: {number}, // The minimum amount of calories the recipe must have.
            maxCalories: {number}, // The maximum amount of calories the recipe can have.
            minFat: {number}, // The minimum amount of fat in grams the recipe must have.
            maxFat: {number}, // The maximum amount of fat in grams the recipe can have.
            minAlcohol: {number}, // The minimum amount of alcohol in grams the recipe must have.
            maxAlcohol: {number}, // The maximum amount of alcohol in grams the recipe can have.
            minCaffeine: {number}, // The minimum amount of caffeine in milligrams the recipe must have.
            maxCaffeine: {number}, // The maximum amount of caffeine in milligrams the recipe can have.
            minCopper: {number}, // The minimum amount of copper in milligrams the recipe must have.
            maxCopper: {number}, // The maximum amount of copper in milligrams the recipe can have.
            minCalcium: {number}, // The minimum amount of calcium in milligrams the recipe must have.
            maxCalcium: {number}, // The maximum amount of calcium in milligrams the recipe can have.
            minCholine: {number}, // The minimum amount of choline in milligrams the recipe must have.
            maxCholine: {number}, // The maximum amount of choline in milligrams the recipe can have.
            minCholesterol: {number}, // The minimum amount of cholesterol in milligrams the recipe must have.
            maxCholesterol: {number}, // The maximum amount of cholesterol in milligrams the recipe can have.
            minFluoride: {number}, // The minimum amount of fluoride in milligrams the recipe must have.
            maxFluoride: {number}, // The maximum amount of fluoride in milligrams the recipe can have.
            minSaturatedFat: {number}, // The minimum amount of saturated fat in grams the recipe must have.
            maxSaturatedFat: {number}, // The maximum amount of saturated fat in grams the recipe can have.
            minVitaminA: {number}, // The minimum amount of Vitamin A in IU the recipe must have.
            maxVitaminA: {number}, // The maximum amount of Vitamin A in IU the recipe can have.
            minVitaminC: {number}, // The minimum amount of Vitamin C milligrams the recipe must have.
            maxVitaminC: {number}, // The maximum amount of Vitamin C in milligrams the recipe can have.
            minVitaminD: {number}, // The minimum amount of Vitamin D in micrograms the recipe must have.
            maxVitaminD: {number}, // The maximum amount of Vitamin D in micrograms the recipe can have.
            minVitaminE: {number}, // The minimum amount of Vitamin E in milligrams the recipe must have.
            maxVitaminE: {number}, // The maximum amount of Vitamin E in milligrams the recipe can have.
            minVitaminK: {number}, // The minimum amount of Vitamin K in micrograms the recipe must have.
            maxVitaminK: {number}, // The maximum amount of Vitamin K in micrograms the recipe can have.
            minVitaminB1: {number}, // The minimum amount of Vitamin B1 in milligrams the recipe must have.
            maxVitaminB1: {number}, // The maximum amount of Vitamin B1 in milligrams the recipe can have.
            minVitaminB2: {number}, // The minimum amount of Vitamin B2 in milligrams the recipe must have.
            maxVitaminB2: {number}, // The maximum amount of Vitamin B2 in milligrams the recipe can have.
            minVitaminB5: {number}, // The minimum amount of Vitamin B5 in milligrams the recipe must have.
            maxVitaminB5: {number}, // The maximum amount of Vitamin B5 in milligrams the recipe can have.
            minVitaminB3: {number}, // The minimum amount of Vitamin B3 in milligrams the recipe must have.
            maxVitaminB3: {number}, // The maximum amount of Vitamin B3 in milligrams the recipe can have.
            minVitaminB6: {number}, // The minimum amount of Vitamin B6 in milligrams the recipe must have.
            maxVitaminB6: {number}, // The maximum amount of Vitamin B6 in milligrams the recipe can have.
            minVitaminB12: {number}, // The minimum amount of Vitamin B12 in micrograms the recipe must have.
            maxVitaminB12: {number}, // The maximum amount of Vitamin B12 in micrograms the recipe can have.
            minFiber: {number}, // The minimum amount of fiber in grams the recipe must have.
            maxFiber: {number}, // The maximum amount of fiber in grams the recipe can have.
            minFolate: {number}, // The minimum amount of folate in micrograms the recipe must have.
            maxFolate: {number}, // The maximum amount of folate in micrograms the recipe can have.
            minFolicAcid: {number}, // The minimum amount of folic acid in micrograms the recipe must have.
            maxFolicAcid: {number}, // The maximum amount of folic acid in micrograms the recipe can have.
            minIodine: {number}, // The minimum amount of iodine in micrograms the recipe must have.
            maxIodine: {number}, // The maximum amount of iodine in micrograms the recipe can have.
            minIron: {number}, // The minimum amount of iron in milligrams the recipe must have.
            maxIron: {number}, // The maximum amount of iron in milligrams the recipe can have.
            minMagnesium: {number}, // The minimum amount of magnesium in milligrams the recipe must have.
            maxMagnesium: {number}, // The maximum amount of magnesium in milligrams the recipe can have.
            minManganese: {number}, // The minimum amount of manganese in milligrams the recipe must have.
            maxManganese: {number}, // The maximum amount of manganese in milligrams the recipe can have.
            minPhosphorus: {number}, // The minimum amount of phosphorus in milligrams the recipe must have.
            maxPhosphorus: {number}, // The maximum amount of phosphorus in milligrams the recipe can have.
            minPotassium: {number}, // The minimum amount of potassium in milligrams the recipe must have.
            maxPotassium: {number}, // The maximum amount of potassium in milligrams the recipe can have.
            minSelenium: {number}, // The minimum amount of selenium in micrograms the recipe must have.
            maxSelenium: {number}, // The maximum amount of selenium in micrograms the recipe can have.
            minSodium: {number}, // The minimum amount of sodium in milligrams the recipe must have.
            maxSodium: {number}, // The maximum amount of sodium in milligrams the recipe can have.
            minSugar: {number}, // The minimum amount of sugar in grams the recipe must have.
            maxSugar: {number}, // The maximum amount of sugar in grams the recipe can have.
            minZinc: {number}, // The minimum amount of zinc in milligrams the recipe must have.
            maxZinc: {number}, // The maximum amount of zinc in milligrams the recipe can have.
            offset: {number}, // The number of results to skip (between 0 and 900).
            number: {number}, //The number of expected results (between 1 and 100).
            apiKey: 'a6e411c0c3e349d29672f54d7ba122e3'
   }
};
```