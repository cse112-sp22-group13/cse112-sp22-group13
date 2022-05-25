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
            var recipeInfo = await getRecipeIds(recipeType, recipeData)
                .then(async (ids) => {
                    // get recipes from ids
                    var recipesArray = [];

                    for (var i in ids) {
                        var recipe = await getRecipe(ids[i]);
                        var recipe_json = {
                            name: recipe.title,
                            cuisine: recipe.cuisines[0],
                            img: recipe.image
                        };
                        recipesArray.push(recipe_json);
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
                <RowOfCards data={recipes} />
            </div>
        </Fragment>
    );
};

const RowOfCards = (props) => {

    //const mockData = props.data;

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

    return props.data ? (
        <div className="row row-cols-3">
            {props.data.map((recipe) => (
                <div className="col mb-4">
                    <div className="card">
                        <Link to="/recipe">
                            <img
                                src={recipe.img}
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
    ) : (
        ""
    );
};
export default RecipesPage;
