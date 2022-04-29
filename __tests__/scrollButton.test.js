const functions = require("../src/scripts/scrollButton.js");

test("Checking the functionality of the scroll to top button", () => {
    functions.topFunction();
    expect(document.body.scrollTop).toStrictEqual(0);
    expect(document.documentElement.scrollTop).toStrictEqual(0);
});
