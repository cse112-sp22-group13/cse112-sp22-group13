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
    recipeServing.innerHTML = 'Servings: ' + searchForKey(parsed, 'servings');
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


    // Make another div to lock the delete button on the right side of the container 
    // Create the delete button to remove recipes from list 
    const delete_btn = document.createElement('img');
    delete_btn.classList.add("delete-button");
    delete_btn.src = "../recipe_list/img/delete.png";
    // const buttonGrid = document.createElement('div');
    // buttonGrid.classList.add('delete-button');
    // const deleteButton = document.createElement('button');
    // deleteButton.textContent = 'Delete';
    // deleteButton.classList.add('deleteBtn');
    delete_btn.addEventListener('click', function (e) {
      e.stopPropagation();
      document.getElementById(parsed.id).classList.add('deleted');
      deleteRecipe(parsed.id);
    });
    recipeOverview.appendChild(delete_btn);

    // attach title-buffer to buttonGrid to make sure the button is on the bottom
    // and is locked there 
    // const titleBuffer = document.createElement('p');
    // titleBuffer.classList.add('title-buffer');
    // titleBuffer.innerText = '       ' +'\n\n\n\n\n'; 
    // buttonGrid.appendChild(titleBuffer); 
    // PLEASE TALK TO ME WTH IS THIS - HAN


    // buttonGrid.appendChild(deleteButton);
    // recipeContainer.appendChild(buttonGrid);

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

    .delete-button {
      padding: 0.3rem 0 0.3rem 1rem;
      height: 30px;
      width: 30px;  
    }
    `;

    this.shadowRoot.append(styleElem, recipeCard);
  }
}

// Associate recipe-card tag with RecipeCard class
customElements.define('recipe-card', RecipeCard);
