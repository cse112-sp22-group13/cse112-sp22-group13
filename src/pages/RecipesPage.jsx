import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MockPhoto from "../media/mock-recipe-photo.jpg";
import "../stylesheets/recipespage.css";
import { fetchRecipes, searchFetchRecipes } from "../recipeSearch";

const RecipesPage = () => {
    const [recipes, setRecipes] = useState("");
    useEffect( () => {
        (async()=>{
            var queryText = window.location.href.indexOf("?searchbar=");
            var qType = window.location.href.indexOf("%3FqueryType%3D");
            var noQuery = window.location.href.indexOf("%3FquickQuery%3D");
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
