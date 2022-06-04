import React, { createContext, useReducer, useEffect } from "react";

const initialState = {};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(
        (state, action) => {
            switch (action.type) {
                case "ADD_USER":
                    return {
                        ...state,
                        email: action.payload.email,
                        uid: action.payload.uid
                    };
                case "DELETE_USER":
                    return {};
                default:
                    return initialState;
            }
        },
        [],
        (initialValue = initialState) =>
            JSON.parse(localStorage.getItem("state")) || initialValue
    );

    // store the state in localStorage so the state persist across page loads
    useEffect(() => {
        localStorage.setItem("state", JSON.stringify(state));
        console.log(localStorage);
    }, [state]);

    return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
