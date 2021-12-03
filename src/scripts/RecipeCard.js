import { searchForKey } from './searchKey.js';
import { markFav, unFav } from './FavoriteRecipe.js';
//import { deleteRecipe } from './deleteRecipe.js';

class RecipeCard extends HTMLElement {
  constructor () {
    super();
    this.attachShadow({ mode: 'open' });
  }

  get data () {
    return this.shadowRoot;
  }

  /**
   * Takes in JSON object in string form and parses it to create a recipe card that
   * will be populated in the recipe list page. The card will be clickable that will
   * navigate you to its recipe expand page. Also places a fav heart and delete button for
   * the user to interact with.
   * @param {String} data The string representation of our JSON object representing a recipe
   */
  set data (data) {
    // Parse string to JSON object
    const parsed = JSON.parse(data);
    // console.log(parsed);
    const recipeCard = document.createElement('article');
    recipeCard.classList.add('recipe-card');

    // Attach grid container to root (article aka recipe card)
    const recipeContainer = document.createElement('div');
    recipeContainer.classList.add('recipe-grid-container');
    recipeCard.appendChild(recipeContainer);

    // 1st column = img of recipe; attach to container
    const imgGrid = document.createElement('div');
    imgGrid.classList.add('recipe-grid-img');
    const img1 = document.createElement('img');
    img1.src = parsed.image;
    imgGrid.appendChild(img1);
    recipeContainer.appendChild(imgGrid);

    // 2nd column = recipe ovewview; attach to container
    const recipeOverview = document.createElement('div');
    recipeOverview.classList.add('recipe-grid-overview');
    recipeContainer.appendChild(recipeOverview);

    // attach title to recipe overview
    const recipeTitle = document.createElement('p');
    recipeTitle.classList.add('recipe-title');
    recipeTitle.innerText = searchForKey(parsed, 'title');
    recipeOverview.appendChild(recipeTitle);

    // attach serving to recipe overview
    const recipeServing = document.createElement('p');
    recipeServing.classList.add('recipe-serving');
    recipeServing.innerHTML = 'Sevings: ' + searchForKey(parsed, 'servings');
    recipeOverview.appendChild(recipeServing);

    // attach time to recipe overview
    const recipeTime = document.createElement('p');
    recipeTime.classList.add('recipe-time');
    recipeTime.innerHTML = 'Time: ' + searchForKey(parsed, 'readyInMinutes') + ' minutes';
    recipeOverview.appendChild(recipeTime);

    // attach company to recipe overview
    const recipeOrg = document.createElement('p');
    recipeOrg.classList.add('recipe-org');
    recipeOrg.innerHTML = 'By ' + searchForKey(parsed, 'sourceName');
    recipeOverview.appendChild(recipeOrg);

    // const favoriteButton = document.createElement('button');
    const favorite = document.createElement('img');
    favorite.classList.add('recipe-favorite');
    const favmap = new Map(JSON.parse(localStorage['2']));
    if (favmap.get(parsed.id) === true) {
      favorite.src = '../recipe_list/img/heartFull.png';
      favorite.id = 'favoriteIcon';
      favorite.alt = 'full';
    } else {
      favorite.src = '../recipe_list/img/heartEmpty.png';
      favorite.id = 'favoriteIcon';
      favorite.alt = 'empty';
    }

    // When clicked, edit start and edit respective boolean in favmap
    favorite.addEventListener('click', (e) => {
      e.stopPropagation();
      if (favorite.alt === 'empty') {
        console.log('favorited');
        favorite.src = '../recipe_list/img/heartFull.png';
        favorite.alt = 'full';
        markFav(parsed.id);
      } else {
        console.log('unfavorited');
        favorite.src = '../recipe_list/img/heartEmpty.png';
        favorite.alt = 'empty';
        unFav(parsed.id);
      };
    });

    recipeOverview.appendChild(favorite);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('deleteBtn');
    deleteButton.addEventListener('click', function (e) {
      e.stopPropagation();
      document.getElementById(parsed.id).classList.add('deleted');
      deleteRecipe(parsed.id);
    });
    recipeOverview.appendChild(deleteButton);

    const styleElem = document.createElement('style');
    styleElem.innerHTML = `
    .recipe-card {
      padding-top: 2rem;
    }
    
    .recipe-grid-container {
        display: flex;
        background-color: white;
        padding: 1%;
        border: white;
        border-top: 3px solid  black;
        border-bottom: 3px solid  black;
    }

    .recipe-grid-img {
        float: left;
        width: 50%;
    }

    .recipe-grid-img img {
        height: 100%;
        width: 90%;
        padding: 0;
        margin: 0;
    }

    .recipe-grid-overview {
        float: left;
        width: 50%;
        text-align: left;
        color: black;
        font-size: 2.8vw;
        line-height: 0.7;
    }
    
    .recipe-title {
        font-size: 3.8vw;
        padding:0;
        margin: 0.2rem 0;
        font-weight: 600;
        line-height:1.5;
    }
    
    .recipe-favorite {
        padding: 0.3rem 0 0.3rem 0;
        height: 30px;
        width: 30px;  
    }
    .deleteBtn {
      font-size: 1rem;
      font-weight: 900;
      color: whitesmoke;
      position: relative;
      border-radius: 10px 10px 10px 10px;
      margin-left: 450px;
      padding: 0.5rem 1rem 0.5rem 1rem;
      outline: none;
      cursor: pointer;
      background-color: #FF8303;;
    }
    `;

    this.shadowRoot.append(styleElem, recipeCard);
  }
}

// Associate recipe-card tag with RecipeCard class
customElements.define('recipe-card', RecipeCard);
