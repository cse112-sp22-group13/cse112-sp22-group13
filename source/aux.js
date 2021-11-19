/**
 * Search for the value of the `key` in the given object `data`
 * @param {Object} data
 * @param {String} key
 * @returns {*} The value associated with the key if found
 */
export function searchForKey (data, key) {
  let value;
  Object.keys(data).forEach(function (k) {
    if (k === key) {
      value = data[k];
    } else if (data[k] && typeof data[k] === 'object') {
      value = searchForKey(data[k], key);
    }
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
