import React, { Fragment, useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
    registerWithEmailAndPassword,
    signInWithGoogle
} from "../firebase.mjs";
import { store } from "../store/store";

/**
 * Component that renders the Sign Up form
 */
const SignUpPage = () => {
    const globalState = useContext(store);
    const { dispatch } = globalState;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    /**
     * Sign the user up with email and password via Firebase and save their data in local storage
     * @param {*} e - window's default event
     */
    const handleEmailSubmission = (e) => {
        e.preventDefault();
        registerWithEmailAndPassword(email, password).then(({ email, uid }) =>
            dispatch({ type: "ADD_USER", payload: { email: email, uid: uid } })
        );
    };

    /**
     * Sign the user up through their Google account via Firebase and save their data in local storage
     * @param {*} e - window's default event
     */
    const handleGoogleSubmission = (e) => {
        e.preventDefault();
        signInWithGoogle().then(({ email, uid }) => {
            console.log("Signed", email, uid);
            dispatch({ type: "ADD_USER", payload: { email: email, uid: uid } });
        });
    };

    return (
        <Fragment>
            <div
                className="modal position-static d-block"
                tabIndex="-1"
                role="dialog"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content shadow">
                        <div className="modal-header py-4 border-bottom-0">
                            <h2 className="fw-bold mb-0 mx-auto">Sign up</h2>
                        </div>

                        <div className="modal-body p-5 pt-0">
                            <form onSubmit={handleEmailSubmission}>
                                <div className="form-floating mb-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="floatingInput"
                                        placeholder="name@example.com"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                    <label htmlFor="floatingInput">
                                        Email address
                                    </label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="floatingPassword"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        placeholder="Password"
                                    />
                                    <label htmlFor="floatingPassword">
                                        Password
                                    </label>
                                </div>
                                <button
                                    className="w-100 mb-2 btn btn-lg btn-warning"
                                    type="submit"
                                >
                                    Sign up
                                </button>
                                <div className="text-center">
                                    <small className="text-muted">
                                        By clicking Sign up, you agree to the
                                        terms of use.
                                    </small>
                                </div>

                                <div className="d-flex flex-row align-items-center py-2">
                                    <hr className="w-50" />
                                    <p className="my-auto">OR</p>
                                    <hr className="w-50" />
                                </div>

                                <button
                                    className="w-100 py-2 mb-2 btn btn-danger"
                                    onClick={handleGoogleSubmission}
                                    type="button"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-google mx-2"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                                    </svg>
                                    Sign up with Google
                                </button>
                            </form>
                            <div className="text-end">
                                <small className="text-muted me-2 mt-5">
                                    Already a User?
                                </small>
                                <Link
                                    to="/login"
                                    className="link alert-link switch-link"
                                >
                                    Log In
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default SignUpPage;
