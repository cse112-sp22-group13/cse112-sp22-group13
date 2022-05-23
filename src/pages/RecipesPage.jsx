import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MockPhoto from "../media/mock-recipe-photo.jpg";
import { getRecipe, getRecipeIds } from "../firebase.mjs";
import "../stylesheets/recipespage.css";
import { fetchRecipes, searchFetchRecipes } from "../recipeSearch";

// get query string
const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});
const recipeType = params.type;
const recipeData = params.data; 

// get ids from type and data
var recipeInfo = getRecipeIds(recipeType, recipeData)
    .then(ids => {
        // get recipes from ids
        var recipes = [];

        for (var i in ids) {
            var recipe = getRecipe(ids[i]);
            recipes.push(recipe);
        }

        return recipes;
    }); 

const RecipesPage = () => {
    const [recipes, setRecipes] = useState("");
    useEffect( () => {
        (async()=>{
            var queryText = window.location.href.indexOf("?searchbar=");
            var qType = window.location.href.indexOf("?queryType=");
            var noQuery = window.location.href.indexOf("?quickQuery=");
            let text = "";
            if(queryText == -1 && noQuery == -1){
                text = await fetchRecipes();
            }else{
                if(noQuery == -1){
                    var qText = window.location.href.substring(queryText + 11, qType);
                    var queryType = window.location.href.substring(qType + 15);
                    if(queryType == "Cuisine"){
                        queryType = "cuisine";
                    }else if(queryType == "Ingredients"){
                        queryType = "includeIngredients";
                    }else if(queryType == "Prep"){
                        queryType = "maxPrepTime";
                    }else{
                        queryType = "titleMatch";
                    }
                    text = await searchFetchRecipes(queryType + "=" + qText);
                }else{
                    text = await searchFetchRecipes(noQuery);
                }
            }
            setRecipes(text);
        })();
       
    }, []);
    return (
        <Fragment>
            <div className="container-md">
                <h2 className="mb-4">Recipes</h2>
                <RowOfCards />
                <RowOfCards />
                <RowOfCards />
            </div>
            <div>{console.log(recipes)}</div>
        </Fragment>
    );
};

const RowOfCards = (props) => {
    const mockData = [
        {
            name: "Corn Bread",
            cuisine: "American"
        },
        {
            name: "Spagetti",
            cuisine: "Italian"
        },
        {
            name: "Pho",
            cuisine: "Vietnamese"
        }
    ];

    return (
        <div className="row row-cols-3">
            {mockData.map((recipe) => (
                <div className="col mb-4">
                    <div className="card">
                        <Link to="/recipe">
                            <img
                                src={MockPhoto}
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">{recipe.name}</h5>
                                <p className="card-text">{recipe.cuisine}</p>
                            </div>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};
export default RecipesPage;
