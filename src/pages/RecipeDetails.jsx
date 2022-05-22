import React, { Fragment, useState } from "react";
import ShoppingCartModal from "../components/ShoppingCartModal";
import "../stylesheets/recipedetail.css";

const RecipeDetails = () => {
    const [showModal, setShowModal] = useState(false);

    const RecipeMockData = {
        id: 716429,
        title: "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
        image: "https://spoonacular.com/recipeImages/716429-556x370.jpg",
        imageType: "jpg",
        servings: 2,
        readyInMinutes: 45,
        license: "CC BY-SA 3.0",
        sourceName: "Full Belly Sisters",
        sourceUrl:
            "http://fullbellysisters.blogspot.com/2012/06/pasta-with-garlic-scallions-cauliflower.html",
        spoonacularSourceUrl:
            "https://spoonacular.com/pasta-with-garlic-scallions-cauliflower-breadcrumbs-716429",
        aggregateLikes: 209,
        healthScore: 19.0,
        spoonacularScore: 83.0,
        pricePerServing: 163.15,
        analyzedInstructions: [],
        cheap: false,
        creditsText: "Full Belly Sisters",
        cuisines: [],
        dairyFree: false,
        diets: [],
        gaps: "no",
        glutenFree: false,
        instructions: "",
        ketogenic: false,
        lowFodmap: false,
        occasions: [],
        sustainable: false,
        vegan: false,
        vegetarian: false,
        veryHealthy: false,
        veryPopular: false,
        whole30: false,
        weightWatcherSmartPoints: 17,
        extendedIngredients: [
            {
                aisle: "Milk, Eggs, Other Dairy",
                amount: 1.0,
                consitency: "solid",
                id: 1001,
                image: "butter-sliced.jpg",
                measures: {
                    metric: {
                        amount: 1.0,
                        unitLong: "Tbsp",
                        unitShort: "Tbsp"
                    },
                    us: {
                        amount: 1.0,
                        unitLong: "Tbsp",
                        unitShort: "Tbsp"
                    }
                },
                meta: [],
                name: "butter",
                original: "1 tbsp butter",
                originalName: "butter",
                unit: "tbsp"
            },
            {
                aisle: "Produce",
                amount: 2.0,
                consitency: "solid",
                id: 10011135,
                image: "cauliflower.jpg",
                measures: {
                    metric: {
                        amount: 473.176,
                        unitLong: "milliliters",
                        unitShort: "ml"
                    },
                    us: {
                        amount: 2.0,
                        unitLong: "cups",
                        unitShort: "cups"
                    }
                },
                meta: ["frozen", "thawed", "cut into bite-sized pieces"],
                name: "cauliflower florets",
                original:
                    "about 2 cups frozen cauliflower florets, thawed, cut into bite-sized pieces",
                originalName:
                    "about frozen cauliflower florets, thawed, cut into bite-sized pieces",
                unit: "cups"
            },
            {
                aisle: "Cheese",
                amount: 2.0,
                consitency: "solid",
                id: 1041009,
                image: "cheddar-cheese.png",
                measures: {
                    metric: {
                        amount: 2.0,
                        unitLong: "Tbsps",
                        unitShort: "Tbsps"
                    },
                    us: {
                        amount: 2.0,
                        unitLong: "Tbsps",
                        unitShort: "Tbsps"
                    }
                },
                meta: ["grated", "(I used romano)"],
                name: "cheese",
                original: "2 tbsp grated cheese (I used romano)",
                originalName: "grated cheese (I used romano)",
                unit: "tbsp"
            },
            {
                aisle: "Oil, Vinegar, Salad Dressing",
                amount: 1.0,
                consitency: "liquid",
                id: 1034053,
                image: "olive-oil.jpg",
                measures: {
                    metric: {
                        amount: 1.0,
                        unitLong: "Tbsp",
                        unitShort: "Tbsp"
                    },
                    us: {
                        amount: 1.0,
                        unitLong: "Tbsp",
                        unitShort: "Tbsp"
                    }
                },
                meta: [],
                name: "extra virgin olive oil",
                original: "1-2 tbsp extra virgin olive oil",
                originalName: "extra virgin olive oil",
                unit: "tbsp"
            },
            {
                aisle: "Produce",
                amount: 5.0,
                consitency: "solid",
                id: 11215,
                image: "garlic.jpg",
                measures: {
                    metric: {
                        amount: 5.0,
                        unitLong: "cloves",
                        unitShort: "cloves"
                    },
                    us: {
                        amount: 5.0,
                        unitLong: "cloves",
                        unitShort: "cloves"
                    }
                },
                meta: [],
                name: "garlic",
                original: "5-6 cloves garlic",
                originalName: "garlic",
                unit: "cloves"
            },
            {
                aisle: "Pasta and Rice",
                amount: 6.0,
                consitency: "solid",
                id: 20420,
                image: "fusilli.jpg",
                measures: {
                    metric: {
                        amount: 170.097,
                        unitLong: "grams",
                        unitShort: "g"
                    },
                    us: {
                        amount: 6.0,
                        unitLong: "ounces",
                        unitShort: "oz"
                    }
                },
                meta: ["(I used linguine)"],
                name: "pasta",
                original: "6-8 ounces pasta (I used linguine)",
                originalName: "pasta (I used linguine)",
                unit: "ounces"
            },
            {
                aisle: "Spices and Seasonings",
                amount: 2.0,
                consitency: "solid",
                id: 1032009,
                image: "red-pepper-flakes.jpg",
                measures: {
                    metric: {
                        amount: 2.0,
                        unitLong: "pinches",
                        unitShort: "pinches"
                    },
                    us: {
                        amount: 2.0,
                        unitLong: "pinches",
                        unitShort: "pinches"
                    }
                },
                meta: ["red"],
                name: "red pepper flakes",
                original: "couple of pinches red pepper flakes, optional",
                originalName: "couple of red pepper flakes, optional",
                unit: "pinches"
            },
            {
                aisle: "Spices and Seasonings",
                amount: 2.0,
                consitency: "solid",
                id: 1102047,
                image: "salt-and-pepper.jpg",
                measures: {
                    metric: {
                        amount: 2.0,
                        unitLong: "servings",
                        unitShort: "servings"
                    },
                    us: {
                        amount: 2.0,
                        unitLong: "servings",
                        unitShort: "servings"
                    }
                },
                meta: ["to taste"],
                name: "salt and pepper",
                original: "salt and pepper, to taste",
                originalName: "salt and pepper, to taste",
                unit: "servings"
            },
            {
                aisle: "Produce",
                amount: 3.0,
                consitency: "solid",
                id: 11291,
                image: "spring-onions.jpg",
                measures: {
                    metric: {
                        amount: 3.0,
                        unitLong: "",
                        unitShort: ""
                    },
                    us: {
                        amount: 3.0,
                        unitLong: "",
                        unitShort: ""
                    }
                },
                meta: ["white", "green", "separated", "chopped"],
                name: "scallions",
                original:
                    "3 scallions, chopped, white and green parts separated",
                originalName:
                    "scallions, chopped, white and green parts separated",
                unit: ""
            },
            {
                aisle: "Alcoholic Beverages",
                amount: 2.0,
                consitency: "liquid",
                id: 14106,
                image: "white-wine.jpg",
                measures: {
                    metric: {
                        amount: 2.0,
                        unitLong: "Tbsps",
                        unitShort: "Tbsps"
                    },
                    us: {
                        amount: 2.0,
                        unitLong: "Tbsps",
                        unitShort: "Tbsps"
                    }
                },
                meta: ["white"],
                name: "white wine",
                original: "2-3 tbsp white wine",
                originalName: "white wine",
                unit: "tbsp"
            },
            {
                aisle: "Pasta and Rice",
                amount: 0.25,
                consitency: "solid",
                id: 99025,
                image: "breadcrumbs.jpg",
                measures: {
                    metric: {
                        amount: 59.147,
                        unitLong: "milliliters",
                        unitShort: "ml"
                    },
                    us: {
                        amount: 0.25,
                        unitLong: "cups",
                        unitShort: "cups"
                    }
                },
                meta: ["whole wheat", "(I used panko)"],
                name: "whole wheat bread crumbs",
                original: "1/4 cup whole wheat bread crumbs (I used panko)",
                originalName: "whole wheat bread crumbs (I used panko)",
                unit: "cup"
            }
        ]
    };

    const setStateOfParent = () => {
        setShowModal(false);
    };

    const readIngredients = () => {
        let ingredients = "";
        for (let i = 0; i < RecipeMockData.extendedIngredients.length; i++) {
            ingredients += RecipeMockData.extendedIngredients[i].original;
            ingredients += "\n";
        }
        return ingredients;
    };

    const readInstructions = () => {
        if (RecipeMockData.analyzedInstructions.length == 0) {
            return "There are no instructions currently for this recipe!";
        } else {
            let instructions = "";
            for (let i = 0; i < RecipeMockData.analyzedInstructions; i++) {
                instructions += RecipeMockData.analyzedInstructions[i];
                instructions += "\n";
            }
            return instructions;
        }
    };

    const renderVisibility = () => {
        if (showModal == true) {
            return (
                <ShoppingCartModal
                    setStateOfParent={setStateOfParent}
                ></ShoppingCartModal>
            );
        }
    };

    return (
        <Fragment>
            {console.log(showModal)}
            {showModal && (
                <div className="recipe-page">
                    <div className="recipe-container">{renderVisibility()}</div>
                </div>
            )}

            {!showModal && (
                <div className="recipe-page">
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
                                onClick={() => setShowModal(true)}
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
                        <div className="ingredients-box">
                            <div className="box-title">Ingredients</div>
                            <div className="listed">{readIngredients()}</div>
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
