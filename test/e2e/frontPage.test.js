describe("Basic site parts exist", () => {
    beforeAll(async () => {
        await page.goto("http://localhost:3000/");
    });

    it("Page is titled \"Knead It\"", async () => {
        await expect(page.title()).resolves.toMatch("Knead It");
    });

    it("Login button has correct text", async () => {
        await page.waitForSelector("#root > div > div:nth-child(1) > div > header > form > div > a:nth-child(1) > button");
        const login = await page.evaluate(() => 
            document.querySelector("#root > div > div:nth-child(1) > div > header > form > div > a:nth-child(1) > button").innerHTML);
        expect(login).toBe("Login");
    });

    it("Sign Up button has correct text", async () => {
        await page.waitForSelector("#root > div > div:nth-child(1) > div > header > form > div > a:nth-child(2) > button");
        const signup = await page.evaluate(() => 
            document.querySelector("#root > div > div:nth-child(1) > div > header > form > div > a:nth-child(2) > button").innerHTML);
        expect(signup).toBe("Sign Up");
    });

    it("All sections exist", async () => {
        await page.waitForSelector("h4");

        const cuisine = await page.$$eval("h4", (els) => els[0].textContent);
        expect(cuisine).toBe("CUISINE");
 
        const ingreds = await page.$$eval("h4", (els) => els[1].textContent);
        expect(ingreds).toBe("INGREDIENTS");
 
        const prep = await page.$$eval("h4", (els) => els[2].textContent);
        expect(prep).toBe("PREP TIME");
    
    });
    
});