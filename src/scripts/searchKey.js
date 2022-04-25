/**
 * Search for the value of the `key` which is an attribute in the given object `data` json file
 * @param {Object} object the json file
 * @param {String} key the name of the attribute we are trying to acces in the json file
 * @returns {*} The value associated with the key if found
 */
export function searchForKey (object, key) {
    let value;
    Object.keys(object).some(function (k) {
        if (k === key) {
            value = object[k];
            return true;
        }
        if (object[k] && typeof object[k] === "object") {
            value = searchForKey(object[k], key);
            return value !== undefined;
        }
        return false;
    });
    return value;
}

/**
 * Returns the instruction steps of the given recipe
 * @param {Object} data json file
 * @returns {Object[]} An array holding the list of steps
 */
export function getInstructionSteps (data) {
    return searchForKey(searchForKey(data, "analyzedInstructions"), "steps");
}
