class RecipeCard extends HTMLElement {
    constructor() {
      // Part 1 Expose - TODO
      super();
      this.attachShadow({mode: 'open'});
      // You'll want to attach the shadow DOM here
    }
  
    set data(data) {
      // This is the CSS that you'll use for your recipe cards
      const styleElem = document.createElement('style');
      const styles = `
        * {
          font-family: sans-serif;
          margin: 0;
          padding: 0;
        }
        
        a {
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
        
        article {
          align-items: center;
          border: 1px solid rgb(223, 225, 229);
          border-radius: 8px;
          display: grid;
          grid-template-rows: 118px 56px 14px 18px 15px 36px;
          height: auto;
          row-gap: 5px;
          padding: 0 16px 16px 16px;
          width: 178px;
        }
        div.rating {
          align-items: center;
          column-gap: 5px;
          display: flex;
        }
        
        div.rating > img {
          height: auto;
          display: inline-block;
          object-fit: scale-down;
          width: 78px;
        }
        article > img {
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
          height: 118px;
          object-fit: cover;
          margin-left: -16px;
          width: calc(100% + 32px);
        }
        p.ingredients {
          height: 32px;
          line-height: 16px;
          padding-top: 4px;
          overflow: hidden;
        }
        
        p.organization {
          color: black !important;
        }
        p.title {
          display: -webkit-box;
          font-size: 16px;
          height: 36px;
          line-height: 18px;
          overflow: hidden;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        p:not(.title), span, time {
          color: #70757A;
          font-size: 12px;
        }
      `;
      styleElem.innerHTML = styles;
  
      // Here's the root element that you'll want to attach all of your other elements to
      const card = document.createElement('article');
      let img = document.createElement('img');
  
      img.src = searchForKey(data, "thumbnailUrl")
  
      img.alt = searchForKey(data, "headline");
      card.appendChild(img);
  
      let para = document.createElement('p');
      para.className = 'title';
      let title = document.createElement('a')
  
      title.href = getUrl(data);
      
      title.text = searchForKey(data, "headline");
      para.appendChild(title);
      card.appendChild(para);
  
      let para2 = document.createElement('p');
      para2.className = 'organization';
  
      
      para2.innerText = getOrganization(data);
  
      card.appendChild(para2);
  
      let div = document.createElement('div');
      div.className = "rating";
      let rating = searchForKey(data, "ratingValue");
      if(rating) {
        let span = document.createElement('span');
        span.innerHTML = rating;
        div.appendChild(span);
        let img2 = document.createElement('img');
        if(rating < .5){
          img2.src = "assets/images/icons/0-star.svg";
          img2.alt = "0 stars";
        }
        else if(rating < 1.5){
          img2.src = "assets/images/icons/1-star.svg";
          img2.alt = "1 star";
        }
        else if(rating < 2.5){
          img2.src = "assets/images/icons/2-star.svg";
          img2.alt = "2 stars";
        }
        else if(rating < 3.5){
          img2.src = "assets/images/icons/3-star.svg";
          img2.alt = "3 stars";
        }
        else if (rating < 4.5){
          img2.src = "assets/images/icons/4-star.svg";
          img2.alt = "4 stars";
        }
        else {
          img2.src = "assets/images/icons/5-star.svg";
          img2.alt = "5 stars";
        }
  
        div.appendChild(img2);
  
        let span2 = document.createElement('span');
        let count = searchForKey(data, "ratingCount");
        if(!count) {
          count = 0;
        }
        span2.innerText = "(" + count + ")";
        div.appendChild(span2);
      }
      else{
        let span = document.createElement('span');
        span.innerText = "No Reviews"
        div.appendChild(span);
      }
  
      
      card.appendChild(div);
  
      let time = document.createElement('time');
      let tempTime = searchForKey(data, 'totalTime');
      if(tempTime){
        time.innerText = convertTime(tempTime);
        card.appendChild(time);
      }
      let ingredients = document.createElement('p');
      ingredients.className = "ingredients";
      let ingr = searchForKey(data, 'recipeIngredient');
      ingredients.innerText = createIngredientList(ingr);
      card.appendChild(ingredients);
  
  
      this.shadowRoot.appendChild(styleElem);
      this.shadowRoot.appendChild(card);
  
      // Some functions that will be helpful here:
      //    document.createElement()
      //    document.querySelector()
      //    element.classList.add()
      //    element.setAttribute()
      //    element.appendChild()
      //    & All of the helper functions below
  
      // Make sure to attach your root element and styles to the shadow DOM you
      // created in the constructor()
  
      // Part 1 Expose - TODO
    }
  }
  
  
  /*********************************************************************/
  /***                       Helper Functions:                       ***/
  /***          Below are some functions I used when making          ***/
  /***     the solution, feel free to use them or not, up to you     ***/
  /*********************************************************************/
  
  /**
   * Recursively search for a key nested somewhere inside an object
   * @param {Object} object the object with which you'd like to search
   * @param {String} key the key that you are looking for in the object
   * @returns {*} the value of the found key
   */
  function searchForKey(object, key) {
    var value;
    Object.keys(object).some(function (k) {
      if (k === key) {
        value = object[k];
        return true;
      }
      if (object[k] && typeof object[k] === 'object') {
        value = searchForKey(object[k], key);
        return value !== undefined;
      }
    });
    return value;
  }
  
  /**
   * Extract the URL from the given recipe schema JSON object
   * @param {Object} data Raw recipe JSON to find the URL of
   * @returns {String} If found, it returns the URL as a string, otherwise null
   */
  function getUrl(data) {
    if (data.url) return data.url;
    if (data['@graph']) {
      for (let i = 0; i < data['@graph'].length; i++) {
        if (data['@graph'][i]['@type'] == 'Article') return data['@graph'][i]['@id'];
      }
    };
    return null;
  }
  
  /**
   * Similar to getUrl(), this function extracts the organizations name from the
   * schema JSON object. It's not in a standard location so this function helps.
   * @param {Object} data Raw recipe JSON to find the org string of
   * @returns {String} If found, it retuns the name of the org as a string, otherwise null
   */
  function getOrganization(data) {
    if (data.publisher?.name) return data.publisher?.name;
    if (data['@graph']) {
      for (let i = 0; i < data['@graph'].length; i++) {
        if (data['@graph'][i]['@type'] == 'Organization') {
          return data['@graph'][i].name;
        }
      }
    };
    return null;
  }
  
  /**
   * Converts ISO 8061 time strings to regular english time strings.
   * Not perfect but it works for this lab
   * @param {String} time time string to format
   * @return {String} formatted time string
   */
  function convertTime(time) {
    let timeStr = '';
  
    // Remove the 'PT'
    time = time.slice(2);
  
    let timeArr = time.split('');
    if (time.includes('H')) {
      for (let i = 0; i < timeArr.length; i++) {
        if (timeArr[i] == 'H') return `${timeStr} hr`;
        timeStr += timeArr[i];
      }
    } else {
      for (let i = 0; i < timeArr.length; i++) {
        if (timeArr[i] == 'M') return `${timeStr} min`;
        timeStr += timeArr[i];
      }
    }
  
    return '';
  }
  
  /**
   * Takes in a list of ingredients raw from imported data and returns a neatly
   * formatted comma separated list.
   * @param {Array} ingredientArr The raw unprocessed array of ingredients from the
   *                              imported data
   * @return {String} the string comma separate list of ingredients from the array
   */
  function createIngredientList(ingredientArr) {
    let finalIngredientList = '';
  
    /**
     * Removes the quantity and measurement from an ingredient string.
     * This isn't perfect, it makes the assumption that there will always be a quantity
     * (sometimes there isn't, so this would fail on something like '2 apples' or 'Some olive oil').
     * For the purposes of this lab you don't have to worry about those cases.
     * @param {String} ingredient the raw ingredient string you'd like to process
     * @return {String} the ingredient without the measurement & quantity 
     * (e.g. '1 cup flour' returns 'flour')
     */
    function _removeQtyAndMeasurement(ingredient) {
      return ingredient.split(' ').splice(2).join(' ');
    }
  
    ingredientArr.forEach(ingredient => {
      ingredient = _removeQtyAndMeasurement(ingredient);
      finalIngredientList += `${ingredient}, `;
    });
  
    // The .slice(0,-2) here gets ride of the extra ', ' added to the last ingredient
    return finalIngredientList.slice(0, -2);
  }
  
  // Define the Class so you can use it as a custom element.
  // This is critical, leave this here and don't touch it
  customElements.define('recipe-card', RecipeCard);