/**
 * MARKFAV function sets recipe's id location in favmap as true, and then
 * replaces the favmap in local storage.
 * @param {int} id
 */
export function markFav (id) {
  // get hash table
  const favmap = new Map(JSON.parse(localStorage['2']));
  favmap.set(id, true);
  // console.log(favmap);
  localStorage.setItem(2, JSON.stringify(Array.from(favmap.entries())));
}

/**
 * UNFAV function sets recipe's id location in favmap as false and replaces
 * the favmap into local storage again.
 * @param {int} id
 */
export function unFav (id) {
  // get hash table
  const favmap = new Map(JSON.parse(localStorage['2']));
  favmap.set(id, false);
  // console.log(favmap);
  localStorage.setItem(2, JSON.stringify(Array.from(favmap.entries())));
}
