import React, {Fragment} from "react";
import ScrollToTop from "../components/ScrollToTop";
import MockPhoto from "../media/mock-photo.jpg";
import "../stylesheets/frontpage.css";

const FrontPage = () => {

    // TODO: replace it with Spoonacular API response?
    const cuisineMockData = [
    {
        "name": "American",
    },
    {
        "name": "French",
    },
    {
        "name": "German",
    },
    {
        "name": "Italian",
    },
    {
        "name": "Jewish",
    },
    {
        "name": "Portugese",
    },
    {
        "name": "Japanese",
    },
    {
        "name": "Vietnamese",
    },
    ];

    const ingredients = ["Beef", "Pork", "Chicken", "Tofu", "Duck", "Egg", "Milk", "Butter", "Fruits"]
    const prepTime = ["5 min", "10 min", "15 min", "30 min", "45 min", "1 hour", "2 hour"];

    return (
        <Fragment>
            <ScrollToTop>
            <h4>CUISINE</h4>
            <div class="container-fluid">
                <div class="scrolling-wrapper row flex-row flex-nowrap py-2">
                    {
                        cuisineMockData.map((cuisine) => (
                            <div class="col-2 my-col">
                                    <img  alt="100x100" src={MockPhoto}
                                data-holder-rendered="true" />
                                     <p class="pt-2">{cuisine.name}</p>
			                </div>
                        ))
                    }
                </div>
            </div>
            <h4>INGREDIENTS</h4>
            <div class="scrolling-wrapper row flex-row flex-nowrap py-2">
                <HorizontalScroll categoryList={ingredients}/>
            </div>
            <h4>PREP TIME</h4>
            <div class="scrolling-wrapper row flex-row flex-nowrap py-2">
                <HorizontalScroll categoryList={prepTime}/>
            </div>
            </ScrollToTop>
        </Fragment>
    )
}

const HorizontalScroll = (props) => {
    const { categoryList } = props;

    return (
        categoryList.map((category) => (
                <div class="col-2 my-col">
                        <img  alt="100x100" src={MockPhoto}
                    data-holder-rendered="true" />
                         <p class="pt-2">{category}</p>
                </div>
            ))
    )
}


export default FrontPage;