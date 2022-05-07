// const server = require("../server");
const puppeteer = require("puppeteer");
const http = require("http");
const fs = require("fs").promises;

let server;
let browser;

describe("Knead It", () => {
    beforeAll(async () => {
        // console.log(process.cwd());
        // await page.goto("file://" + process.cwd() + "/src/home/home.html");
        const host = "localhost";
        const port = 8000;

        let htmlFile;
        let cssFile;

        const requestListener = function (req, res) {
            switch (req.url) {
            case "/home/home.css":
                res.setHeader("Content-Type", "text/css");
                res.writeHead(200);
                res.write(cssFile);
                break;
            default:
                res.setHeader("Content-Type", "text/html");
                res.writeHead(200);
                res.write(htmlFile);
        
            }
            res.end();
    
        };

        fs.readFile("src/home/home.html").then(contents => {
            htmlFile = contents;
        });
        fs.readFile("src/home/home.css").then(contents => {
            cssFile = contents;
        });


        server = http.createServer(requestListener);
        server.listen(port, host, () => {
            // console.log(`Server is running on http://${host}:${port}`);
        });
        browser = await puppeteer.launch();
    });

    it("should be titled \"KNEAD IT\"", async () => {
        const page = await browser.newPage();
        await page.goto("http://localhost:8000");

        await expect(page.title()).resolves.toMatch("KNEAD IT");
    });

    afterAll(async () => {
        await browser.close();
        await server.close();
    });

});