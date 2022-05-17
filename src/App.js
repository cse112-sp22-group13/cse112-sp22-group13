import React from "react";
import { BrowserRouter } from "react-router-dom";

import NavBar from "./components/Navbar";
import Main from "./components/Main";

import "./App.css";

const App = (props) => (
    <BrowserRouter>
        <div>
            <NavBar />
            <Main />
        </div>
    </BrowserRouter>
);

export default App;
