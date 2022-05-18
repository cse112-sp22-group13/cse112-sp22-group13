describe("Knead It", () => {
    beforeAll(async () => {
        await page.goto("http://localhost:3000/");
    });

    it("should be titled \"KNEAD IT\"", async () => {
        await expect(page.title()).resolves.toMatch("Knead It");
    });
});