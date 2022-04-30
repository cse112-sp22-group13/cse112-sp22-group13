const fs = require("fs");

// For some reason, this path is relative to the current working directory and not the file. 
// As such, this path assumes the test is being run from the root.
window.document.body.innerHTML = fs.readFileSync("./src/recipe_list/recipe_list.html");

const clistener = jest.spyOn(document.querySelector(".add-container").querySelector("button"), "addEventListener");
const addRecipe = require("../src/scripts/addRecipe.js");

test("Testing addRecipe click listener", () => {
    expect(clistener).toHaveBeenCalledTimes(1);
    expect(clistener).toHaveBeenCalledWith("click", addRecipe.addRecipe);
});

describe("InsertAtIndex tests", () => {
    test("Testing insertAtIndex with empty map", () => {
        dict = new Map();
        dict = addRecipe.insertAtIndex(0, "test", 2, dict);
        expect(dict.size).toEqual(1);
        expect(dict.get("test")).toEqual(2);
    });

    test("Testing insertAtIndex in middle of filled map", () => {
        dict = new Map([
            ["r1", 1],
            ["r3", 3],
            ["r4", 4]
        ]);
        dict = addRecipe.insertAtIndex(1, "r2", 2, dict);
        expect(dict.size).toEqual(4);
        let index = 0;
        dict.forEach((value, key) => {
            expect(key).toEqual("r" + String(index + 1));
            expect(value).toEqual(index + 1);
            index++;
        });
    });

    test("Testing insertAtIndex at end of filled map", () => {
        dict = new Map([
            ["r1", 1],
            ["r2", 2],
            ["r3", 3]
        ]);
        dict = addRecipe.insertAtIndex(3, "r4", 4, dict);
        expect(dict.size).toEqual(4);
        let index = 0;
        dict.forEach((value, key) => {
            expect(key).toEqual("r" + String(index + 1));
            expect(value).toEqual(index + 1);
            index++;
        });
    });
});