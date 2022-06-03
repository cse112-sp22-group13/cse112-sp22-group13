import React, { Fragment, useState, useEffect } from "react";
import ShoppingCartModal from "../components/ShoppingCartModal";
import "../stylesheets/recipedetail.css";
import { getRecipe } from "../firebase.mjs";
import { useLocation } from "react-router-dom";

const RecipeDetails = () => {
    const [RecipeMockData, setMock] = useState([]);
    const [showModal, setShowModal] = useState("false");

    useEffect( () => {
        const randas = async () => {
            const params = new Proxy(new URLSearchParams(window.location.search), {
                get: (searchParams, prop) => searchParams.get(prop),
            });
            const recipeType = params.type;
            var recipe = await getRecipe(recipeType).then(key=>{
                return key;
            });
            setMock(recipe);
            return recipe;
        };
        randas();
    }, []);
    

    const setStateOfParent = () => {
        setShowModal("false");
    };

    const readIngredients = () => {
        let ingredients = "";
        let counter = 1;
        if (RecipeMockData.extendedIngredients == undefined){
            return "No Ingredients given";
        }
        for (let i = 0; i < RecipeMockData.extendedIngredients.length; i++) {
            ingredients += counter.toString(2);
            ingredients += ". ";
            ingredients += RecipeMockData.extendedIngredients[i].original;
            ingredients += "\n";
            ingredients += "\n";
            counter++;
        }
        return ingredients;
    };

    const readInstructions = () => {
        let instructions = "";
        let counter = 1;
        if (RecipeMockData.analyzedInstructions == undefined || RecipeMockData.analyzedInstructions.length == 0) {
            return "There are no instructions currently for this recipe!";
        } else {
            for (let i = 0; i < RecipeMockData.analyzedInstructions[0].steps.length; i++) {
                instructions += counter.toString(10);
                instructions += ". ";
                instructions += RecipeMockData.analyzedInstructions[0].steps[i].step;
                instructions += "\n";
                instructions += "\n";
                counter++;
            }
            return instructions;
        }
    };

    const renderVisibility = () => {
        if (showModal == "true") {
            return (
                <ShoppingCartModal
                    setStateOfParent={setStateOfParent}
                ></ShoppingCartModal>
            );
        }
    };

    return (
        <Fragment>
            {showModal == "true" && (
                <div className="recipe-page">
                    <div className="recipe-container">{renderVisibility()}</div>
                </div>
            )}
            {showModal == "false" && (
                <div className="recipe-page">
                    {console.log(RecipeMockData)}
                    <div className="recipe-container">
                        <div className="recipe-title">
                            {RecipeMockData.title}
                        </div>
                        <div className="recipe-image">
                            <img
                                src={RecipeMockData.image}
                                alt="new"
                                width="350"
                                height="250"
                            ></img>
                        </div>
                        <div className="button-row">
                            <button
                                type="button"
                                className="btn btn-lg btn-secondary "
                                onClick={() => setShowModal("true")}
                            >
                                Shopping
                            </button>
                            <button
                                type="button"
                                className="btn btn-lg btn-secondary "
                            >
                                Favorite
                            </button>
                        </div>
                        <div className="instructions-box">
                            <div className="box-title">Servings</div>
                            <div className="listed">{RecipeMockData.servings}</div>
                        </div>
                        <div className="instructions-box">
                            <div className="box-title">Instructions</div>
                            <div className="listed">{readInstructions()}</div>
                        </div>
                        {/* <div className="note-box">
                            <Button bTitle="Add a Note"></Button>
                        </div> */}
                    </div>
                </div>
            )}
        </Fragment>
    );
};

export default RecipeDetails;
