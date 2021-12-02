// should recieve a website url to be inputed
// import {extraction, forceExtraction} from '../source/personalsave.js'; in main
 //to try it out in main
 const APIKey = '85859c45fa7949ec8b915c61690f2ce1';
 //var x = extraction('
 //https://foodista.com/recipe/ZHK4KPB6/chocolate-crinkle-cookies
 //); 
 
 const localStorage = window.localStorage;
 const addBar = document.querySelector('.add-container');
 const inputHTML = document.querySelector('.add-bar');
 addBar.querySelector('button').addEventListener('click', addRecipe);
 //console.log(addBar.querySelector(".add-button"));
 
 
 //window.addEventListener('DOMContentLoaded', init);
 
  async function extraction (input) {
   let data = {};
   console.log('using');
   const format = {
     method: 'GET',
     url: 'https://api.spoonacular.com/recipes/extract',
     params: {
       url: input,
       forceExtraction: false,
       analyze: false,
       includeNutrition: false,
       includeTaste: false,
       apiKey: APIKey
     }
   };
   await axios.request(format).then(function (response) {
     data = response.data;
     //console.log(data);
   }).catch(function (error) {
     data = forceExtraction(input);
     //console.log(data);
     console.log(error);
   });
   return data;
 
 }
  async function forceExtraction (input) {
   let data = {};
   console.log('using');
   const format = {
     method: 'GET',
     url: 'https://api.spoonacular.com/recipes/extract',
     params: {
       url: input,
       forceExtraction: true,
       analyze: false,
       includeNutrition: false,
       includeTaste: false,
       apiKey: APIKey
     }
   };
   await axios.request(format).then(function (response) {
     data = response.data;
     console.log(JSON.stringify(data));
     return data;
   }).catch(function (error) {
     //console.log(data);
     console.log(error);
   });
 }
 
 async function addRecipe()
 {
   const inputData = inputHTML.value;

   //console.log(inputData);
   let recipetoHash = await extraction(inputData);
   if (typeof recipetoHash == 'undefined'){
     alert("Not a valid url");
     return;
   }
   let recipeData = JSON.stringify(recipetoHash);
   const main = document.querySelector("main");
   const element = document.createElement('recipe-card');
   let validID  = Math.random() *1000;
   //console.log(recipeData.title);
   //update local storage
   localStorage.setItem(validID, recipeData);
    const hashMap = new Map(JSON.parse(localStorage['0']));
  //  console.log(hashMap);
   const favMap = new Map(JSON.parse(localStorage['2']));
   const DelMap = new Map(JSON.parse(localStorage['3']));
   hashMap.set(recipetoHash.title, validID);
   favMap.set(validID, false);
   DelMap.set(validID, false);
   localStorage.setItem(0, JSON.stringify(Array.from(hashMap.entries())));
   localStorage.setItem(2, JSON.stringify(Array.from(favMap.entries())));
   localStorage.setItem(3, JSON.stringify(Array.from(DelMap.entries())));
   element.data = recipeData;
   element.id = validID;
     // hides the recipe forever if it is considered deleted in localStorage (uncomment when ready to use)
   //const deletedMap = new Map(JSON.parse(localStorage['3']));
     if (DelMap.get(element.id) === true) {
       element.classList.add('deleted');
     }
     main.appendChild(element);
     element.addEventListener('click', (e) => {
       window.location.href = '../recipe_expand/recipe_expand.html' + '#' + element.id;
     });
 
 
 
 }
 
function checkckDu()
{
  const hashes = JSON.parse(localStorage['0']);
  // get favmap
  const favmap = new Map(JSON.parse(localStorage['2']));
  // get array of ids
  const elementIdArr = hashes.map(h => h[1]);

  elementIdArr.forEach(id => {
    ///
    if (favmap.get(id) === true) {
      const element = document.createElement('recipe-card');
      element.data = localStorage[`${id}`];
      element.id = id;
      // hides the recipe forever if it is considered deleted in localStorage (uncomment when ready to use)
      const deletedMap = new Map(JSON.parse(localStorage['3']));
      if (deletedMap.get(id) === true) {
        element.classList.add('deleted');
      }
      main.appendChild(element);
      element.addEventListener('click', (e) => {
        window.location.href = '../recipe_expand/recipe_expand.html' + '#' + element.id;
      });
    }
  });

}