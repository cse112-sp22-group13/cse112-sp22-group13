import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import FrontPage from "../pages/FrontPage.jsx";
import RecipesPage from "../pages/RecipesPage.jsx";
import RecipeDetails from "../pages/RecipeDetails.jsx";
import SignUpPage from "../pages/SignUp.jsx";
import LogInPage from "../pages/LogIn.jsx";

/**
 * Component to set up routes for different pages
 * @returns <Routes>
 */
const Main = () => {
    return (
        <Fragment>
            <Routes>
                <Route exact path="/" element={<FrontPage />} />
                <Route exact path="/recipes" element={<RecipesPage />} />
                <Route exact path="/recipe" element={<RecipeDetails />} />
                <Route exact path="/signup" element={<SignUpPage />} />
                <Route exact path="/login" element={<LogInPage />} />
            </Routes>
        </Fragment>
    );
};

export default Main;
