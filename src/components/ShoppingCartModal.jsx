import React, { Fragment } from "react";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import MockPhoto from "../media/NavBar Logo.png";

const ShoppingCartModal = (props) => {
    const cuisineMockData = [
        {
            name: "Item 1",
            place: "American",
            price: 1
        },
        {
            name: "Item 2",
            place: "French",
            price: 2
        },
        {
            name: "Item 3",
            place: "German",
            price: 3
        },
        {
            name: "Item 4",
            place: "Italian",
            price: 4
        },
        {
            name: "Item 5",
            place: "Jewish",
            price: 5
        },
        {
            name: "Item 6",
            place: "Portugese",
            price: 6
        },
        {
            name: "Item 7",
            place: "Japanese",
            price: 7
        },
        {
            name: "Item 8",
            place: "Vietnamese",
            price: 8
        }
    ];
    const ingredients = [
        "Beef",
        "Pork",
        "Chicken",
        "Tofu",
        "Duck",
        "Egg",
        "Milk",
        "Butter",
        "Fruits"
    ];
    const prepTime = [
        "5 min",
        "10 min",
        "15 min",
        "30 min",
        "45 min",
        "1 hour",
        "2 hour"
    ];

    return (
        <Fragment>
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>Add to Cart</Modal.Title>
                    <button
                        type="button"
                        onClick={props.setStateOfParent}
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </Modal.Header>

                <Modal.Body>
                    <p>
                        {cuisineMockData.map((cuisine) => (
                            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-2 border-bottom">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-4">
                                            <input
                                                type="checkbox"
                                                className="me-3"
                                            />
                                            <img
                                                alt="image"
                                                width="100"
                                                height="100"
                                                src={MockPhoto}
                                                data-holder-rendered="true"
                                            />
                                        </div>

                                        <div className="col-8">
                                            <div className="row mb-5">
                                                <div className="col">
                                                    <div>{cuisine.name}</div>
                                                </div>
                                                <div className="col">
                                                    <div>{cuisine.place}</div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col">
                                                    <button
                                                        type="button"
                                                        className="btn btn-outline-primary me-2"
                                                    >
                                                        Qty
                                                    </button>
                                                </div>
                                                <div className="col">
                                                    <button
                                                        type="button"
                                                        className="btn btn-outline-primary me-2"
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                                <div className="col">
                                                    <button
                                                        type="button"
                                                        className="btn btn-outline-primary me-2"
                                                    >
                                                        Save
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-3 text-end">
                                            Price: 
                                            {cuisine.price}
                                        </div>
                                    </div>
                                </div>
                            </header>
                        ))}
                    </p>
                </Modal.Body>

                <Modal.Footer>
                    Your Zip Code:
                    <input
                        className="form-control"
                        placeholder="example: 92093"
                        type="text"
                    />
                    <Link to="/login">
                        <Button variant="primary">Checkout</Button>
                    </Link>
                </Modal.Footer>
            </Modal.Dialog>
        </Fragment>
    );
};

export default ShoppingCartModal;
