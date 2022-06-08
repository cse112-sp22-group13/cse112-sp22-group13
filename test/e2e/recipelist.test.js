jest.useRealTimers();
jest.setTimeout(15000);

describe("Recipe List Tests", () => {
    beforeEach(async () => {
        await page.goto("http://localhost:3000");
    });

    it("Click to African recipes (onscreen)", async () => {
        await page.waitForSelector("#root > div > div.container-fluid > div > div:nth-child(1) > a > img");
        await page.click("#root > div > div.container-fluid > div > div:nth-child(1) > a > img");
        
        await page.waitForSelector("#root > div > div.container-md > div:nth-child(2) > div:nth-child(1) > div > a > img");
        const header = await page.evaluate(() => document.querySelector("#root > div > div.container-md > h2").textContent);
        expect(header).toBe("Recipes that are African");
    });

    it("Click to Nordic recipes (offscreen)", async () => {
        await page.waitForSelector("#root > div > div.container-fluid > div > div:nth-child(17) > a > img");
        await page.evaluate(() => document.querySelector("#root > div > div.container-fluid > div > div:nth-child(17) > a > img").click());
        
        await page.waitForSelector("#root > div > div.container-md > div:nth-child(2) > div:nth-child(1) > div > a > img");
        const header = await page.evaluate(() => document.querySelector("#root > div > div.container-md > h2").textContent);
        expect(header).toBe("Recipes that are Nordic");
    });

    it("Click to recipes with Health Foods ingredients", async () => {
        await page.waitForSelector("#root > div > div.scrolling-wrapper.row.flex-row.flex-nowrap.py-2 > div:nth-child(3) > a > img");
        await page.evaluate(() => document.querySelector("#root > div > div.scrolling-wrapper.row.flex-row.flex-nowrap.py-2 > div:nth-child(3) > a > img").click());
        
        await page.waitForSelector("#root > div > div.container-md > div:nth-child(2) > div:nth-child(1) > div > a > img");
        const header = await page.evaluate(() => document.querySelector("#root > div > div.container-md > h2").textContent);
        expect(header).toBe("Recipes containing Health Foods Ingredients");
    });

    it("Click to recipes with <30 minutes prep time", async () => {
        await page.waitForSelector("#root > div > div:nth-child(8) > div:nth-child(1) > a > img");
        await page.evaluate(() => document.querySelector("#root > div > div:nth-child(8) > div:nth-child(1) > a > img").click());
        
        await page.waitForSelector("#root > div > div.container-md > div:nth-child(2) > div:nth-child(1) > div > a > img");
        const header = await page.evaluate(() => document.querySelector("#root > div > div.container-md > h2").textContent);
        expect(header).toBe("Recipes that take Less Than 30 Minutes");
    });
});