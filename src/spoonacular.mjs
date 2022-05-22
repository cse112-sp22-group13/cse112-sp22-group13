import {getRecipes, updateDB} from "./firebase.mjs";

async function initializeDB() {
    await fetch("https://raw.githubusercontent.com/cse112-sp22-group13/cse112-sp22-group13/feature/firebaseDatabase/src/why.txt", {
        method: "GET",
        headers: {
            "Content-Type": "text/plain",
            "Accept-Encoding": "gzip"
        }
    })
        .then(response => response.text())
        .then(text => JSON.parse(text))
        .then(thing => {
            for (const key in thing) {
                var elem = thing[key];
                updateDB("recipes", JSON.stringify(elem));
            }
        });
}

export {initializeDB};