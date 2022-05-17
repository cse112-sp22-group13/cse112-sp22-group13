import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import FrontPage from "../pages/FrontPage";
import RecipesPage from "../pages/RecipesPage";
import RecipeDetails from "../pages/RecipeDetails";

const Main = () => {
    return (
        <Fragment>
            <Switch>
                <Route exact path="/" render={FrontPage} />
                <Route exact path="/recipes" render={RecipesPage} />
                <Route exact path="/recipe" render={RecipeDetails} />
            </Switch>
        </Fragment>
    );
};

export default Main;
