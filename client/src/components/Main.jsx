import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import FrontPage from "../pages/FrontPage";
import RecipesPage from "../pages/RecipesPage";


const Main = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" render={FrontPage} />
        <Route exact path="/" render={RecipesPage} />
      </Switch>
    </Fragment>
  );
};

export default Main;
