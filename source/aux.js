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
export function getInstructionSteps (data) {
  return searchForKey(searchForKey(data, 'analyzedInstructions'), 'steps');
}
