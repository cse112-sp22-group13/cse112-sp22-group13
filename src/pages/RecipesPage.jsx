import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MockPhoto from "../media/mock-recipe-photo.jpg";
import { getRecipe, getRecipeIds } from "../firebase.mjs";
import "../stylesheets/recipespage.css";
import { fetchRecipes, searchFetchRecipes } from "../recipeSearch";

const RecipesPage = () => {
    const [recipes, setRecipes] = useState("");
    useEffect( () => {
        (async()=>{
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
                    var recipesArray = [];

                    for (var i in ids) {
                        var recipe = getRecipe(ids[i]);
                        recipesArray.push(recipe);
                    }

                    return recipesArray;
                }); 
            setRecipes(recipeInfo);
        })();
    }, []);
    return (
        <Fragment>
            <div className="container-md">
                <h2 className="mb-4">Recipes</h2>
                <RowOfCards data= {recipes} />
            </div>
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

    console.log(props.data);

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
