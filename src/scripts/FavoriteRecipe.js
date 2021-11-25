  /**
   * *************************markFav FUNCTION************************* *
   * Mark favorite as true in hashmap by id of recipe, store the        *
   * hashmap in localStorage                                            *
   * ****************************************************************** *
   */
   function markFav(id){
    // get hash table
    const favmap = JSON.parse(localStorage['2']);
    favmap.set(id, true);
    localStorage.setItem(2, JSON.stringify(Array.from(favmap.entries())));
   }
 
    /**
    * *************************unFav FUNCTION************************* *
    * Mark favorite as false in hashmap by id of recipe, replace the     *
    * hashmap in localStorage                                           *
    * ****************************************************************** *
    */
    function unFav(id){
      // get hash table
      
      const favmap = JSON.parse(localStorage['2']);
      favmap.set(id, false);
      localStorage.setItem(2, JSON.stringify(Array.from(favmap.entries())));
    }