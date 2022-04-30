/**
 * @jest-environment jsdom
 */
const fs = require("fs");

// For some reason, this path is relative to the current working directory and not the file. 
// As such, this path assumes the test is being run from the root.
window.document.body.innerHTML = fs.readFileSync("./src/recipe_list/recipe_list.html");

const domlistener = jest.spyOn(window, "addEventListener");
const sblistener = jest.spyOn(document.querySelector("button"), "addEventListener");
const kdlistener = jest.spyOn(document, "addEventListener");

const recipeList = require("../src/scripts/RecipeList.js");

describe("Listener Tests", () => {
    test("Testing recipe list DOM listener", () => {
        expect(domlistener).toHaveBeenCalledTimes(1);
        expect(domlistener).toHaveBeenCalledWith("DOMContentLoaded", recipeList.init);
    });

    test("Testing recipe list search bar listener", () => {
        expect(sblistener).toHaveBeenCalledTimes(1);
        expect(sblistener).toHaveBeenCalledWith("click", recipeList.searchRecipes);
    });

    test("Testing bind enter key keydown listener", () => {
        recipeList.bindEnterKey();
        expect(kdlistener).toHaveBeenCalledTimes(1);
        expect(kdlistener).toHaveBeenCalledWith("keydown", expect.any(Function));
    });
});

// TODO: We can test resetcards along with the rest of the recipe-card tests