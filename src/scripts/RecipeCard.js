import { searchForKey } from './searchKey.js';
import { markFav, unFav } from './FavoriteRecipe.js';
import { deleteRecipe } from './deleteRecipe.js';

class RecipeCard extends HTMLElement {
  constructor () {
    super();
    this.attachShadow({ mode: 'open' });
  }

  get data () {
    return this.shadowRoot;
  }

  /**
   * @param {String} data The string representation of our JSON object representing a recipe
   */
  set data (data) {
    // Parse string to JSON object
    const parsed = JSON.parse(data);

    const recipeCard = document.createElement('article');
    recipeCard.classList.add('recipe-card', 'test');

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
    recipeTitle.classList.add('recipeTitle');
    recipeTitle.innerText = searchForKey(parsed, 'title');
    recipeOverview.appendChild(recipeTitle);

    // attach summary to recipe overview
    const recipeSummary = document.createElement('p');
    recipeSummary.classList.add('recipeSummary');
    recipeSummary.innerHTML = searchForKey(parsed, 'summary');
    recipeOverview.appendChild(recipeSummary);

    // const favoriteButton = document.createElement('button');
    const favorite = document.createElement('img');
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

    // favoriteButton.appendChild(favorite);
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
        display: grid;
        column-gap: 1rem;
        grid-template-columns: 200px auto;
        background-color: white;
        /* #909e87; */
        padding: 1%;
        border: white;
        border-top: 3px solid  black;
        border-bottom: 3px solid  black;
    
    }
    
    .recipe-grid-overview {
        text-align: left;
        color: black;
        font-weight: bold;
    }
    
    .recipe-title {
        font-size: x-large;
        padding:0;
        margin-bottom: 10px;
    }
    
    .recipe-summary {
        line-height: 1.4;
        margin-bottom: 10px;
    }

    .recipe-grid-img img {
      width: 100%;
    }
    
    .recipe-tags {
        font-size: medium;
        padding: 0%;
    }
    
    .tag {
        font-size: x-small;
        font-style: oblique;
        list-style-position: inside;
        padding: 0%;
    }
    .deleteBtn {
      font-size: 1rem;
      font-weight: 900;
      color: whitesmoke;
      position: relative;
      border-radius: 10px 10px 10px 10px;
      left: 50px;
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
