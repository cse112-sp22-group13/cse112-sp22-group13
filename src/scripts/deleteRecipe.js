/**
 *
 * @param {*} id , Id of Recipe to Delete
 */
export function deleteRecipe (id) {
  // get hash table
  const deletedMap = new Map(JSON.parse(localStorage['3']));
  deletedMap.set(parseInt(id), true);
  localStorage.setItem(3, JSON.stringify(Array.from(deletedMap.entries())));
}
