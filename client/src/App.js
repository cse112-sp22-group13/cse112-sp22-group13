import React from "react";
import { BrowserRouter } from "react-router-dom";

import NavBar from "./components/NavBar";
import Main from "./components/Main";

const App = (props) => (
  <BrowserRouter>
    <NavBar />
    <Main />
  </BrowserRouter>
);

export default App;
