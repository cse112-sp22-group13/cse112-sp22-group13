const puppeteer = require("puppeteer");
const http = require("http");
const fs = require("fs").promises;

// Since we're doing E2E testing, need the timeout to be a bit more forgiving
jest.useRealTimers();
jest.setTimeout(30000);

let server;
let browser;

// Server is set up following tutorial on https://www.digitalocean.com/community/tutorials/how-to-create-a-web-server-in-node-js-with-the-http-module

describe("Knead It", () => {
    beforeAll(async () => {
        // console.log(process.cwd());
        // await page.goto("file://" + process.cwd() + "/src/home/home.html");
        const host = "localhost";
        const port = 8000;

        let htmlFile;
        let cssFile;
        let recipehtml;
        let recipecss;

        const requestListener = function (req, res) {
            // Define various cases for each request
            switch (req.url) {
            case "/home/home.css":
                res.setHeader("Content-Type", "text/css");
                res.writeHead(200);
                res.write(cssFile);
                break;
            case "/recipe_list/recipe_list.html":
                res.setHeader("Content-Type", "text/html");
                res.writeHead(200);
                res.write(recipehtml);
                break;
            case "/recipe_list/recipe_list.css":
                res.setHeader("Content-Type", "text/css");
                res.writeHead(200);
                res.write(recipecss);
                break;
            default:
                res.setHeader("Content-Type", "text/html");
                res.writeHead(200);
                res.write(htmlFile);
        
            }
            res.end();
    
        };

        // Loads in various html/css files, to be sent to the server
        fs.readFile("src/home/home.html").then(contents => {
            htmlFile = contents;
        });
        fs.readFile("src/home/home.css").then(contents => {
            cssFile = contents;
        });
        fs.readFile("src/recipe_list/recipe_list.html").then(contents => {
            recipehtml = contents;
        });
        fs.readFile("src/recipe_list/recipe_list.css").then(contents => {
            recipecss = contents;
        });

        server = http.createServer(requestListener);
        server.listen(port, host, () => {
            // console.log(`Server is running on http://${host}:${port}`);
        });
        browser = await puppeteer.launch();
    });

    it("Title of page is \"KNEAD IT\"", async () => {

        const page = await browser.newPage();
        await page.goto("http://localhost:8000");
        // await page.screenshot({
        //     path: "./test.jpg"
        // });

        await expect(page.title()).resolves.toMatch("KNEAD IT");
    });

    it("Navigating to recipe list/search page", async () => {
        const page = await browser.newPage();
        await page.goto("http://localhost:8000");
        /* 
        await page.screenshot({
            path: "./test.jpg"
        });
        */

        await page.waitForSelector(".cool-button");
        await page.click(".cool-button");

        /* 
        I have no idea why but this screenshot needs to be here to pass, adding a waitUntil: "domcontentloaded" 
        to the previous click does nothing so I'm not sure what this is helping with
        */
        await page.screenshot();

        // This button should only exist on the search/recipe list page, so the test will error out if we have not navigated to it
        const buttontext = await page.$eval(".search-button", (el) => el.innerHTML);
        await expect(buttontext).toBe("SEARCH");
    });

    afterAll(async () => {
        await browser.close();
        await server.close();
    });

});
