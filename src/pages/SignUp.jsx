import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const SignUpPage = () => {
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
                            <form className="">
                                <div className="form-floating mb-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="floatingInput"
                                        placeholder="name@example.com"
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
                                <small className="text-muted">
                                    By clicking Sign up, you agree to the terms
                                    of use.
                                </small>

                                <div className="d-flex flex-row align-items-center py-2">
                                    <hr className="w-50" />
                                    <p className="my-auto">OR</p>
                                    <hr className="w-50" />
                                </div>

                                <button
                                    className="w-100 py-2 mb-2 btn btn-danger"
                                    type="submit"
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
                                <button
                                    className="w-100 py-2 mb-2 btn btn-primary rounded-4"
                                    type="submit"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-facebook mx-2"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                    </svg>
                                    Sign up with Facebook
                                </button>
                            </form>
                            <small className="text-muted mx-auto mt-5">
                                Already a User?
                            </small>
                            <Link to="/login" className="link">
                                <button className="w-100 my-2 btn btn-lg btn-info">
                                    Log In
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default SignUpPage;
