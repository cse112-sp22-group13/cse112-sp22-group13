## Guides
[Authentication](https://spoonacular.com/food-api/docs#Authentication) |
[Quotas](https://spoonacular.com/food-api/docs#Quotas) |
[Show Images](https://spoonacular.com/food-api/docs#Show-Images) |
[List of Ingredients](https://spoonacular.com/food-api/docs#List-of-Ingredients) |
[Nutrition](https://spoonacular.com/food-api/docs#Nutrition) |
[Diets](https://spoonacular.com/food-api/docs#Diets) |
[Intolerances](https://spoonacular.com/food-api/docs#Intolerances) |
[Cuisines](https://spoonacular.com/food-api/docs#Cuisines)  </br>
[Meal Types](https://spoonacular.com/food-api/docs#Meal-Types) |
[Recipe Sorting Options](https://spoonacular.com/food-api/docs#Recipe-Sorting-Options) |
[Write a Chatbot](https://spoonacular.com/food-api/docs#Write-a-Chatbot) |
[Image Classification Categories](https://spoonacular.com/food-api/docs#Image-Classification-Categories) |
[Image Classification](https://spoonacular.com/food-api/docs#Image-Classification)

TOC coming!

Put `<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>` to make axios calls work. [There are other options.](https://axios-http.com/docs/intro)

*Low Priority **Super Low Priority

## Recipes
| Done? | Spoonacular REST | Short Description |REST API Wrapper (our code)|How To |
|-------|------------------|--------------|------------|-----------------------------------|
| &#9745; | [Search Recipes (Complex)](https://spoonacular.com/food-api/docs#Search-Recipes-Complex) | Search through hundreds of thousands of recipes using advanced filtering and ranking. NOTE: This combines searching by query, by ingredients, and by nutrients.  |[apiComplexSearch.js](./source/apiComplexSearch.js) | [Complex Search](./source/complex_search.md)|
|&#9744;| [Search Recipes by Nutrients*](https://spoonacular.com/food-api/docs#Search-Recipes-by-Nutrients) |Find a set of recipes that adhere to the given nutritional limits. You may set limits for macronutrients (calories, protein, fat, and carbohydrate) and/or many micronutrients. | | |
|&#9744;| [Search Recipes by Ingredients*](https://spoonacular.com/food-api/docs#Search-Recipes-by-Ingredients) |Find recipes that use as many of the given ingredients as possible and require as few additional ingredients as possible. This is a "what's in your fridge" API endpoint. | | |
|&#9744;| [Get Recipe Information](https://spoonacular.com/food-api/docs#Get-Recipe-Information) |Use a recipe id to get full information about a recipe, such as ingredients, nutrition, diet and allergen information, etc. | | |
|&#9744;| [Get Recipe Information Bulk](https://spoonacular.com/food-api/docs#Get-Recipe-Information-Bulk) |Get information about multiple recipes at once. This is equivalent to calling the Get Recipe Information endpoint multiple times, but faster. | | |
|&#9744;| [Get Similar Recipes](https://spoonacular.com/food-api/docs#Get-Similar-Recipes) | Find recipes which are similar to the given one.| | |
|&#9744;| [Get Random Recipes](https://spoonacular.com/food-api/docs#Get-Random-Recipes) |Find random (popular) recipes. If you need to filter recipes by diet, nutrition etc. you might want to consider using the complex recipe search endpoint and set the `sort` request parameter to `random`. | | |
|&#9744;| [Autocomplete Recipe Search*](https://spoonacular.com/food-api/docs#Autocomplete-Recipe-Search) |Autocomplete a partial input to suggest possible recipe names. | | |
|&#9744;| [Taste by ID](https://spoonacular.com/food-api/docs#Taste-by-ID) | Get a recipe's taste. The tastes supported are sweet, salty, sour, bitter, savory, and fatty. These tastes are between 0 and 100 while the spiciness value is in scoville on an open scale of 0 and above. | | |
|&#9744;| [Equipment by ID](https://spoonacular.com/food-api/docs#Equipment-by-ID) |Get a recipe's equipment list. | | |
|&#9744;| [Price Breakdown by ID](https://spoonacular.com/food-api/docs#Price-Breakdown-by-ID) | Get a recipe's price breakdown data. | | |
|&#9744;| [Ingredients by ID](https://spoonacular.com/food-api/docs#Ingredients-by-ID) | Get a recipe's ingredient list. | | |
|&#9744;| [Nutrition by ID](https://spoonacular.com/food-api/docs#Nutrition-by-ID) | Get a recipe's nutrition widget data. | | |
|&#9744;| [Get Analyzed Recipe Instructions](https://spoonacular.com/food-api/docs#Get-Analyzed-Recipe-Instructions) | Get an analyzed breakdown of a recipe's instructions. Each step is enriched with the ingredients and equipment required. | | |
|&#9744;| [Summarize Recipe](https://spoonacular.com/food-api/docs#Summarize-Recipe) | Automatically generate a short description that summarizes key information about the recipe. | | |
|&#9744;| [Analyze Recipe Instructions*](https://spoonacular.com/food-api/docs#Analyze-Recipe-Instructions)| This endpoint allows you to break down instructions into atomic steps. | | |
|&#9744;| [Classify Cuisine*](https://spoonacular.com/food-api/docs#Classify-Cuisine)| Classify the recipe's cuisine. | | |
|&#9744;| [Analyze a Recipe Search Query*](https://spoonacular.com/food-api/docs#Analyze-a-Recipe-Search-Query)| Parse a recipe search query to find out its intention. | | |
|&#9744;| [Guess Nutrition by Dish Name*](https://spoonacular.com/food-api/docs#Guess-Nutrition-by-Dish-Name) | Estimate the macronutrients of a dish based on its title. | | |
## Ingredients*
| Done? | Spoonacular REST | Short Description |REST API Wrapper (our code)|How To |
|-------|------------------|-----------------------------------|-------------------|---------------|
|&#9744;| [Ingredient Search](https://spoonacular.com/food-api/docs#Ingredient-Search) | Search for simple whole foods (e.g. fruits, vegetables, nuts, grains, meat, fish, dairy etc.). | | |
|&#9744;| [Get Ingredient Information](https://spoonacular.com/food-api/docs#Get-Ingredient-Information) | Use an ingredient id to get all available information about an ingredient, such as its image and supermarket aisle. | | |
|&#9744;| [Compute Ingredient Amount](https://spoonacular.com/food-api/docs#Compute-Ingredient-Amount) |Compute the amount you need of a certain ingredient for a certain nutritional goal. For example, how much pineapple do you have to eat to get 10 grams of protein? | | |
|&#9744;| [Convert Amounts](https://spoonacular.com/food-api/docs#Convert-Amounts) | Convert amounts like "2 cups of flour to grams". | | |
|&#9744;| [Parse Ingredients](https://spoonacular.com/food-api/docs#Parse-Ingredients)| Extract an ingredient from plain text. | | |
|&#9744;| [Compute Glycemic Load](https://spoonacular.com/food-api/docs#Compute-Glycemic-Load)| Retrieve the glycemic index for a list of ingredients and compute the individual and total glycemic load. | | |
|&#9744;| [Autocomplete Ingredient Search](https://spoonacular.com/food-api/docs#Autocomplete-Ingredient-Search) | Autocomplete the entry of an ingredient. | | |
|&#9744;| [Get Ingredient Substitutes](https://spoonacular.com/food-api/docs#Get-Ingredient-Substitutes) | Search for substitutes for a given ingredient. | | |
|&#9744;| [Get Ingredient Substitutes by ID](https://spoonacular.com/food-api/docs#Get-Ingredient-Substitutes-by-ID) | Search for substitutes for a given ingredient. | | |
## [Products**](https://spoonacular.com/food-api/docs#Grocery-Products-Overview)
| Done? | Spoonacular REST | Short Description |REST API Wrapper (our code)|How To |
|-------|------------------|-----------------------------------|-------------------|---------------|
|&#9744;| [Search Grocery Products](https://spoonacular.com/food-api/docs#Search-Grocery-Products) |Search packaged food products, such as frozen pizza or Greek yogurt. | | |
|&#9744;| [Search Grocery Products by UPC](https://spoonacular.com/food-api/docs#Search-Grocery-Products-by-UPC) | Get information about a packaged food using its UPC. | | |
|&#9744;| [Get Product Information](https://spoonacular.com/food-api/docs#Get-Product-Information) | Use a product id to get full information about a product, such as ingredients, nutrition, etc. The nutritional information is per serving. | | |
|&#9744;| [Get Comparable Products](https://spoonacular.com/food-api/docs#Get-Comparable-Products) | Find comparable products to the given one. | | |
|&#9744;| [Autocomplete Product Search](https://spoonacular.com/food-api/docs#Autocomplete-Product-Search) | Generate suggestions for grocery products based on a (partial) query. The matches will be found by looking in the title only. | | |
|&#9744;| [Classify Grocery Product](https://spoonacular.com/food-api/docs#Classify-Grocery-Product) | This endpoint allows you to match a packaged food to a basic category, e.g. a specific brand of milk to the category milk. | | |
|&#9744;| [Classify Grocery Product Bulk](https://spoonacular.com/food-api/docs#Classify-Grocery-Product-Bulk) | Provide a set of product jsons, get back classified products. | | |
|&#9744;| [Map Ingredients to Grocery Products](https://spoonacular.com/food-api/docs#Map-Ingredients-to-Grocery-Products) | Map a set of ingredients to products you can buy in the grocery store. | | |
## Menu Items**
| Done? | Spoonacular REST | Short Description |REST API Wrapper (our code)|How To |
|-------|------------------|-----------------------------------|-------------------|---------------|
|&#9744;| [Search Menu Items](https://spoonacular.com/food-api/docs#Search-Menu-Items) | Search over 115,000 menu items from over 800 fast food and chain restaurants. For example, McDonald's Big Mac or Starbucks Mocha. | | |
|&#9744;| [Get Menu Item Information](https://spoonacular.com/food-api/docs#Get-Menu-Item-Information) | Use a menu item id to get all available information about a menu item, such as nutrition. | | |
|&#9744;| [Autocomplete Menu Item Search](https://spoonacular.com/food-api/docs#Autocomplete-Menu-Item-Search) | Generate suggestions for menu items based on a (partial) query. The matches will be found by looking in the title only. | | |
## [Meal Planning*](https://spoonacular.com/food-api/docs#Working-with-the-Meal-Planner)
| Done? | Spoonacular REST | Short Description |REST API Wrapper (our code)|How To |
|-------|------------------|-----------------------------------|-------------------|---------------|
|&#9744;| [Get Meal Plan Week](https://spoonacular.com/food-api/docs#Get-Meal-Plan-Week) |Retrieve a meal planned week for the given user. The `username` must be a spoonacular user and the `hash` must the the user's hash that can be found in his/her account. | | |
|&#9744;| [Get Meal Plan Day](https://spoonacular.com/food-api/docs#Get-Meal-Plan-Day) | Retrieve a meal planned day for the given user. The `username` must be a spoonacular user and the `hash` must the the user's hash that can be found in his/her account. | | |
|&#9744;| [Generate Meal Plan](https://spoonacular.com/food-api/docs#Generate-Meal-Plan) | Generate a meal plan with three meals per day (breakfast, lunch, and dinner). | | |
|&#9744;| [Add to Meal Plan](https://spoonacular.com/food-api/docs#Add-to-Meal-Plan) | Add an item to the user's meal plan. | | |
|&#9744;| [Clear Meal Plan Day](https://spoonacular.com/food-api/docs#Clear-Meal-Plan-Day) | Delete all planned items from the user's meal plan for a specific day. | | |
|&#9744;| [Delete from Meal Plan](https://spoonacular.com/food-api/docs#Delete-from-Meal-Plan) | Delete an item from the user's meal plan. | | |
|&#9744;| [Get Meal Plan Templates](https://spoonacular.com/food-api/docs#Get-Meal-Plan-Templates) | Get meal plan templates from user or public ones. | | |
|&#9744;| [Get Meal Plan Template](https://spoonacular.com/food-api/docs#Get-Meal-Plan-Template) | Get information about a meal plan template. | | |
|&#9744;| [Add Meal Plan Template](https://spoonacular.com/food-api/docs#Add-Meal-Plan-Template) | Add a meal plan template for a user. | | |
|&#9744;| [Delete Meal Plan Template](https://spoonacular.com/food-api/docs#Delete-Meal-Plan-Template) | Delete a meal plan template for a user. | | |
|&#9744;| [Get Shopping List](https://spoonacular.com/food-api/docs#Get-Shopping-List) | Get the current shopping list for the given user. | | |
|&#9744;| [Add to Shopping List](https://spoonacular.com/food-api/docs#Add-to-Shopping-List) | Add an item to the current shopping list of a user. | | |
|&#9744;| [Delete from Shopping List](https://spoonacular.com/food-api/docs#Delete-from-Shopping-List) | Delete an item from the current shopping list of the user. | | |
|&#9744;| [Generate Shopping List](https://spoonacular.com/food-api/docs#Generate-Shopping-List) | Generate the shopping list for a user from the meal planner in a given time frame. | | |
|&#9744;| [Compute Shopping List](https://spoonacular.com/food-api/docs#Compute-Shopping-List) |Compute a shopping list from a set of simple foods. This endpoint does not require usernames. | | |
|&#9744;| [Search Custom Foods](https://spoonacular.com/food-api/docs#Search-Custom-Foods) | Search custom foods in a user's account. | | |
|&#9744;| [Connect User](https://spoonacular.com/food-api/docs#Connect-User) |In order to call user-specific endpoints, you need to connect your app's users to spoonacular users. | | |
## [Wine**](https://spoonacular.com/food-api/docs#Wine-Guide)
| Done? | Spoonacular REST | Short Description |REST API Wrapper (our code)|How To |
|-------|------------------|-----------------------------------|-------------------|---------------|
|&#9744;| [Dish Pairing for Wine](https://spoonacular.com/food-api/docs#Dish-Pairing-for-Wine) |Find a dish that goes well with a given wine. | | |
|&#9744;| [Wine Pairing](https://spoonacular.com/food-api/docs#Wine-Pairing) |Find a wine that goes well with a food. Food can be a dish name ("steak"), an ingredient name ("salmon"), or a cuisine ("italian"). | | |
|&#9744;| [Wine Description](https://spoonacular.com/food-api/docs#Wine-Description) | Get a simple description of a certain wine, e.g. "malbec", "riesling", or "merlot". | | |
|&#9744;| [Wine Recommendation](https://spoonacular.com/food-api/docs#Wine-Recommendation) | Get a specific wine recommendation (concrete product) for a given wine type, e.g. "merlot". | | |
## Misc**
| Done? | Spoonacular REST | Short Description |REST API Wrapper (our code)|How To |
|-------|------------------|-----------------------------------|-------------------|---------------|
|&#9744;| [Search All Food](https://spoonacular.com/food-api/docs#Search-All-Food) | Search all food content with one call. That includes recipes, grocery products, menu items, simple foods (ingredients), and food videos.| | |
|&#9744;| [Image Classification (File)](https://spoonacular.com/food-api/docs#Image-Classification-File) |Classify a food image.| | |
|&#9744;| [Image Classification (URL)](https://spoonacular.com/food-api/docs#Image-Classification-URL) |Classify a food image.| | |
|&#9744;| [Image Analysis (File)](https://spoonacular.com/food-api/docs#Image-Analysis-File) | Analyze a food image. The API tries to classify the image, guess the nutrition, and find a matching recipes. | | |
|&#9744;| [Image Analysis (URL)](https://spoonacular.com/food-api/docs#Image-Analysis-URL) |Analyze a food image. The API tries to classify the image, guess the nutrition, and find a matching recipes. | | |
|&#9744;| [Search Food Videos](https://spoonacular.com/food-api/docs#Search-Food-Videos) |Find recipe and other food related videos. | | |
|&#9744;| [Quick Answer](https://spoonacular.com/food-api/docs#Quick-Answer) |Answer a nutrition related natural language question. | | |
|&#9744;| [Detect Food in Text](https://spoonacular.com/food-api/docs#Detect-Food-in-Text) | Take any text and find all mentions of food contained within it.| | |
|&#9744;| [Search Site Content](https://spoonacular.com/food-api/docs#Search-Site-Content) |Search spoonacular's site content. You'll be able to find everything that you could also find using the search suggestions on spoonacular.com.  | | |
|&#9744;| [Random Food Joke](https://spoonacular.com/food-api/docs#Random-Food-Joke) |Get a random joke that is related to food. Caution: this is an endpoint for adults! | | |
|&#9744;| [Random Food Trivia](https://spoonacular.com/food-api/docs#Random-Food-Trivia) |Returns random food trivia. | | |
|&#9744;| [Talk to Chatbot](https://spoonacular.com/food-api/docs#Talk-to-Chatbot) |This endpoint can be used to have a conversation about food with the spoonacular chatbot. | | |
|&#9744;| [Conversation Suggests](https://spoonacular.com/food-api/docs#Conversation-Suggests) |This endpoint returns suggestions for things the user can say or ask the chatbot. | | |
## Widgets*
| Done? | Spoonacular REST | Short Description |REST API Wrapper (our code)|How To |
|-------|------------------|-----------------------------------|-------------------|---------------|
|&#9744;| [Recipe Nutrition Label Widget](https://spoonacular.com/food-api/docs#Recipe-Nutrition-Label-Widget) |Get a recipe's nutrition label as an HTML widget. | | |
|&#9744;| [Recipe Nutrition Label Image](https://spoonacular.com/food-api/docs#Recipe-Nutrition-Label-Image) | Get a recipe's nutrition label as an image.| | |
|&#9744;| [Recipe Nutrition Widget](https://spoonacular.com/food-api/docs#Recipe-Nutrition-Widget)  |Visualize a recipe's nutritional information as HTML including CSS. | | |
|&#9744;| [Recipe Nutrition by ID Widget](https://spoonacular.com/food-api/docs#Recipe-Nutrition-by-ID-Widget) |Visualize a recipe's nutritional information as HTML including CSS. | | |
|&#9744;| [Recipe Nutrition by ID Image](https://spoonacular.com/food-api/docs#Recipe-Nutrition-by-ID-Image) |Visualize a recipe's nutritional information as an image. | | |
|&#9744;| [Recipe Taste Widget](https://spoonacular.com/food-api/docs#Recipe-Taste-Widget)  |Visualize a recipe's taste information as HTML including CSS.  | | |
|&#9744;| [Recipe Taste by ID Widget](https://spoonacular.com/food-api/docs#Recipe-Taste-by-ID-Widget) |Get a recipe's taste. The tastes supported are sweet, salty, sour, bitter, savory, and fatty. | | |
|&#9744;| [Recipe Taste by ID Image](https://spoonacular.com/food-api/docs#Recipe-Taste-by-ID-Image) |Get a recipe's taste as an image. The tastes supported are sweet, salty, sour, bitter, savory, and fatty. | | |
|&#9744;| [Equipment Widget](https://spoonacular.com/food-api/docs#Equipment-Widget)  |Visualize the equipment used to make a recipe. | | |
|&#9744;| [Equipment by ID Widget](https://spoonacular.com/food-api/docs#Equipment-by-ID-Widget) |Visualize a recipe's equipment list. | | |
|&#9744;| [Equipment by ID Image](https://spoonacular.com/food-api/docs#Equipment-by-ID-Image) |Visualize a recipe's equipment list as an image. | | |
|&#9744;| [Ingredients Widget](https://spoonacular.com/food-api/docs#Ingredients-Widget)  |Visualize ingredients of a recipe. | | |
|&#9744;| [Ingredients by ID Widget](https://spoonacular.com/food-api/docs#Ingredients-by-ID-Widget) |Visualize a recipe's ingredient list. | | |
|&#9744;| [Ingredients by ID Image](https://spoonacular.com/food-api/docs#Ingredients-by-ID-Image) | Visualize a recipe's ingredient list. | | |
|&#9744;| [Price Breakdown Widget](https://spoonacular.com/food-api/docs#Price-Breakdown-Widget)  |Visualize the price breakdown of a recipe.  | | |
|&#9744;| [Price Breakdown by ID Widget](https://spoonacular.com/food-api/docs#Price-Breakdown-by-ID-Widget) |Visualize a recipe's price breakdown. | | |
|&#9744;| [Price Breakdown by ID Image](https://spoonacular.com/food-api/docs#Price-Breakdown-by-ID-Image) |Visualize a recipe's price breakdown. | | |
|&#9744;| [Product Nutrition Label Widget](https://spoonacular.com/food-api/docs#Product-Nutrition-Label-Widget) |Get a product's nutrition label as an HTML widget. | | |
|&#9744;| [Product Nutrition Label Image](https://spoonacular.com/food-api/docs#Product-Nutrition-Label-Image) | Get a product's nutrition label as an image. | | |
|&#9744;| [Product Nutrition by ID Widget](https://spoonacular.com/food-api/docs#Product-Nutrition-by-ID-Widget) | Visualize a product's nutritional information as HTML including CSS. | | |
|&#9744;| [Product Nutrition by ID Image](https://spoonacular.com/food-api/docs#Product-Nutrition-by-ID-Image) | Visualize a product's nutritional information as an image. | | |
|&#9744;| [Menu Item Nutrition Label Widget](https://spoonacular.com/food-api/docs#Menu-Item-Nutrition-Label-Widget) |Visualize a menu item's nutritional label information as HTML including CSS. | | |
|&#9744;| [Menu Item Nutrition Label Image](https://spoonacular.com/food-api/docs#Menu-Item-Nutrition-Label-Image) |Visualize a menu item's nutritional label information as an image. | | |
|&#9744;| [Menu Item Nutrition by ID Widget](https://spoonacular.com/food-api/docs#Menu-Item-Nutrition-by-ID-Widget) |Visualize a menu item's nutritional information as HTML including CSS. | | |
|&#9744;| [Menu Item Nutrition by ID Image](https://spoonacular.com/food-api/docs#Menu-Item-Nutrition-by-ID-Image) |Visualize a menu item's nutritional information as HTML including CSS. | | |
|&#9744;| [Create Recipe Card](https://spoonacular.com/food-api/docs#Create-Recipe-Card)  |Generate a recipe card for a recipe. | | |
|&#9744;| [Get Recipe Card](https://spoonacular.com/food-api/docs#Get-Recipe-Card) |Generate a recipe card for a recipe. | | |