import React from "react";
import "../stylesheets/navBar.css";
// import {Logo} from "../media/NavBar Logo.svg"
//import { Route, Switch } from "react-router-dom";

//import FrontPage from "../pages/FrontPage";
//import RecipesPage from "../pages/RecipesPage";

const NavBar = () => {
    return (
        <div className="container">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <a
                    href="/"
                    className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
                >
                    <img
                        src={require("../media/NavBar Logo.png")}
                        alt="Logo"
                        width="75"
                        height="75"
                    ></img>
                </a>

                <form
                    id="form_search"
                    name="form_search"
                    method="get"
                    action=""
                    className="form-inline"
                >
                    <a
                        id="title"
                        href="#"
                        className="nav-link px-2 link-secondary"
                    >
                        Knead It
                    </a>
                    <div className="input-group">
                        <input
                            id="searchbar"
                            className="form-control"
                            placeholder="Search..."
                            type="text"
                        />
                        <span className="input-group-btn">
                            <button
                                id="searchbtn"
                                className="btn btn-outline-primary me-2"
                                type="button"
                            >
                                Search
                            </button>
                        </span>
                    </div>
                </form>

                <div className="col-md-3 text-end">
                    <button
                        id="button"
                        type="button"
                        className="btn btn-outline-primary me-2"
                    >
                        Login
                    </button>
                    <button
                        id="button"
                        type="button"
                        className="btn btn-primary"
                    >
                        Sign Up
                    </button>
                </div>
            </header>
        </div>
    );
};

export default NavBar;
