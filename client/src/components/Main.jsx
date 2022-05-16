import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

//import FrontPage from "../pages/FrontPage";
import RecipesDetails from "../pages/RecipeDetails";

const Main = () => {
  return (
    <Fragment>
      <Switch>
        {/*<Route exact path="/" render={FrontPage} />*/}
        <Route exact path="/recipes" component={RecipesDetails} />
      </Switch>
    </Fragment>
  );
};

export default Main;
