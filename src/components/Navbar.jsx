import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../stylesheets/NavBar.css";
const NavBar = () => {
    const [queryType, setQueryType] = useState("Name");
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
                    />
                </a>

                <form
                    id="form_search"
                    name="form_search"
                    method="get"
                    action=""
                    className="form-inline"
                    onSubmit= {() =>{
                        document.getElementById("searchbar").value += "?queryType=" + queryType;
                    }}
                >
                    <h1 id="title">Knead It</h1>
                    <div className="input-group" name="divcontainer">
                        <input
                            id="searchbar"
                            name="searchbar"
                            className="form-control"
                            placeholder="Search By..."
                            type="text"
                        />
                        <span className="input-group-btn">
                            <Dropdown>
                                <Dropdown.Toggle className="dropdown" variant="success" id="dropdown-basic">
                                    {queryType}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => setQueryType("Name")}>Name</Dropdown.Item>
                                    <Dropdown.Item onClick={() => setQueryType("Cuisine")}>Cuisine</Dropdown.Item>
                                    <Dropdown.Item onClick={() => setQueryType("Prep")}>Prep Time</Dropdown.Item>
                                    <Dropdown.Item onClick={() => setQueryType("Ingredients")}>Ingredients</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
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
