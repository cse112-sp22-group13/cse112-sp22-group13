  /**
   * *************************GETTAGS FUNCTION************************* *
   * Function that will build an array containing title, ingredients,   *
   * and tags for true booleans within the json file passed             *
   * ****************************************************************** *
   */
   function markFav(id){
    // get hash table
    const favmap = JSON.parse(localStorage['2']);
    favmap.set(id, true);
    localStorage.setItem(2, JSON.stringify(Array.from(favmap.entries())));
   }
 
    /**
    * *************************GETTAGS FUNCTION************************* *
    * Function that will build an array containing title, ingredients,   *
    * and tags for true booleans within the json file passed             *
    * ****************************************************************** *
    */
    function unFav(id){
      // get hash table
      const favmap = JSON.parse(localStorage['2']);
      favmap.set(id, false);
      localStorage.setItem(2, JSON.stringify(Array.from(favmap.entries())));
    }