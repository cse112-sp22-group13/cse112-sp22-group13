const { expect } = require("@jest/globals");
const puppeteer = require('puppeteer');

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
        expect([titleJson, typewriterJson]).toBe(["KNEAD IT", "ALL YOU KNEAD IS BREAD 🧇"]);
    })
    it("Initial Page Test - Check if favorites are populated", async () => {
        console.log("Checking if favorites are populated");
    });

}, 100000000)