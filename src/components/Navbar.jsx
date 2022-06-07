import React, { Fragment, useState, useContext } from "react";
import { Dropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../stylesheets/NavBar.css";
import { store } from "../store/store";
import { logOut } from "../firebase.mjs";

/**
 * Component to render Navbar with login/signup/logout options
 */
const NavBar = () => {
    let navigate = useNavigate();
    const [queryType, setQueryType] = useState("Name");
    const { state, dispatch } = useContext(store);

    /**
     * Log user out by clearing their logged in data from the Context Store
     */
    const logout = () => {
        dispatch({ type: "DELETE_USER" });
        logOut();
    };

    return (
        <div>
            <div className="container">
                <header className="d-flex flex justify-content-between align-items-center py-3 mb-4 border-bottom">
                    <a
                        href="/"
                        //className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
                    >
                        <img
                            id="icon"
                            src={require("../media/NavBar Logo.png")}
                            alt="Logo"
                            width="75"
                            height="75"
                        />
                    </a>

                    <h1 id="title">Knead It</h1>
                    <form className="buttons">
                        <div /*className="col-md-3 text-end"*/>
                            {state.email ? (
                                <Fragment>
                                    <button
                                        type="button"
                                        className="btn btn-link me-3 px-4 button"
                                        onClick={logout}
                                    >
                                        Logout
                                    </button>
                                </Fragment>
                            ) : (
                                <Fragment>
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
                                </Fragment>
                            )}
                        </div>
                    </form>
                </header>
            </div>
        </div>
    );
};

export default NavBar;
