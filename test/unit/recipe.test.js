import {addRecipe, getRecipeIds, getRecipe, updateDB} from "../../src/firebase.mjs";
import assert from "assert";

describe("Recipe-related unit tests", () => {
    it("getRecipe with recipe in database", async () => {
        const recipe = await getRecipe("1095806");
        assert.equal(recipe.title, "Spanish style salmon fillets");
    });

    it("getRecipe with recipe not in database", async () => {
        const recipe = await getRecipe("1");
        assert.strictEqual(recipe, undefined);
    });

    it("getRecipeIds with cuisine in database", async () => {
        const ids = await getRecipeIds("cuisines", "test");
        assert.deepEqual(ids, [1, 2, 3]);
    });

    it("getRecipeIds with cuisine not in database", async () => {
        const ids = await getRecipeIds("cuisines", "doesnotexist");
        assert.equal(ids.length, 0);
    });

    it("getRecipeIds with ingredients in database", async () => {
        const ids = await getRecipeIds("ingredients", "test");
        assert.deepEqual(ids, [4, 5]);
    });

    it("getRecipeIds with ingredients not in database", async () => {
        const ids = await getRecipeIds("ingredients", "doesnotexist");
        assert.equal(ids.length, 0);
    });

    it("getRecipeIds with time in database", async () => {
        const ids = await getRecipeIds("time", "test");
        assert.deepEqual(ids, [6, 7, 8, 9]);
    });

    it("getRecipeIds with time not in database", async () => {
        const ids = await getRecipeIds("time", "doesnotexist");
        assert.equal(ids.length, 0);
    });

    it("getRecipeIds with category not in database", async () => {
        const ids = await getRecipeIds("doesnotexist", "doesnotexist");
        assert.equal(ids.length, 0);
    });
});