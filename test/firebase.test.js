// const test = require("firebase-functions-test")({
//     // databaseURL: "kneadit-b63a8.appspot.com",
//     storageBucket: "kneadit-b63a8.appspot.com",
//     projectId: "kneadit-b63a8",
// }, "kneadit-b63a8-c734ebe38dda.json");
import * as firebase from "firebase-functions-test";
import {addRecipe, getRecipeIds, getRecipe, updateDB, testConsole} from "../src/firebase.mjs";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDoc, getDocs, setDoc, updateDoc} from "firebase/firestore/lite";
// const myFunctions = import("../src/firebase.mjs");
import assert from "assert";

describe("firebase unit tests", () => {
    it("getRecipe", async () => {
        const recipe = await getRecipe("1095806");
        assert.equal(recipe.title, "Spanish style salmon fillets");
        // expect(recipe.title).equal("Spanish style salmon fillets");
        const recipe2 = await getRecipe("644504");
        assert.equal(recipe2.title, "German White Chocolate Cake");
    });
    it("getRecipeIds", () => {
        const ids = getRecipeIds("");
    });

});