import React, { Fragment, useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { getFavorites, getRecipe } from "../firebase.mjs";
import { initializeDB } from "../spoonacular.mjs";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import "../stylesheets/frontpage.css";
import { cuisineMockData, ingredientsImg, prepTimeImg } from "../constants.js";

initializeDB();

/**
 * Components to render the front page with rows of cusines, ingredients, prep time and favorites
 */
const FrontPage = () => {

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
                    const query = "?type=" + queryType + "&data=" + document.getElementById("searchbar").value;
                    navigate({ 
                        pathname: "/recipes",
                        search: query
                    });
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
        ""
    );
};

export default FrontPage;
