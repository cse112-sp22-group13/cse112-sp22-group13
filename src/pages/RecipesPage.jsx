import React, { Fragment } from "react";
import MockPhoto from "../media/mock-recipe-photo.jpg";
import "../stylesheets/recipespage.css";

const RecipesPage = () => {
    return (
        <Fragment>
            <div className="container-md">
                <h2 className="mb-4">Recipes</h2>
                <RowOfCards />
                <RowOfCards />
                <RowOfCards />
            </div>
        </Fragment>
    );
};

const RowOfCards = (props) => {
    const mockData = [
        {
            name: "Corn Bread",
            cuisine: "American"
        },
        {
            name: "Spagetti",
            cuisine: "Italian"
        },
        {
            name: "Pho",
            cuisine: "Vietnamese"
        }
    ];

    return (
        <div className="row row-cols-3">
            {mockData.map((recipe) => (
                <div className="col mb-4">
                    <div className="card">
                        <img
                            src={MockPhoto}
                            className="card-img-top"
                            alt="..."
                        />
                        <div className="card-body">
                            <h5 className="card-title">{recipe.name}</h5>
                            <p className="card-text">{recipe.cuisine}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
export default RecipesPage;
