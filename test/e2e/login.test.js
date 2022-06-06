describe("Login Tests", () => {
    beforeAll(async () => {
        await page.goto("http://localhost:3000/login");
    });

    it("Login/logout with valid credentials", async () => {
        // Log in using valid credentials
        await page.type("#floatingInput", "kneadit112@gmail.com");
        await page.type("#floatingPassword", "cse112ucsd");
        await page.click("#root > div > div.modal.position-static.d-block > div > div > div.modal-body.p-5.pt-0 > form > button.w-100.mb-2.btn.btn-lg.rounded-4.btn-warning");
        
        // Check if signup/login have changed to logout button
        await page.waitForSelector("#root > div > div:nth-child(1) > div > header > form > div > button");
        const logout = await page.evaluate(() => 
            document.querySelector("#root > div > div:nth-child(1) > div > header > form > div > button").innerHTML);
        expect(logout).toBe("Logout");

        // Log out
        const button = await page.$("#root > div > div:nth-child(1) > div > header > form > div > button");
        button.evaluate(b => b.click());

        // Check if signup/login buttons have re-appeared
        const login = await page.evaluate(() => 
            document.querySelector("#root > div > div:nth-child(1) > div > header > form > div > a:nth-child(1) > button").innerHTML);
        expect(login).toBe("Login");
        const signup = await page.evaluate(() => 
            document.querySelector("#root > div > div:nth-child(1) > div > header > form > div > a:nth-child(2) > button").innerHTML);
        expect(signup).toBe("Sign Up");
    });

    it("Login with invalid password", async () => {
        page.on("dialog", async dialog => {
            expect(dialog.message()).toBe("Firebase: Error (auth/wrong-password).");
            await dialog.accept();
        });

        await page.type("#floatingInput", "kneadit112@gmail.com");
        await page.type("#floatingPassword", "wrongpassword");
        await page.click("#root > div > div.modal.position-static.d-block > div > div > div.modal-body.p-5.pt-0 > form > button.w-100.mb-2.btn.btn-lg.rounded-4.btn-warning");
        await page.screenshot();
    });

    it("Login with invalid email", async () => {
        page.on("dialog", async dialog => {
            expect(dialog.message()).toBe("Firebase: Error (auth/user-not-found).");
            await dialog.accept();
        });

        await page.type("#floatingInput", "wrongemail@wrongemail.com");
        await page.type("#floatingPassword", "cse112ucsd");
        await page.click("#root > div > div.modal.position-static.d-block > div > div > div.modal-body.p-5.pt-0 > form > button.w-100.mb-2.btn.btn-lg.rounded-4.btn-warning");
        await page.screenshot();
    });
});