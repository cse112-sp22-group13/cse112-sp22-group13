/**
   * *************************MARKFAV FUNCTION************************* *
   * Mark favorite as true in hashmap by id of recipe, store the        *
   * hashmap in localStorage                                            *
   * ****************************************************************** *
   */
export function markFav (id) {
  // get hash table
  const favmap = new Map(JSON.parse(localStorage['2']));
  favmap.set(id, true);
  // console.log(favmap);
  localStorage.setItem(2, JSON.stringify(Array.from(favmap.entries())));
}

/**
    * *************************UNFAV FUNCTION************************* *
    * Mark favorite as false in hashmap by id of recipe, replace the   *
    * hashmap in localStorage                                          *
    * **************************************************************** *
    */
export function unFav (id) {
  // get hash table
  const favmap = new Map(JSON.parse(localStorage['2']));
  favmap.set(id, false);
  // console.log(favmap);
  localStorage.setItem(2, JSON.stringify(Array.from(favmap.entries())));
}
