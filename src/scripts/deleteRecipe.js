/**
 * DELETERECIPE takes in the id of the card that was clicked to delete by user
 * and changes its value in the delMap (located at index 3 in localstorage) to true.
 * @param {int} id , Id of Recipe to Delete
 */
export function deleteRecipe (id) {
  // get the hash table
  const deletedMap = new Map(JSON.parse(localStorage['3']));
  deletedMap.set(parseInt(id), true);
  localStorage.setItem(3, JSON.stringify(Array.from(deletedMap.entries())));
}
