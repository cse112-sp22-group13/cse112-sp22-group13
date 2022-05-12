import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";

// import FrontPage from "../pages/FrontPage";
// import RecipesPage from "../pages/RecipesPage";
import SignUpPage from "../pages/SignUp";
import LogInPage from "../pages/LogIn";

const Main = () => {
  return (
    <Fragment>
      <Routes>
        {" "}
        {/* In react-router-dom v6, "Switch" is replaced by routes "Routes" */}
        {/* <Route exact path="/" element={FrontPage} />
        <Route exact path="/recipes" element={RecipesPage} /> */}
        <Route exact path="/signup" element={<SignUpPage />} />
        <Route exact path="/login" element={<LogInPage />} />
      </Routes>
    </Fragment>
  );
};

export default Main;
