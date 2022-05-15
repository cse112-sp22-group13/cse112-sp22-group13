import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";

import FrontPage from "../pages/FrontPage";

const Main = () => {
  return (
    <Fragment>
      <Routes>
        <Route exact path="/" element={<FrontPage />} />
      </Routes>
    </Fragment>
  );
};

export default Main;
