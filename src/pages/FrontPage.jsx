import React, { Fragment, useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import MockPhoto from "../media/mock-photo.jpg";
import { getFavorites, getRecipe } from "../firebase.mjs";
import { initializeDB } from "../spoonacular.mjs";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import "../stylesheets/frontpage.css";
import timer5 from "../media/timer5.png";
import timer10 from "../media/timer10.png";
import timer15 from "../media/timer15.png";
import timer30 from "../media/timer30.png";
import timer45 from "../media/timer45.png";
import timer60 from "../media/timer60.png";
import timer2hr from "../media/timer2hr.png";
import bread from "../icons/bread.png";
import muffin from "../icons/muffin.png";
import fish from "../icons/fish.png";
import milk from "../icons/milk.png";
import spices from "../icons/spices.png";
import cheese from "../icons/cheese.png";
import steak from "../icons/steak.png";
import chicken from "../icons/chicken.png";
import ethnic from "../icons/ethnic.png";
import banana from "../icons/banana.png";
import carrot from "../icons/carrot.png";
//all country flag icons from https://www.flaticon.com/packs/countrys-flags
import brazil from "../icons/flags/brazil.png";
import china from "../icons/flags/china.png";
import europe from "../icons/flags/european-union.png";
import france from "../icons/flags/france.png";
import germany from "../icons/flags/germany.png";
import india from "../icons/flags/india.png";
import israel from "../icons/flags/israel.png";
import italy from "../icons/flags/italy.png";
import jamaica from "../icons/flags/jamaica.png";
import palestine from "../icons/flags/palestine.png";
import southAfrica from "../icons/flags/south-africa.png";
import southKorea from "../icons/flags/south-korea.png";
import spain from "../icons/flags/spain.png";
import norway from "../icons/flags/norway.png";
import thailand from "../icons/flags/thailand.png";
import ukraine from "../icons/flags/ukraine.png";
import uk from "../icons/flags/united-kingdom.png";
import us from "../icons/flags/united-states.png";
import vietnam from "../icons/flags/vietnam.png";

initializeDB();

/**
 * Components to render the front page with rows of cusines, ingredients, prep time and favorites
 */
const FrontPage = () => {
    const cuisineMockData = [
        {
            name: "African",
            img: southAfrica
        },
        {
            name: "American",
            img: us
        },
        {
            name: "British",
            img: uk
        },
        {
            name: "Cajun",
            img: us
        },
        {
            name: "Caribbean",
            img: jamaica
        },
        {
            name: "Chinese",
            img: china
        },
        {
            name: "Eastern European",
            img: ukraine
        },
        {
            name: "European",
            img: europe
        },
        {
            name: "French",
            img: france
        },
        {
            name: "German",
            img: germany
        },
        {
            name: "Indian",
            img: india
        },
        {
            name: "Italian",
            img: italy
        },
        {
            name: "Jewish",
            img: israel
        },
        {
            name: "Korean",
            img: southKorea
        },
        {
            name: "Latin American",
            img: brazil
        },
        {
            name: "Mediterranean",
            img: palestine
        },
        {
            name: "Nordic",
            img: norway
        },
        {
            name: "Spanish",
            img: spain
        },
        {
            name: "Thai",
            img: thailand
        },
        {
            name: "Vietnamese",
            img: vietnam
        }
    ];

    const ingredientsImg = [
        {
            name: "Bread",
            img: bread
        },
        {
            name: "Baking",
            img: muffin
        },
        {
            name: "Health Foods",
            img: banana
        },
        {
            name: "Seafood",
            img: fish
        },
        {
            name: "Beverages",
            img: milk
        },
        {
            name: "Spices and Seasonings",
            img: spices
        },
        {
            name: "Canned and Jarred",
            img: steak
        },
        {
            name: "Oil, Vinegar, Salad Dressing",
            img: chicken
        },
        {
            name: "Milk, Eggs, Other Dairy",
            img: cheese
        },
        {
            name: "Ethnic Foods",
            img: ethnic
        },
        {
            name: "Produce",
            img: carrot
        }
    ];
    const ingredients = [
        "Bread",
        "Produce",
        "Seafood",
        "Spices and Seasonings",
        "Milk, Eggs, or Other Dairy",
        "Oil, Vinegar, or Salad Dressing",
        "Cereal",
        "Baking Goods",
        "Health Foods",
        "Ethnic Foods",
        "Beverages",
        "Canned and Jarred"
    ];

    const prepTimeImg = [
        {
            name: "Less Than 30 Minutes",
            img: timer30
        },
        {
            name: "30 to 60 Minutes",
            img: timer45
        },
        {
            name: "60 Minutes or More",
            img: timer60
        }
    ];

    const [queryType, setQueryType] = useState("Name");
    const [favorites, setFavorites] = useState([]);

    /**
     * Create a row of Favorited recipe if the user has logged in
     */
    useEffect(() => {
        const randas = async () => {
            var ids = await getFavorites();
            if (ids == null) {
                return;
            }
            var recipez = [];
            let threerec = [];
            for (var i in ids) {
                var recipe = await getRecipe(ids[i]).then(async (key) => {
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
            setFavorites(recipez);
            return recipez;
        };
        const auth = getAuth();
        auth.onAuthStateChanged(function (user) {
            if (user) {
                randas();
            } else {
                return null;
            }
        });
    }, []);
    let navigate = useNavigate();

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
            <h4>CUISINE</h4>
            <div className="container-fluid">
                <div className="scrolling-wrapper row flex-row flex-nowrap py-2">
                    {cuisineMockData.map((cuisine, index) => (
                        <div className="col-2 my-col" key={index}>
                            <Link
                                to={{
                                    pathname: "/recipes",
                                    search:
                                        "?type=cuisines&data=" + cuisine.name
                                }}
                            >
                                <img
                                    alt="100x100"
                                    src={cuisine.img}
                                    data-holder-rendered="true"
                                />
                                <p className="pt-2">{cuisine.name}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <h4>INGREDIENTS</h4>
            <div className="scrolling-wrapper row flex-row flex-nowrap py-2">
                <HorizontalScrollImg
                    categoryList={ingredientsImg}
                    type="ingredients"
                />
            </div>
            <h4>PREP TIME</h4>
            <div className="row flex-row justify-content-evenly py-2">
                <HorizontalScrollImg categoryList={prepTimeImg} type="time" />
            </div>
            <h4>FAVORITES</h4>
            <div>
                {favorites.map((three) => (
                    <RowOfCards data={three}></RowOfCards>
                ))}
            </div>
        </Fragment>
    );
};

/**
 * Component to render horizontal icons for Cuisine, Ingredients, and Prep Time row
 */
const HorizontalScrollImg = (props) => {
    const { categoryList } = props;

    return categoryList.map((category, index) => (
        <div className="col-2 my-col" key={index}>
            <Link
                to={{
                    pathname: "/recipes",
                    search: "?type=" + props.type + "&data=" + category.name
                }}
            >
                <img
                    alt="100x100"
                    src={category.img}
                    data-holder-rendered="true"
                />
                <p className="pt-2">{category.name}</p>
            </Link>
        </div>
    ));
};

/**
 * Component to render recipe cards for the Favorites row
 * @param {} props - favorited recipe data
 */
const RowOfCards = (props) => {
    return props.data ? (
        <div className="row row-cols-3">
            {props.data.map((recipe) => (
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
                                className="card-img-top"
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
        "Loading recipes..."
    );
};

export default FrontPage;
