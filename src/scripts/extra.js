/**
 * Search for the value of the `key` in the given object `data`
 * @param {Object} data
 * @param {String} key
 * @returns {*} The value associated with the key if found
 */
export function searchForKey (object, key) {
  let value;
  Object.keys(object).some(function (k) {
    if (k === key) {
      value = object[k];
      return true;
    }
    if (object[k] && typeof object[k] === 'object') {
      value = searchForKey(object[k], key);
      return value !== undefined;
    }
    return false;
  });
  return value;
}
/**
 * Returns the instruction steps of the given recipe
 * @param {Object} data
 * @returns {Object[]} A list of steps
 */
export function getInstructionSteps (data) {
  return searchForKey(searchForKey(data, 'analyzedInstructions'), 'steps');
}
