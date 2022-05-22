import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MockPhoto from "../media/mock-photo.jpg";
import { initializeDB } from "../spoonacular.mjs";
import "../stylesheets/frontpage.css";

//initializeDB();

const FrontPage = () => {
    // TODO: replace it with Spoonacular API response?
    const cuisineMockData = [
        {
            name: "African"
        },
        {
            name: "American"
        },
        {
            name: "British"
        },
        {
            name: "Cajun"
        },
        {
            name: "Caribbean"
        },
        {
            name: "Chinese"
        },
        {
            name: "Eastern European"
        },
        {
            name: "European"
        },
        {
            name: "French"
        },
        {
            name: "German"
        },
        {
            name: "Greek"
        },
        {
            name: "Indian"
        },
        {
            name: "Italian"
        },
        {
            name: "Japanese"
        },
        {
            name: "Jewish"
        },
        {
            name: "Korean"
        },
        {
            name: "Latin American"
        },
        {
            name: "Mediterranean"
        },
        {
            name: "Mexican"
        },
        {
            name: "Middle Eastern"
        },
        {
            name: "Nordic"
        },
        {
            name: "Southern"
        },
        {
            name: "Spanish"
        },
        {
            name: "Thai"
        },
        {
            name: "Vietnamese"
        }
    ];

    const ingredients = [
        "Beef",
        "Pork",
        "Chicken",
        "Tofu",
        "Duck",
        "Egg",
        "Milk",
        "Butter",
        "Fruits"
    ];
    const prepTime = [
        "5 min",
        "10 min",
        "15 min",
        "30 min",
        "45 min",
        "1 hour",
        "2 hour"
    ];

    return (
        <Fragment>
            <h4>CUISINE</h4>
            <div className="container-fluid">
                <div className="scrolling-wrapper row flex-row flex-nowrap py-2">
                    {cuisineMockData.map((cuisine, index) => (
                        <div className="col-2 my-col" key={index}>
                            <Link to={{
                                pathname: "/recipes",
                                search: "?type=cuisine&data=" + cuisine.name }}>
                                <img
                                    alt="100x100"
                                    src={MockPhoto}
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
                <HorizontalScroll categoryList={ingredients} type="ingredient"/>
            </div>
            <h4>PREP TIME</h4>
            <div className="scrolling-wrapper row flex-row flex-nowrap py-2">
                <HorizontalScroll categoryList={prepTime} type="time" />
            </div>
        </Fragment>
    );
};

const HorizontalScroll = (props) => {
    const { categoryList } = props;

    return categoryList.map((category, index) => (
        <div className="col-2 my-col" key={index}>
            <Link to= {{
                pathname: "/recipes",
                search: "?type=" + props.type + "&data=" + category}}>
                <img
                    alt="100x100"
                    src={MockPhoto}
                    data-holder-rendered="true"
                />
                <p className="pt-2">{category}</p>
            </Link>
        </div>
    ));
};

export default FrontPage;
