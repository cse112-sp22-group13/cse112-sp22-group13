import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MockPhoto from "../media/mock-photo.jpg";
import "../stylesheets/frontpage.css";
import timer5 from "../media/timer5.png";
import timer10 from "../media/timer10.png";
import timer15 from "../media/timer15.png";
import timer30 from "../media/timer30.png";
import timer45 from "../media/timer45.png";
import timer60 from "../media/timer60.png";
import timer2hr from "../media/timer2hr.png";

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
    const prepTimeImg = [
        {
            name: "5 min",
            img: timer5
        },
        {
            name: "10 min",
            img: timer10
        },
        {
            name: "15 min",
            img: timer15
        },
        {
            name: "30 min",
            img: timer30
        },
        {
            name: "45 min",
            img: timer45
        },
        {
            name: "1 hr",
            img: timer60
        },
        {
            name: "2 hr",
            img: timer2hr
        },
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
                <HorizontalScrollImg categoryList={prepTimeImg} />
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

const HorizontalScrollImg = (props) => {
    const { categoryList } = props;

    return categoryList.map((category, index) => (
        <div className="col-2 my-col" key={index}>
            <Link to="/recipes">
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

export default FrontPage;
