import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MockPhoto from "../media/mock-recipe-photo.jpg";
import { getRecipe, getRecipeIds } from "../firebase.mjs";
import "../stylesheets/recipespage.css";
import { fetchRecipes, searchFetchRecipes } from "../recipeSearch";



const RecipesPage = () => {
    const [recipes, setRecipes] = useState([]);
    const [recipetext, setRecipeText] = useState("All Recipes");
    useEffect( () => {
        const fetchData= async () => {
            // get query string
            let recipeText = "All Recipes";
            const params = new Proxy(new URLSearchParams(window.location.search), {
                get: (searchParams, prop) => searchParams.get(prop),
            });
            let recipeType = params.type;
            const recipeData = params.data; 
            if(recipeType == "Cuisine" || recipeType == "cuisines"){
                recipeType = "cuisines";
                recipeText = "Recipes that are " + recipeData;
            }else if(recipeType == "Ingredients" || recipeType == "includeIngredients"){
                recipeType = "includeIngredients";
                recipeText = "Recipes containing " + recipeData;
            }else if(recipeType == "Prep" || recipeType == "maxPrepTime"){
                recipeType = "maxPrepTime";
                recipeText = "Recipes that take " + recipeData + " minutes";
            }else if(recipeType =="titleMatch" || recipeType == "name"){
                recipeType = "name";
                recipeText = "Recipes names with " + recipeData;
            }
            // get ids from type and data
            var recipeInfo = await getRecipeIds(recipeType, recipeData)
                .then(async(ids) => {
                // get recipes from ids
                    var recipez = [];
                    let threerec = [];
                    for (var i in ids) {
                        var recipe = await getRecipe(ids[i]).then(key=>{
                            return key;
                        });
                        threerec.push(recipe);
                        if(threerec.length == 3){
                            recipez.push(threerec);
                            threerec = [];
                        }
                    }

                    return recipez;
                });
            setRecipeText(recipeText);
            setRecipes(recipeInfo);
            return recipeInfo;
        };

        fetchData();
    }, []);
    return (
        <Fragment>
            <div className="container-md">
                <h2 className="mb-4">{recipetext}</h2>
                {recipes.map((three) => (
                    <RowOfCards mockData={three}></RowOfCards>
                ))}
            </div>
        </Fragment>
    );
};

const RowOfCards = (props) => {

    return props.mockData ? (
        <div className="row row-cols-3">
            {props.mockData.map((recipe) => (
                <div className="col mb-4">
                    {console.log(recipe)}
                    <div className="card">
                        <Link to={{
                            pathname: "/recipe",
                            search: "?type=" + recipe.id}}>
                            <img
                                src={recipe.image}
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <div className="card-title-box">
                                    <h5 className="card-title">{recipe.title}</h5>
                                </div>
                                <div className="text-box">
                                    <p className="card-text">{recipe.cuisines[0]}</p>
                                    <p className="card-text">{recipe.readyInMinutes} Minutes</p>
                                </div>
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
