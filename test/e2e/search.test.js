jest.useRealTimers();
jest.setTimeout(15000);

describe("Search Tests", () => {
    beforeAll(async () => {
        await page.goto("http://localhost:3000");
    });

    it("Simple cuisine search", async () => {
        await page.waitForSelector("#dropdown-basic");
        await page.evaluate(() => document.querySelector("#dropdown-basic").click());
        await page.waitForSelector("#form_search > div > span > div > div > a:nth-child(2)");
        await page.evaluate(() => document.querySelector("#form_search > div > span > div > div > a:nth-child(2)").click());
        await page.type("#searchbar", "African");
        await page.keyboard.press("Enter");

        await page.waitForSelector("#root > div > div.container-md > div:nth-child(2) > div:nth-child(1) > div > a > img");
        const header = await page.evaluate(() => document.querySelector("#root > div > div.container-md > h2").textContent);
        expect(header).toBe("Recipes that are African");
    });

    it("Strange casing cuisine search", async () => {
        await page.waitForSelector("#dropdown-basic");
        await page.evaluate(() => document.querySelector("#dropdown-basic").click());
        await page.waitForSelector("#form_search > div > span > div > div > a:nth-child(2)");
        await page.evaluate(() => document.querySelector("#form_search > div > span > div > div > a:nth-child(2)").click());
        await page.type("#searchbar", "AfRIcaN");
        await page.keyboard.press("Enter");

        await page.waitForSelector("#root > div > div.container-md > div:nth-child(2) > div:nth-child(1) > div > a > img");
        const header = await page.evaluate(() => document.querySelector("#root > div > div.container-md > h2").textContent);
        expect(header).toBe("Recipes that are African");
    });

    it("Simple ingredient search", async () => {
        await page.waitForSelector("#dropdown-basic");
        await page.evaluate(() => document.querySelector("#dropdown-basic").click());
        await page.waitForSelector("#form_search > div > span > div > div > a:nth-child(3)");
        await page.evaluate(() => document.querySelector("#form_search > div > span > div > div > a:nth-child(3)").click());
        await page.type("#searchbar", "Health Foods");
        await page.keyboard.press("Enter");

        await page.waitForSelector("#root > div > div.container-md > div:nth-child(2) > div:nth-child(1) > div > a > img");
        const header = await page.evaluate(() => document.querySelector("#root > div > div.container-md > h2").textContent);
        expect(header).toBe("Recipes containing Health Foods Ingredients");
    });

    it("Strange casing ingredient search", async () => {
        await page.waitForSelector("#dropdown-basic");
        await page.evaluate(() => document.querySelector("#dropdown-basic").click());
        await page.waitForSelector("#form_search > div > span > div > div > a:nth-child(3)");
        await page.evaluate(() => document.querySelector("#form_search > div > span > div > div > a:nth-child(3)").click());
        await page.type("#searchbar", "hEaLtH fOOdS");
        await page.keyboard.press("Enter");

        await page.waitForSelector("#root > div > div.container-md > div:nth-child(2) > div:nth-child(1) > div > a > img");
        const header = await page.evaluate(() => document.querySelector("#root > div > div.container-md > h2").textContent);
        expect(header).toBe("Recipes containing Health Foods Ingredients");
    });

    it("Simple name search", async () => {
        await page.waitForSelector("#dropdown-basic");
        await page.evaluate(() => document.querySelector("#dropdown-basic").click());
        await page.waitForSelector("#form_search > div > span > div > div > a:nth-child(1)");
        await page.evaluate(() => document.querySelector("#form_search > div > span > div > div > a:nth-child(1)").click());
        await page.type("#searchbar", "Spanish style salmon fillets");
        await page.keyboard.press("Enter");

        await page.waitForSelector("#root > div > div.container-md > div:nth-child(2) > div:nth-child(1) > div > a > img");
        const header = await page.evaluate(() => document.querySelector("#root > div > div.container-md > h2").textContent);
        expect(header).toBe("Recipes names with Spanish Style Salmon Fillets");
    });

    it("Strange casing name search", async () => {
        await page.waitForSelector("#dropdown-basic");
        await page.evaluate(() => document.querySelector("#dropdown-basic").click());
        await page.waitForSelector("#form_search > div > span > div > div > a:nth-child(1)");
        await page.evaluate(() => document.querySelector("#form_search > div > span > div > div > a:nth-child(1)").click());
        await page.type("#searchbar", "sAlMoN fILleTS");
        await page.keyboard.press("Enter");

        await page.waitForSelector("#root > div > div.container-md > div:nth-child(2) > div:nth-child(1) > div > a > img");
        const header = await page.evaluate(() => document.querySelector("#root > div > div.container-md > h2").textContent);
        expect(header).toBe("Recipes names with Salmon Fillets");
    });
});