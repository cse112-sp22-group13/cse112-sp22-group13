import React, { Fragment } from "react";
import { Link } from "react-router-dom";
// import StyledLink from "../components/StyledLink";
import MockPhoto from "../media/mock-photo.jpg";
import "../stylesheets/frontpage.css";

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
            name: "European"
        },
        {
            name: "French"
        },
        {
            name: "German"
        },
        {
            name: "Greak"
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
            name: "Portugese"
        },
        {
            name: "Mexican"
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
                            <Link to="/recipes">
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
                <HorizontalScroll categoryList={ingredients} />
            </div>
            <h4>PREP TIME</h4>
            <div className="scrolling-wrapper row flex-row flex-nowrap py-2">
                <HorizontalScroll categoryList={prepTime} />
            </div>
        </Fragment>
    );
};

const HorizontalScroll = (props) => {
    const { categoryList } = props;

    return categoryList.map((category, index) => (
        <div className="col-2 my-col" key={index}>
            <Link to="/recipes">
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
