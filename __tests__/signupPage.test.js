describe("Signup Page Tests", () => {

    beforeAll(async () => {
        await page.goto("http://localhost:3000/");
    });

    it("Click from login to signup page", async () => {
        // Start on login page
        await page.goto("http://localhost:3000/login");
        await page.waitForSelector("h2");
        const login = await page.$eval("h2", (e) => e.textContent);
        expect(login).toBe("Log In");
        await page.screenshot({
            path: "test.png"
        });

        // Click to signup page
        const button = await page.$("#root > div > div.modal.position-static.d-block > div > div > div.modal-body.p-5.pt-0 > a > button");
        await button.evaluate(b => b.click());

        // Should be on signup page
        await page.waitForSelector("h2");
        const signup = await page.$eval("h2", (e) => e.textContent);
        expect(signup).toBe("Sign up");   
    });

    it("Click from signup to login page", async () => {
        // Start on signup page
        await page.goto("http://localhost:3000/signup");

        await page.waitForSelector("h2");
        const signup = await page.$eval("h2", (e) => e.textContent);
        expect(signup).toBe("Sign up");  
        await page.screenshot({
            path: "test2.png"
        });
        
        // Click to login page
        const button = await page.$("#root > div > div.modal.position-static.d-block > div > div > div.modal-body.p-5.pt-0 > a > button");
        await button.evaluate(b => b.click());

        // Should be on login page
        await page.waitForSelector("h2");
        const login = await page.$eval("h2", (e) => e.textContent);
        expect(login).toBe("Log In");
    });
});