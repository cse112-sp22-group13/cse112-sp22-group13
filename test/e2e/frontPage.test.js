// describe("Main.jsx", () => {

//     beforeAll(async () => {
//         await page.goto("http://localhost:3000/");
//     });

//     it("All sections exist", async () => {
//         await page.waitForSelector("h4");

//         const cuisine = await page.$$eval("h4", (els) => els[0].textContent);
//         expect(cuisine).toBe("CUISINE");
 
//         const ingreds = await page.$$eval("h4", (els) => els[1].textContent);
//         expect(ingreds).toBe("INGREDIENTS");
 
//         const prep = await page.$$eval("h4", (els) => els[2].textContent);
//         expect(prep).toBe("PREP TIME");
    
//     });
    
// });