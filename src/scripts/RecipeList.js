//import { searchForKey } from "./searchKey.js";
//import { addRecipe } from "./addRecipe.js";

const { searchForKey } = require("./searchKey.js");
const { addRecipe } = require("./addRecipe.js");

// SEARCH BAR BUTTON
const searchBar = document.querySelector("button");
const inputTxt = document.querySelector(".search-bar");
searchBar.addEventListener("click", searchRecipes);

window.addEventListener("DOMContentLoaded", init);
const localStorage = window.localStorage;

// Control flow for enterring recipe list from home page.
if (document.referrer === window.location.origin + "/src/home/home.html") {
    console.log(document.referrer);
    console.log(window.location);
    console.log("omg it works");
}

/**
 * Init automatically sets enter key bind to search bar and populates
 * the page with recipe cards of every json file that was fetched into
 * local storage.
 */
async function init () {
    bindEnterKey();
    createRecipeCards();
}

/**
 * CREATERECIPECARDS FUNCTION is called within init. From within this function you
 * can access the recipe data from the JSON files with the recipeData Object above.
 * Make sure you only display the three recipes we give you, you'll use the bindShowMore()
 * function to show any others you've added when the user clicks on the "Show more" button.
 */
function createRecipeCards () {
    const main = document.querySelector("main");
    // get hash table
    const hashes = JSON.parse(localStorage["0"]);
    // get array of ids
    // const elementIdArr = hashes.map(h => h[1]);
    hashes.forEach(h => {
        const element = document.createElement("recipe-card");
        element.data = localStorage[`${h[1]}`];
        element.id = h[1];
        // hides the recipe forever if it is considered deleted in localStorage (uncomment when ready to use)
        const deletedMap = new Map(JSON.parse(localStorage["3"]));
        if (deletedMap.get(h[1]) === true) {
            element.classList.add("deleted");
        }
        main.appendChild(element);
        element.addEventListener("click", () => {
            window.location.href = "../recipe_expand/recipe_expand.html" + "#" + element.id;
        });
    });
}

/**
 * SEARCHRECIPES function is the connection between frontend and backend.
 * When user clicks search button, search bar input will be pulled and passed to
 * getRecipesContainingKeyword(). Then the array returned will populate cards on
 * screen pertaining to input.
 */
function searchRecipes () {
    // take user input from the search bar
    const input = inputTxt.value;
    if (input === "") {
        resetCards();
        return;
    }
    console.log(input);

    // pass over to getRecipesNotContainingKeyword
    const myArr = getRecipesNotContainingKeyword(input);
    console.log(myArr.length);
    // console.log(localStorage.length);

    if (myArr.length === localStorage.length - 5) {
        alert("No recipes matching search found for " + input);
        return;
    }

    resetCards();
    // and make use of the array of json files returned from getRecipesContainingKeyword
    // to populate cards having to do with the input user put into the search bar textarea
    for (let i = 0; i < myArr.length; i++) {
        const recipeCard = document.getElementById(`${myArr[i]}`);
        recipeCard.classList.add("hidden");
    }
}

/**
 * resetCards function selects all cards and removes any hidden classes to
 * show them for view again.
 */
function resetCards () {
    const recipeCards = document.querySelectorAll("recipe-card");
    recipeCards.forEach(function (card) {
        card.classList.remove("hidden");
    });
}

/**
 * GETRECIPESNOTCONTAININGKEYWORD function
 * For grabbing an array of id' with all recipes that DON'T contain the
 * search input user put into search bar. This will be used to set those
 * recipes to 'hidden' so that only the recipes containing the word are
 * in view on the recipe list.
 * @param {String} keyword
 * @returns {int[]} an array that holds id's of recipes
 */
function getRecipesNotContainingKeyword (keyword) {
    // couple base cases
    let input = keyword.toLowerCase();

    if (keyword === "dairy free" || keyword === "gluten free") {
        console.log(input);
        input = input.replace(/\s/g, "");
        console.log(input);
    }

    const arr = [];
    // get hash table
    const hashes = JSON.parse(localStorage["0"]);

    hashes.forEach(h => {
        const jsonFile = JSON.parse(localStorage.getItem(h[1]));
        const tags = getTags(jsonFile);

        // checks if input is NOT located in title, ingredients, or rest of tag array
        if (!(tags[0].includes(input) || tags[1].includes(input) || tags.includes(input))) {
            arr.push(h[1]);
        }
    });

    return arr;
}

/**
 * getTags function will build an array containing title, ingredients,
 * and tags for true booleans within the json file passed. These tags will be
 * used to search through and compare user's search bar input to.
 * @param {Object} jsonFile that will be used to extract tags
 * @returns {String[]} an array of tags, consisting of the recipe title, ingredients, etc.
 */
function getTags (jsonFile) {
    const tagsArr = [];
    // title
    tagsArr.push(String(searchForKey(jsonFile, "title")).toLowerCase());
    // ingredients
    tagsArr.push(JSON.stringify(searchForKey(jsonFile, "extendedIngredients")).toLowerCase());

    // if (searchForKey(jsonFile, 'cheap')) { tagsArr.push('cheap'); }
    // if (searchForKey(jsonFile, 'dairyFree')) { tagsArr.push('dairyfree'); }
    // if (searchForKey(jsonFile, 'glutenFree')) { tagsArr.push('glutenfree'); }
    // if (searchForKey(jsonFile, 'vegan')) { tagsArr.push('vegan'); }
    // if (searchForKey(jsonFile, 'vegetarian')) { tagsArr.push('vegetarian'); }
    // if (searchForKey(jsonFile, 'veryHealthy')) { tagsArr.push('healthy'); }

    // booleans
    const climateChange = ["cheap", "dairyFree", "glutenFree", "vegan", "vegetarian"];
    for (const elem of climateChange) {
        if (searchForKey(jsonFile, elem)) {
            tagsArr.push(elem.toLowerCase());
        }
    }

    if (searchForKey(jsonFile, "veryHealthy")) {
        tagsArr.push("healthy");
    }

    return tagsArr;
}

/**
 * bindEnterKey allows user to click 'enter' after they typed something
 * into the search bar or add bar on the recipe list page.
 * Checks the active bar on the page first to call the appropriate funciton.
 */
function bindEnterKey () {
    document.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            const element = document.activeElement;
            if (element.className === "search-bar") {
                searchRecipes();
            } else if (element.className === "add-bar") {
                addRecipe();
            }
        }
    });
}

module.exports = { init: init, resetCards: resetCards, bindEnterKey: bindEnterKey, searchRecipes:searchRecipes };