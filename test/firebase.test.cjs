const test = require("firebase-functions-test")({
    // databaseURL: "kneadit-b63a8.appspot.com",
    storageBucket: "kneadit-b63a8.appspot.com",
    projectId: "kneadit-b63a8",
}, "kneadit-b63a8-c734ebe38dda.json");
//import {addRecipe, getRecipeIds, getRecipe, updateDB, testConsole} from "../src/firebase.mjs";
const myFunctions = require("../src/firebase.cjs");
var assert = require("assert");
describe("firebase unit tests", () => {
    it("getRecipe", async () => {
        const recipe = await myFunctions.getRecipe("1095806");
        assert.equal(recipe.title, "Spanish style salmon fillets");
        // expect(recipe.title).equal("Spanish style salmon fillets");
    });
    // it("getRecipeIds", () => {
    //     const ids = myFunctions.getRecipeIds("")
    // });

});