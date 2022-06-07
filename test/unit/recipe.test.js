import {addRecipe, getRecipeIds, getRecipe, updateDB} from "../../src/firebase.mjs";
import assert from "assert";

describe("Recipe-related unit tests", () => {
    it("getRecipe with recipe in database", async () => {
        const recipe = await getRecipe("1095806");
        assert.equal(recipe.title, "Spanish style salmon fillets");
        // expect(recipe.title).equal("Spanish style salmon fillets");
    });

    it("getRecipe with recipe not in database", async () => {
        const recipe = await getRecipe("1");
        assert.strictEqual(recipe, undefined);
    });

    it("getRecipeIds with test collection", async () => {
        const ids = await getRecipeIds("test", "test");
        assert.deepEqual(ids, [1, 2, 3]);
    });

    it("getRecipeIds with test collection not in database", async () => {
        const ids = await getRecipeIds("test", "doesnotexist");
        assert.equal(ids.length, 0);
    });

    it("getRecipeIds with category not in database", async () => {
        const ids = await getRecipeIds("doesnotexist", "doesnotexist");
        assert.equal(ids.length, 0);
    });

    it("getRecipeIds with name", async () => {
        const ids = await getRecipeIds("Name", "Spanish style salmon fillets");
        assert.deepEqual(ids, ["1095806"]);
    });
});