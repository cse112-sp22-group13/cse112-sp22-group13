describe("Knead It", () => {
    beforeAll(async () => {
        console.log(process.cwd());
        await page.goto("file://" + process.cwd() + "/src/home/home.html");
    });

    it("should be titled \"KNEAD IT\"", async () => {
        await expect(page.title()).resolves.toMatch("KNEAD IT");
    });
});