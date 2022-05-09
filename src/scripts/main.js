/**
 * MAIN.JS FILE
 * Location of init function where backend fetches the recipes from the API
 * and stores the json files into local storage. Local storage will contain
 * a hashmap that maps a recipe title to a key, and the key will map to the
 * respective json file. Functions searchTitle, searchForKey, and
 * getRecipesContainingKeyword will fetch recipes from search bar input.
 * Lastly, backend functionallity allows frontend to populate the cards and
 * single recipe pages.
 */

// import { ComplexSearch } from './apiComplexSearch.js';
// import { GenericFetch } from './genericFetch.js';
import { fillPopular } from "./popularRecipes.js";
//import { initializeApp } from "firebase/app";
//import { getFirestore, doc, setDoc } from "firebase/firestore"; 

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAEWF3Hxz9GquMTz_huVUes7q-zXbzAVJE",
    authDomain: "kneadit-b63a8.firebaseapp.com",
    projectId: "kneadit-b63a8",
    storageBucket: "kneadit-b63a8.appspot.com",
    messagingSenderId: "492712284341",
    appId: "1:492712284341:web:61a4697a986914abbb6efc",
    measurementId: "G-59HFYTH3KC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Backend devs will switch up using their own spoonacular key for fetching
// const API_KEY = '85859c45fa7949ec8b915c61690f2ce1';
// LOCAL STORAGE
const localStorage = window.localStorage;
// SANAT
const objSanat = {
    analyzedInstructions: [{ name: "", steps: [{ equipment: [], ingredients: [], number: 1, step: "" }] }],
    servings: "\u221E",
    title: "Sanat",
    summary: "Sanat is 1 part hot cocoa by the fire, 2 parts earthy love, 3 parts long embrace after a hard day, 4 parts pile of puppies, a pinch of your cheek by grandma, and a dash of \"go get em tiger\". You will not regret this recipe!",
    id: 1,
    image: "https://avatars.githubusercontent.com/u/31770675?v=4",
    extendedIngredients: [{ amount: 1, unit: "", originalName: "naan bread" }, { amount: 1, unit: "", originalName: "spices" }, { amount: 1, unit: "", originalName: "hot dog" }],
    cheap: true,
    dairyFree: false,
    glutenFree: false,
    vegan: false,
    vegetarian: false,
    healthy: false
};
window.addEventListener("DOMContentLoaded", init);

/**
 * INITIALIZE FUNCTION where recipes will be fetches as soon as website is booted up.
 * Will send out a request to api to fetch 0-100 recipes and then populate local storage
 * to hold all recipe id's as keys and their json files as the values. Will also
 * create a hashmap to map titles to id's, favmap and del map to map id's to booleans,
 * a popular array to hold top rated recipes for homepage view, and lastly a urlmap
 * that that holds url as key and id as a value to keep track of duplicated added recipes.
 */
async function init () {
    // initializeServiceWorker(); will eventually implement; or not
    if (localStorage.length === 0) {
        const thing = { data: {} }; // structured like this so it is polymorphic with old fetch
        await fetch("../why.txt", {
            method: "GET",
            headers: {
                "Content-Type": "text/plain",
                "Accept-Encoding": "gzip"
            }
        })
            .then(response => response.text())
            .then(text => { thing.data = JSON.parse(text); });
        // OLD FETCH
        /* const initialSearch = {
      method: 'GET',
      url: 'https://api.spoonacular.com/recipes/complexSearch',
      params: {
        query: ' ', // The (natural language) recipe search query.
        offset: 0, // The number of results to skip (between 0 and 900).
        number: 100, // The number of expected results (between 1 and 100).
        apiKey: API_KEY
      }
    };

    const search = new ComplexSearch(initialSearch);
    await ComplexSearch.fComplexSearch(search);
    // console.log(search.data);

    // grabbing recipes with id's
    let idString = ''; */
        // making hash table that maps titles (key) to recipe id's (values)
        const hashmap = new Map();
        /* for (const elem of search.data.results) {
      hashmap.set(elem.title, elem.id);
      idString = idString + elem.id + ',';
    } */

        // console.log(JSON.stringify(Array.from(hashmap.entries())));
        // console.log(search.data.results);

        // OLD FETCH
        /*
    const bulkOptions = {
      method: 'GET',
      url: 'https://api.spoonacular.com/recipes/informationBulk',
      params: {
        ids: idString,
        includeNutrition: false,
        apiKey: API_KEY
      }
    };
    const thing = new GenericFetch(bulkOptions);
    await GenericFetch.fGenericFetch(thing);
    */
        for (const elem of thing.data) {
            hashmap.set(elem.title, elem.id);
        }

        // put in sanat last
        hashmap.set(objSanat.title, 1);

        // FILLING LOCAL STORAGE
        // create a popular array to place into local storage
        const popularArr = [];
        // first set a place in local storage that will hold the hash table itself at key 0
        localStorage.setItem(0, JSON.stringify(Array.from(hashmap.entries())));
        localStorage.setItem(1, JSON.stringify(objSanat));

        // TIME TO STORE JSONS INTO LOCAL STORAGE :)
        for (const elem of thing.data) {
            // check if elem contains image attribute, because if it doesn't, will throw a 404 error
            // when creating a recipe card
            if (elem.image === undefined) {
                // console.log(elem.image);
                console.log("we found a json that doesnt contain an image attribute, so adding in our logo :)");
                elem.image = "../home/img/bread_logo.jpg";
                console.log(elem);
                // console.log(elem.image);
            }

            // yeet that baby into local storage :)
            localStorage.setItem(elem.id, JSON.stringify(elem));

            // fill popularArr
            if (elem.spoonacularScore >= 30) {
                popularArr.push(elem.id);
            }

            // add element to firestore DB
            await setDoc(doc(db, "recipes", elem.id), {
                value: "test123"
            });
        }
        // console.log('we are here');

        // MAKING FAVORITES HASHMAP THAT WILL BE LOCATED AT #2 IN LOCAL STORAGE
        const favmap = new Map();
        // MAKING DELETES HASHMAP THAT WILL BE LOCATED AT #3 IN LOCAL STORAGE
        const deletedMap = new Map();
        // URL map to keep track of duplicate inputs for addRecipe
        const urlMap = new Map();

        // get hash table
        const hashes = JSON.parse(localStorage["0"]);

        hashes.forEach(h => { favmap.set(h[1], false); deletedMap.set(h[1], false); });

        // urlMap.set('2046', 'none');
        // store the fav map into local
        localStorage.setItem(2, JSON.stringify(Array.from(favmap.entries())));
        // store the del map into local
        localStorage.setItem(3, JSON.stringify(Array.from(deletedMap.entries())));
        // store popular array
        localStorage.setItem(4, JSON.stringify(popularArr));
        // store URL map to check duplicated issue in add
        localStorage.setItem(5, JSON.stringify(Array.from(urlMap.entries())));

        console.log("local storage has ", localStorage.length, " elements, which is 5 hashmaps, Sanats card, and ", localStorage.length - 6, "recipes");
        alert("Local storage populated. You may now naviage freely.");
    }

    // fill popular recipes
    fillPopular();

    // Bind the enter key on main
    bindEnterOnMain();
}

function bindEnterOnMain () {
    document.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            const element = document.activeElement;
            if (element.className === "search-bar") {
                window.location.href = "../recipe_list/recipe_list.html";
            }
        }
    });
}
