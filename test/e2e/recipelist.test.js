describe("Recipe List Tests", () => {
    beforeEach(async () => {
        await page.goto("http://localhost:3000");
    });

    it("Click to African recipes (onscreen)", async () => {
        await page.waitForSelector("#root > div > div.container-fluid > div > div:nth-child(1) > a > img");
        await page.click("#root > div > div.container-fluid > div > div:nth-child(1) > a > img");
        
        await page.waitForTimeout(2000);
        const header = await page.evaluate(() => document.querySelector("#root > div > div.container-md > h2").textContent);
        expect(header).toBe("Recipes that are African");
    });

    it("Click to Vietnamese recipes (offscreen)", async () => {
        await page.waitForSelector("#root > div > div.container-fluid > div > div:nth-child(25) > a > img");
        await page.evaluate(() => document.querySelector("#root > div > div.container-fluid > div > div:nth-child(25) > a > img").click());
        
        await page.waitForTimeout(2000);
        const header = await page.evaluate(() => document.querySelector("#root > div > div.container-md > h2").textContent);
        expect(header).toBe("Recipes that are Vietnamese");
    });

    it("Click to recipes with bread ingredients (onscreen)", async () => {
        await page.waitForSelector("#root > div > div:nth-child(6) > div:nth-child(1) > a > img");
        await page.evaluate(() => document.querySelector("#root > div > div:nth-child(6) > div:nth-child(1) > a > img").click());
        
        await page.waitForTimeout(2000);
        const header = await page.evaluate(() => document.querySelector("#root > div > div.container-md > h2").textContent);
        expect(header).toBe("Recipes containing Bread Ingredients");
    });

    it("Click to recipes with canned and jarred ingredients (offscreen)", async () => {
        await page.waitForSelector("#root > div > div:nth-child(6) > div:nth-child(12) > a > img");
        await page.evaluate(() => document.querySelector("#root > div > div:nth-child(6) > div:nth-child(12) > a > img").click());
        
        await page.waitForTimeout(2000);
        const header = await page.evaluate(() => document.querySelector("#root > div > div.container-md > h2").textContent);
        expect(header).toBe("Recipes containing Canned And Jarred Ingredients");
    });

    it("Click to recipes with <30 minutes prep time", async () => {
        await page.waitForSelector("#root > div > div:nth-child(8) > div:nth-child(1) > a > img");
        await page.evaluate(() => document.querySelector("#root > div > div:nth-child(8) > div:nth-child(1) > a > img").click());
        
        await page.waitForTimeout(2000);
        const header = await page.evaluate(() => document.querySelector("#root > div > div.container-md > h2").textContent);
        expect(header).toBe("Recipes that take Less Than 30 Minutes");
    });
});