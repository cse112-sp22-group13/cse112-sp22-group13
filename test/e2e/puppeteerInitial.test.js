// describe("Knead It", () => {
//     beforeAll(async () => {
//         await page.goto("http://localhost:3000/");
//     });

//     it("Page is titled \"Knead It\"", async () => {
//         await expect(page.title()).resolves.toMatch("Knead It");
//     });

//     it("Login button has correct text", async () => {
//         await page.waitForSelector("button");
//         const login = await page.$$eval("button", (els) => els[1].textContent);
//         expect(login).toBe("Login");
//     });

//     it("Sign Up button has correct text", async () => {
//         await page.waitForSelector("button");
//         const signup = await page.$$eval("button", (els) => els[2].textContent);
//         expect(signup).toBe("Sign Up");
//     });
// });