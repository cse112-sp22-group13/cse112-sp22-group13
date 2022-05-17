import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/navBar.css";

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
                    <h1 id="title">Knead It</h1>
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
                    <Link to="/login">
                        <button
                            type="button"
                            className="btn btn-link me-3 px-4 button"
                        >
                            Login
                        </button>
                    </Link>
                    <Link to="/signup">
                        <button
                            type="button"
                            className="btn btn-secondary px-4 button"
                        >
                            Sign Up
                        </button>
                    </Link>
                </div>
            </header>
        </div>
    );
};

export default NavBar;
