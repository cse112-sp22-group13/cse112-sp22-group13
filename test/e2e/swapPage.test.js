describe("Clicking Between Signup, Login, Front Pages", () => {
    beforeEach(async () => {
        await page.goto("http://localhost:3000/");
    });

    it("Click from home page to signup page", async () => {
        // Start on home page
        await page.waitForSelector("h4");
        
        // Get one of the section titles to know we are on home page
        const cuisine = await page.$$eval("h4", (els) => els[0].textContent);
        expect(cuisine).toBe("CUISINE");

        // Click to signup page
        const button = await page.$("#root > div > div:nth-child(1) > div > header > form > div > a:nth-child(2) > button");
        await button.evaluate(b => b.click());

        // Should be on signup page
        await page.waitForSelector("h2");
        const signup = await page.$eval("h2", (e) => e.textContent);
        expect(signup).toBe("Sign up");   
    });

    it("Click from home page to login page", async () => {
        // Start on home page
        await page.goto("http://localhost:3000/");
        await page.waitForSelector("h4");
        
        // Get one of the section titles to know we are on home page
        const cuisine = await page.$$eval("h4", (els) => els[0].textContent);
        expect(cuisine).toBe("CUISINE");

        // Click to login page
        const button = await page.$("#root > div > div:nth-child(1) > div > header > form > div > a:nth-child(1) > button");
        await button.evaluate(b => b.click());

        // Should be on login page
        await page.waitForSelector("h2");
        const login = await page.$eval("h2", (e) => e.textContent);
        expect(login).toBe("Log In");   
    });

    it("Click from login page to signup page", async () => {
        // Start on login page
        await page.goto("http://localhost:3000/login");
        await page.waitForSelector("h2");
        const login = await page.$eval("h2", (e) => e.textContent);
        expect(login).toBe("Log In");

        // Click to signup page
        const button = await page.$("#root > div > div:nth-child(1) > div > header > form > div > a:nth-child(2) > button");
        await button.evaluate(b => b.click());

        // Should be on signup page
        await page.waitForSelector("h2");
        const signup = await page.$eval("h2", (e) => e.textContent);
        expect(signup).toBe("Sign up");   
    });

    it("Click from signup page to login page", async () => {
        // Start on signup page
        await page.goto("http://localhost:3000/signup");

        await page.waitForSelector("h2");
        const signup = await page.$eval("h2", (e) => e.textContent);
        expect(signup).toBe("Sign up");  
        
        // Click to login page
        const button = await page.$("#root > div > div:nth-child(1) > div > header > form > div > a:nth-child(1) > button");
        await button.evaluate(b => b.click());

        // Should be on login page
        await page.waitForSelector("h2");
        const login = await page.$eval("h2", (e) => e.textContent);
        expect(login).toBe("Log In");
    });

    it("Click from login page to signup page (link method)", async () => {
        // Start on login page
        await page.goto("http://localhost:3000/login");
        await page.waitForSelector("h2");
        const login = await page.$eval("h2", (e) => e.textContent);
        expect(login).toBe("Log In");

        // Click to signup page
        const link = await page.$("#root > div > div.modal.position-static.d-block > div > div > div.modal-body.p-5.pt-0 > div > a");
        await link.evaluate(b => b.click());

        // Should be on signup page
        await page.waitForSelector("h2");
        const signup = await page.$eval("h2", (e) => e.textContent);
        expect(signup).toBe("Sign up");   
    });

    it("Click from signup page to login page (link method)", async () => {
        // Start on signup page
        await page.goto("http://localhost:3000/signup");

        await page.waitForSelector("h2");
        const signup = await page.$eval("h2", (e) => e.textContent);
        expect(signup).toBe("Sign up");  
        
        // Click to login page
        const link = await page.$("#root > div > div.modal.position-static.d-block > div > div > div.modal-body.p-5.pt-0 > div > a");
        await link.evaluate(b => b.click());

        // Should be on login page
        await page.waitForSelector("h2");
        const login = await page.$eval("h2", (e) => e.textContent);
        expect(login).toBe("Log In");
    });

    it("Click from signup page to home page", async () => {
        // Start on signup page
        await page.goto("http://localhost:3000/signup");

        await page.waitForSelector("h2");
        const signup = await page.$eval("h2", (e) => e.textContent);
        expect(signup).toBe("Sign up");  
        
        // Click to home page
        const button = await page.$("#root > div > div:nth-child(1) > div > header > a > img");
        await button.evaluate(b => b.click());

        await page.waitForSelector("h4");
        
        // Get one of the section titles to know we are on home page
        const cuisine = await page.$$eval("h4", (els) => els[0].textContent);
        expect(cuisine).toBe("CUISINE");
    });

    it("Click from login page to home page", async () => {
        // Start on signup page
        await page.goto("http://localhost:3000/login");

        await page.waitForSelector("h2");
        const signup = await page.$eval("h2", (e) => e.textContent);
        expect(signup).toBe("Log In");  
        
        // Click to home page
        const button = await page.$("#root > div > div:nth-child(1) > div > header > a > img");
        await button.evaluate(b => b.click());

        await page.waitForSelector("h4");
        
        // Get one of the section titles to know we are on home page
        const cuisine = await page.$$eval("h4", (els) => els[0].textContent);
        expect(cuisine).toBe("CUISINE");
    });
});