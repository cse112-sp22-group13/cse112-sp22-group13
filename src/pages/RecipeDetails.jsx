import React, { Fragment, useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import ShoppingCartModal from "../components/ShoppingCartModal.jsx";
import "../stylesheets/recipedetail.css";
import {
    getRecipe,
    getComment,
    editComment,
    getFavorites,
    checkFavorite
} from "../firebase.mjs";
import { useLocation } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { getAuth, onAuthStateChanged } from "firebase/auth";

/**
 * Component that renders the Recipe Details
 */
const RecipeDetails = () => {
    const [RecipeMockData, setMock] = useState([]);
    const [showModal, setShowModal] = useState("false");
    const [comment, setComment] = useState("");

    /**
     * get the recipe details and comments from Firebase
     */
    useEffect(() => {
        const randas = async () => {
            const params = new Proxy(
                new URLSearchParams(window.location.search),
                {
                    get: (searchParams, prop) => searchParams.get(prop)
                }
            );
            const recipeType = params.type;

            var recipe = await getRecipe(recipeType).then((key) => {
                return key;
            });
            setMock(recipe);
            return recipe;
        };
        const randas2 = async () => {
            const params = new Proxy(
                new URLSearchParams(window.location.search),
                {
                    get: (searchParams, prop) => searchParams.get(prop)
                }
            );
            const recipeType = params.type;
            console.log(recipeType);
            var comment = await getComment(recipeType).then((key) => {
                console.log(key);
                return key;
            });
            setComment(comment);
            return comment;
        };
        randas();
        const auth = getAuth();
        auth.onAuthStateChanged(function (user) {
            if (user) {
                randas2();
            } else {
                return "";
            }
        });
    }, []);

    /**
     * Set the default state of the modal
     */
    const setStateOfParent = () => {
        setShowModal("false");
    };

    /**
     * format the ingredient string to display on screen
     */
    const readIngredients = () => {
        let ingredients = "";
        let counter = 1;
        if (RecipeMockData.extendedIngredients == undefined) {
            return "No Ingredients given";
        }
        for (let i = 0; i < RecipeMockData.extendedIngredients.length; i++) {
            ingredients += counter.toString(10);
            ingredients += ". ";
            ingredients += RecipeMockData.extendedIngredients[i].original;
            ingredients += "\n";
            ingredients += "\n";
            counter++;
        }
        return ingredients;
    };

    /**
     * Format the instructions to display on screen
     */
    const readInstructions = () => {
        let instructions = "";
        let counter = 1;
        if (
            RecipeMockData.analyzedInstructions == undefined ||
            RecipeMockData.analyzedInstructions.length == 0
        ) {
            return "There are no instructions currently for this recipe!";
        } else {
            for (
                let i = 0;
                i < RecipeMockData.analyzedInstructions[0].steps.length;
                i++
            ) {
                instructions += counter.toString(10);
                instructions += ". ";
                instructions +=
                    RecipeMockData.analyzedInstructions[0].steps[i].step;
                instructions += "\n";
                instructions += "\n";
                counter++;
            }
            return instructions;
        }
    };

    /**
     * Render the shopping modal based on user's interactivity
     */
    const renderVisibility = () => {
        if (showModal == "true") {
            return (
                <ShoppingCartModal
                    setStateOfParent={setStateOfParent}
                ></ShoppingCartModal>
            );
        }
    };

    /**
     * set comment in state
     * @param {} e window's default event
     */
    const handleChange = (e) => {
        setComment(e.target.value);
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
                                onClick={() =>
                                    checkFavorite(RecipeMockData.id.toString())
                                }
                            >
                                Favorite
                            </button>
                        </div>
                        <div className="instructions-box">
                            <div className="box-title">Ingredients</div>
                            <div className="listed">{readIngredients()}</div>
                        </div>
                        <div className="instructions-box">
                            <div className="box-title">Servings</div>
                            <div className="listed">
                                {RecipeMockData.servings}
                            </div>
                        </div>
                        <div className="instructions-box">
                            <div className="box-title">Instructions</div>
                            <div className="listed">{readInstructions()}</div>
                        </div>
                        <div>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicNotes"
                            >
                                <Form.Label>Notes</Form.Label>
                                <Form.Control
                                    className="form"
                                    type="Notes"
                                    placeholder="Enter Notes"
                                    id="notes"
                                    value={comment}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <button
                                type="button"
                                className="btn btn btn-secondary "
                                onClick={async () => {
                                    console.log(
                                        document.getElementById("notes").value
                                    );
                                    editComment(
                                        RecipeMockData.id.toString(), document.getElementById("notes").value
                                    );
                                }}
                            >
                                Add Note
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </Fragment>
    );
};

export default RecipeDetails;
