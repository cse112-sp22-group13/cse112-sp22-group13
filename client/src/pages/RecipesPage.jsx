import React, {Fragment} from "react";
import ScrollToTop from "../components/ScrollToTop";
import MockPhoto from "../media/mock-recipe-photo.jpg";
import "../stylesheets/recipespage.css";

const RecipesPage = () => {

    return (
        <Fragment>
            <ScrollToTop>
                
                <div class="container-md">
                    <h2>Recipes</h2>
                    <RowOfCards />
                    <RowOfCards />
                    <RowOfCards />
                </div>
            </ScrollToTop>
        </Fragment>
    )
}

const RowOfCards = (props) => {
    const mockData = [{
        "name": "Corn Bread",
        "cuisine": "American",
    },
    {
        "name": "Spagetti",
        "cuisine": "Italian",
    },
    {
        "name": "Pho",
        "cuisine": "Vietnamese",
    }];

    return (
        <div class="row row-cols-3">
            {
                mockData.map((recipe) => (
                    <div class="col mb-4">
                        <div class="card">
                            <img src={MockPhoto} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                    <h5 class="card-title" >{recipe.name}</h5>
                                <p class="card-text">{recipe.cuisine}</p>
                            </div>
                        </div>
                    </div>
                )
                )
            }
        </div>
    )
}
export default RecipesPage;
