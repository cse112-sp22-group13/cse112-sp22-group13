const { expect } = require("@jest/globals");
const puppeteer = require('puppeteer');
jest.setTimeout(1000000);
describe("testing for the website", () => {
    // Visit the website

    /**
    * @jest-environment jsdom
    */
    beforeAll(async () => {
        await page.goto("https://nan-bread-4.herokuapp.com/");
    }, 100000000);
    // Some basic tests
    it("Initial Page Test - Check for searchbar and search button", async () => {
        console.log("Checking for searchbar and button");
        const searchBar = page.$(".searchContainer");
        expect(searchBar).toBeDefined();
    });
    it("Initial Page Test - Check for searchbar and search button", async () => {
        console.log("Checking if texts are correctly populated ");
        const title = await page.$(".title");
        const typewriter = await page.$(".typewriter-text");
        const titleHandle = await title.getProperty("innerText");
        const titleJson = await titleHandle.jsonValue();
        const typewriterHandle = await typewriter.getProperty("innerText");
        const typewriterJson = await typewriterHandle.jsonValue();
        
        console.log(titleJson);
        expect([titleJson, typewriterJson]).toStrictEqual(["KNEAD IT", "ALL YOU KNEAD IS BREAD 🧇"]);
    })
    it("Initial Page Test - Check if favorites are populated", async () => {
        console.log("Checking if favorites are populated");
    });

    //Test Add Recipe
    it('Testing Create - navigate to recipe list and add recipe.', async () => {
        await page.goto('https://nan-bread-4.herokuapp.com/recipe_list/recipe_list.html');
        //Enter value in the input
        const localStorage = await page.evaluate(() =>  Object.assign({}, window.localStorage));
        //console.log(localStorage);
        const hashes = JSON.parse(localStorage['0']);
        await page.type('.add-bar', 'https://butterwithasideofbread.com/homemade-bread/');
        //Click on add button
        await page.click('.add-button');
    
        expect(localStorage[Object.keys(hashes)[0]]).toBeDefined();
    });

    it('Delete added recipe.', async () => {
        //grab num of recipes in local
        //await page.goto('https://nan-bread-4.herokuapp.com/recipe_list/recipe_list.html');
        const localStorage = await page.evaluate(() =>  Object.assign({}, window.localStorage));
        const numRecipes = localStorage.length - 1;
        //delete the recipe
        await page.click('.delete-button');
        expect(localStorage.length).toBe(numRecipes - 1);
    });
});