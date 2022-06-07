import React, { Fragment, useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import MockPhoto from "../media/mock-recipe-photo.jpg";
import { getRecipe, getRecipeIds } from "../firebase.mjs";
import "../stylesheets/recipespage.css";
// const myFunctions = require("../firebase.mjs");
//import { fetchRecipes, searchFetchRecipes } from "../recipeSearch";

/**
 * Component that renders a page of Recipes
 */
const RecipesPage = () => {
    const [recipes, setRecipes] = useState([]);
    const [recipetext, setRecipeText] = useState("All Recipes");
    const [queryType, setQueryType] = useState("Name");

    let navigate = useNavigate();

    /**
     * fetch recipes according to user's request from Firebase
     */
    useEffect(() => {
        const fetchData = async () => {
            // get query string
            let recipeText = "All Recipes";
            const params = new Proxy(
                new URLSearchParams(window.location.search),
                {
                    get: (searchParams, prop) => searchParams.get(prop)
                }
            );
            let recipeType = params.type;
            let recipeDatas = params.data.toLowerCase();
            recipeDatas =
                recipeDatas.substring(0, 1).toUpperCase() +
                recipeDatas.substring(1);
            let bool = false;
            let recipeData = "";
            for (let i = 0; i < recipeDatas.length; i++) {
                if (bool) {
                    let indiv = recipeDatas.substring(i, i + 1);
                    recipeData += indiv.toUpperCase();
                    bool = false;
                    if (indiv == " ") {
                        bool = true;
                    }
                } else {
                    let indiv = recipeDatas.substring(i, i + 1);
                    if (indiv == " ") {
                        bool = true;
                    }
                    recipeData += indiv;
                }
            }
            setQueryType(recipeType);

            if (
                recipeType.toLowerCase() == "cuisine" ||
                recipeType == "cuisines"
            ) {
                recipeType = "cuisines";
                recipeText = "Recipes that are " + recipeData;
            } else if (
                recipeType.toLowerCase() == "ingredients" ||
                recipeType == "includeIngredients"
            ) {
                recipeType = "ingredients";
                recipeText =
                    "Recipes containing " + recipeData + " Ingredients";
            } else if (
                recipeType.toLowerCase() == "time" ||
                recipeType == "maxPrepTime"
            ) {
                recipeType = "time";
                recipeText = "Recipes that take " + recipeData;
            } else if (recipeType == "titleMatch" || recipeType == "Name") {
                recipeType = "Name";
                recipeText = "Recipes names with " + recipeData;
            }
            // get ids from type and data
            var recipeInfo = await getRecipeIds(recipeType, recipeData).then(
                async (ids) => {
                    // get recipes from ids
                    var recipez = [];
                    let threerec = [];
                    for (var i in ids) {
                        var recipe = await getRecipe(ids[i]).then((key) => {
                            return key;
                        });
                        threerec.push(recipe);
                        if (threerec.length == 3) {
                            recipez.push(threerec);
                            threerec = [];
                        }
                    }
                    if (threerec.length > 0) {
                        recipez.push(threerec);
                    }
                    return recipez;
                }
            );
            setRecipeText(recipeText);
            setRecipes(recipeInfo);
            return recipeInfo;
        };

        fetchData();
    }, []);
    return (
        <Fragment>
            <form
                id="form_search"
                name="form_search"
                method="get"
                action=""
                className="form-inline"
                onSubmit={(event) => {
                    event.preventDefault();
                    navigate("/recipes");
                    window.location.search +=
                        "?type=" +
                        queryType +
                        "&data=" +
                        document.getElementById("searchbar").value;
                }}
            >
                <div className="input-group" name="divcontainer">
                    <input
                        id="searchbar"
                        name="searchbar"
                        className="form-control"
                        placeholder="Search By..."
                        type="text"
                    />
                    <span className="input-group-btn">
                        <Dropdown>
                            <Dropdown.Toggle
                                className="dropdown"
                                variant="success"
                                id="dropdown-basic"
                            >
                                {queryType}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item
                                    onClick={() => setQueryType("Name")}
                                >
                                    Name
                                </Dropdown.Item>
                                <Dropdown.Item
                                    onClick={() => setQueryType("Cuisine")}
                                >
                                    Cuisine
                                </Dropdown.Item>
                                <Dropdown.Item
                                    onClick={() => setQueryType("Ingredients")}
                                >
                                    Ingredients
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </span>
                </div>
            </form>
            <button
                type="button"
                className="btn btn-lg btn-secondary "
                onClick={() => history.back()}
            >
                Back
            </button>
            <div className="container-md">
                <h2 className="mb-4">{recipetext}</h2>
                {recipes.map((three) => (
                    <RowOfCards mockData={three}></RowOfCards>
                ))}
            </div>
        </Fragment>
    );
};

/**
 * Component to render recipe cards for the Favorites row
 * @param {} props - favorited recipe data
 */
const RowOfCards = (props) => {
    return props.mockData ? (
        <div className="row row-cols-3">
            {props.mockData.map((recipe) => (
                <div className="col mb-4">
                    <div className="card">
                        <Link
                            to={{
                                pathname: "/recipe",
                                search: "?type=" + recipe.id
                            }}
                        >
                            <img
                                src={recipe.image}
                                className="card-img-top mx-auto d-block"
                                alt="..."
                            />
                            <div className="card-body">
                                <div className="card-title-box">
                                    <h5 className="card-title">
                                        {recipe.title}
                                    </h5>
                                </div>
                                <div className="text-box">
                                    <p className="card-text">
                                        {recipe.cuisines[0]}
                                    </p>
                                    <p className="card-text">
                                        {recipe.readyInMinutes} Minutes
                                    </p>
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
