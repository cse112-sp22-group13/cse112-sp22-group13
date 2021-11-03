// put "import { complexSearch_c, complexSearch_f } from './apiComplexSearch.js';" in main.js without quotes
/**
 * @param {string} query_p  NLP search query, words can be seperated by spaces
 * @param {number} number_p number of results to return
 * @param {number} offset_p offset is for skipping results, like moving to next page 
 *                          (if number_p is 5, and offset is 5 you go to page 2, offset 10 would be page 3)
 * @param {string} bread_p  type of bread you want the search to focus on, defaults to bread. 
 *                          if you don't use bread_t enum make sure there is a space after the word, like 'bread '
 */
export class complexSearch_c {
   key = 'a6e411c0c3e349d29672f54d7ba122e3';
   data = {};
   static bread_t = {
      BREAD: 'bread ',
      BAGEL: 'bagel ',
      MUFFIN: 'muffin ',
      CROISSANT: 'croissant ',
      BAGUETTE: 'baguette ',
      BRIOCHE: 'brioche ',
      CHALLAH: 'challah ',
      SOURDOUGH: 'sourdough ',
      NAAN: 'naan ',
      FOCACCIA: 'focaccia ',
      PITA: 'pita ',
      CAKE: 'cake ',
      PRETZEL: 'pretzel ',
      BISCOTTI: 'biscotti ',
      BISCUIT: 'biscuit ',
      PANCAKE: 'pancake ',
      SCONE: 'scone ',
   };
   bread = complexSearch_c.bread_t.BREAD;
   constructor(query_p, number_p, offset_p, bread_p) {
      this.bread = bread_p;
      this.options = {
         method: 'GET',
         url: 'https://api.spoonacular.com/recipes/complexSearch',
         params: {
            query: this.#helpCalc(query_p), //string - The (natural language) recipe search query.
            //cuisine: cuisine_p, //string - The cuisine(s) of the recipes. One or more, comma separated (will be interpreted as 'OR').
            //excludeCuisine: excludeCuisine_p, //string - The cuisine(s) the recipes must not match. One or more, comma separated (will be interpreted as 'AND'). 
            //diet: diet_p, //string - The diet for which the recipes must be suitable.
            //intolerances: intolerances_p, //string - A comma-separated list of intolerances. All recipes returned must not contain ingredients that are not suitable for people with the intolerances entered.
            //equipment: equipment_p, //string - The equipment required. Multiple values will be interpreted as 'or'. For example, value could be "blender, frying pan, bowl".
            //includeIngredients: includeIngredients_p, //string - A comma-separated list of ingredients that should/must be used in the recipes.
            //excludeIngredients: excludeIngredients_p, //string - A comma-separated list of ingredients or ingredient types that the recipes must not contain.
            //type: type_p, //string - The type of recipe.
            //instructionsRequired: instructionsRequired_p, //boolean - Whether the recipes must have instructions.
            //fillIngredients: fillIngredients_p, //boolean - Add information about the ingredients and whether they are used or missing in relation to the query.
            //addRecipeInformation: addRecipeInformation_p, //boolean - If set to true, you get more information about the recipes returned.
            //addRecipeNutrition: addRecipeNutrition_p, //boolean - If set to true, you get nutritional information about each recipes returned.
            //author: author_p, //string - The username of the recipe author.
            //tags: tags_p, //string - User defined tags that have to match. The author param has to be set.
            //recipeBoxId: recipeBoxId_p, //number - The id of the recipe box to which the search should be limited to.
            //titleMatch: titleMatch_p, //string - Enter text that must be found in the title of the recipes.
            //maxReadyTime: maxReadyTime_p, //number - The maximum time in minutes it should take to prepare and cook the recipe.
            //ignorePantry: ignorePantry_p, //boolean - Whether to ignore typical pantry items, such as water, salt, flour, etc.
            //sort: sort_p, //string - The strategy to sort recipes by. See a full list of supported sorting options - https://spoonacular.com/food-api/docs#Recipe-Sorting-Options
            //sortDirection: sortDirection_p, //string - The direction in which to sort. Must be either 'asc' (ascending) or 'desc' (descending).
            //minCarbs: minCarbs_p, //number - The minimum amount of carbohydrates in grams the recipe must have.
            //maxCarbs: maxCarbs_p, //number - The maximum amount of carbohydrates in grams the recipe can have.
            //minProtein: minProtein_p, //number - The minimum amount of protein in grams the recipe must have.
            //maxProtein: maxProtein_p, //number - The maximum amount of protein in grams the recipe can have.
            //minCalories: minCalories_p, //number - The minimum amount of calories the recipe must have.
            //maxCalories: maxCalories_p, //number - The maximum amount of calories the recipe can have.
            //minFat: minFat_p, //number - The minimum amount of fat in grams the recipe must have.
            //maxFat: maxFat_p, //number - The maximum amount of fat in grams the recipe can have.
            //minAlcohol: minAlcohol_p, //number - The minimum amount of alcohol in grams the recipe must have.
            //maxAlcohol: maxAlcohol_p, //number - The maximum amount of alcohol in grams the recipe can have.
            //minCaffeine: minCaffeine_p, //number - The minimum amount of caffeine in milligrams the recipe must have.
            //maxCaffeine: maxCaffeine_p, //number - The maximum amount of caffeine in milligrams the recipe can have.
            //minCopper: minCopper_p, //number	- The minimum amount of copper in milligrams the recipe must have.
            //maxCopper: maxCopper_p, //number	- The maximum amount of copper in milligrams the recipe can have.
            //minCalcium: minCalcium_p, //number - The minimum amount of calcium in milligrams the recipe must have.
            //maxCalcium: maxCalcium_p, //number - The maximum amount of calcium in milligrams the recipe can have.
            //minCholine: minCholine_p, //number - The minimum amount of choline in milligrams the recipe must have.
            //maxCholine: maxCholine_p, //number - The maximum amount of choline in milligrams the recipe can have.
            //minCholesterol: minCholesterol_p, //number - The minimum amount of cholesterol in milligrams the recipe must have.
            //maxCholesterol: maxCholesterol_p, //number - The maximum amount of cholesterol in milligrams the recipe can have.
            //minFluoride: minFluoride_p, //number - The minimum amount of fluoride in milligrams the recipe must have.
            //maxFluoride: maxFluoride_p, //number - The maximum amount of fluoride in milligrams the recipe can have.
            //minSaturatedFat: minSaturatedFat_p, //number - The minimum amount of saturated fat in grams the recipe must have.
            //maxSaturatedFat: maxSaturatedFat_p, //number	- The maximum amount of saturated fat in grams the recipe can have.
            //minVitaminA: minVitaminA_p, //number - The minimum amount of Vitamin A in IU the recipe must have.
            //maxVitaminA: maxVitaminA_p, //number - The maximum amount of Vitamin A in IU the recipe can have.
            //minVitaminC: minVitaminC_p, //number - The minimum amount of Vitamin C milligrams the recipe must have.
            //maxVitaminC: maxVitaminC_p, //number - The maximum amount of Vitamin C in milligrams the recipe can have.
            //minVitaminD: minVitaminD_p, //number - The minimum amount of Vitamin D in micrograms the recipe must have.
            //maxVitaminD: maxVitaminD_p, //number - The maximum amount of Vitamin D in micrograms the recipe can have.
            //minVitaminE: minVitaminE_p, //number - The minimum amount of Vitamin E in milligrams the recipe must have.
            //maxVitaminE: maxVitaminE_p, //number - The maximum amount of Vitamin E in milligrams the recipe can have.
            //minVitaminK: minVitaminK_p, //number - The minimum amount of Vitamin K in micrograms the recipe must have.
            //maxVitaminK: maxVitaminK_p, //number - The maximum amount of Vitamin K in micrograms the recipe can have.
            //minVitaminB1: minVitaminB1_p, //number - The minimum amount of Vitamin B1 in milligrams the recipe must have.
            //maxVitaminB1: maxVitaminB1_p, //number - The maximum amount of Vitamin B1 in milligrams the recipe can have.
            //minVitaminB2: minVitaminB2_p, //number - The minimum amount of Vitamin B2 in milligrams the recipe must have.
            //maxVitaminB2: maxVitaminB2_p, //number - The maximum amount of Vitamin B2 in milligrams the recipe can have.
            //minVitaminB5: minVitaminB5_p, //number - The minimum amount of Vitamin B5 in milligrams the recipe must have.
            //maxVitaminB5: maxVitaminB5_p, //number - The maximum amount of Vitamin B5 in milligrams the recipe can have.
            //minVitaminB3: minVitaminB3_p, //number - The minimum amount of Vitamin B3 in milligrams the recipe must have.
            //maxVitaminB3: maxVitaminB3_p, //number - The maximum amount of Vitamin B3 in milligrams the recipe can have.
            //minVitaminB6: minVitaminB6_p, //number - The minimum amount of Vitamin B6 in milligrams the recipe must have.
            //maxVitaminB6: maxVitaminB6_p, //number - The maximum amount of Vitamin B6 in milligrams the recipe can have.
            //minVitaminB12: minVitaminB12_p, //number	- The minimum amount of Vitamin B12 in micrograms the recipe must have.
            //maxVitaminB12: maxVitaminB12_p, //number	- The maximum amount of Vitamin B12 in micrograms the recipe can have.
            //minFiber: minFiber_p, //number - The minimum amount of fiber in grams the recipe must have.
            //maxFiber: maxFiber_p, //number - The maximum amount of fiber in grams the recipe can have.
            //minFolate: minFolate_p, //number - The minimum amount of folate in micrograms the recipe must have.
            //maxFolate: maxFolate_p, //number - The maximum amount of folate in micrograms the recipe can have.
            //minFolicAcid: minFolicAcid_p, //number - The minimum amount of folic acid in micrograms the recipe must have.
            //maxFolicAcid: maxFolicAcid_p, //number - The maximum amount of folic acid in micrograms the recipe can have.
            //minIodine: minIodine_p, //number -	The minimum amount of iodine in micrograms the recipe must have.
            //maxIodine: maxIodine_p, //number -	The maximum amount of iodine in micrograms the recipe can have.
            //minIron: minIron_p, //number - The minimum amount of iron in milligrams the recipe must have.
            //maxIron: maxIron_p, //number - The maximum amount of iron in milligrams the recipe can have.
            //minMagnesium: minMagnesium_p, //number - The minimum amount of magnesium in milligrams the recipe must have.
            //maxMagnesium: maxMagnesium_p, //number - The maximum amount of magnesium in milligrams the recipe can have.
            //minManganese: minManganese_p, //number - The minimum amount of manganese in milligrams the recipe must have.
            //maxManganese: maxManganese_p, //number - The maximum amount of manganese in milligrams the recipe can have.
            //minPhosphorus: minPhosphorus_p, //number - The minimum amount of phosphorus in milligrams the recipe must have.
            //maxPhosphorus: maxPhosphorus_p, //number - The maximum amount of phosphorus in milligrams the recipe can have.
            //minPotassium: minPotassium_p, //number - The minimum amount of potassium in milligrams the recipe must have.
            //maxPotassium: maxPotassium_p, //number - The maximum amount of potassium in milligrams the recipe can have.
            //minSelenium: minSelenium_p, //number - The minimum amount of selenium in micrograms the recipe must have.
            //maxSelenium: maxSelenium_p, //number - The maximum amount of selenium in micrograms the recipe can have.
            //minSodium: minSodium_p, //number - The minimum amount of sodium in milligrams the recipe must have.
            //maxSodium: maxSodium_p, //number - The maximum amount of sodium in milligrams the recipe can have.
            //minSugar: minSugar_p, //number - The minimum amount of sugar in grams the recipe must have.
            //maxSugar: maxSugar_p, //number - The maximum amount of sugar in grams the recipe can have.
            //minZinc: minZinc_p, //number - The minimum amount of zinc in milligrams the recipe must have.
            //maxZinc: maxZinc_p, //number - The maximum amount of zinc in milligrams the recipe can have.
            offset: offset_p, //number - The number of results to skip (between 0 and 900).
            number: number_p, //The number of expected results (between 1 and 100).
            apiKey: this.key
         }
      };
   }
   changeAll(query, number, offset, bread_p) {
      this.bread = bread_p; //must be first
      this.options.params.query = this.#helpCalc(query);
      this.options.params.number = number;
      this.options.params.offset = offset;
   };
   set query(input) {
      this.options.params.query = this.#helpCalc(input);
   };
   set number(input) {
      this.options.params.number = input;
   };

   set offset(input) {
      this.options.params.offset = input;
   };
   // Use when assigning this.options.params.query
   #helpCalc(input) {
      return (input.toLowerCase().indexOf(this.bread.substr(0, this.bread.length - 1)) >= 0) ?
         input : this.bread + input;
   };
   
}
/**
 * Loads recipes in data field of complexSearch_c object
 * @param {*} object complexSearch_c object
 */
export async function complexSearch_f(object) {
   await axios.request(object.options).then(function (response) {
      object.data = response.data;
   }).catch(function (error) {
      console.log(error);
   });
}