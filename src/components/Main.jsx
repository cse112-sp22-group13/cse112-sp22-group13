import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import FrontPage from "../pages/FrontPage";
import RecipesPage from "../pages/RecipesPage";

const Main = () => {
    return (
        <Fragment>
            <Routes>
                <Route exact path="/" element={<FrontPage />} />
                <Route exact path="/recipes" element={<RecipesPage />} />
            </Routes>
        </Fragment>
    );
};

export default Main;
