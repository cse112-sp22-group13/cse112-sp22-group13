jest.useRealTimers();
jest.setTimeout(30000);

describe("Signup Page Tests", () => {

    beforeAll(async () => {
        await page.goto("http://localhost:3000/");
    });

    it("Click from login to signup page", async () => {
        // Start on login page
        await page.goto("http://localhost:3000/login");
        await page.waitForSelector(".fw-bold");
        const login = await page.$eval(".fw-bold", (e) => e.innerHTML);
        expect(login).toBe("Log In");

        // Swap to signup page
        await page.waitForSelector(".btn-info");
        await page.click(".btn-info");

        // Should be on signup page
        await page.waitForSelector(".fw-bold");
        const signup = await page.$eval(".fw-bold", (e) => e.innerHTML);
        expect(signup).toBe("Sign up");   
    });

    it("Click from signup to login page", async () => {
        // Start on signup page
        await page.goto("http://localhost:3000/signup");
        await page.waitForSelector(".fw-bold");
        const signup = await page.$eval(".fw-bold", (e) => e.innerHTML);
        expect(signup).toBe("Sign up");  
        
        // Swap to login page
        await page.waitForSelector(".btn-info");
        await page.click(".btn-info");

        // Should be on login page
        await page.waitForSelector(".fw-bold");
        const login = await page.$eval(".fw-bold", (e) => e.innerHTML);
        expect(login).toBe("Log In");
    });
});