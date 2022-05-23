export async function fetchRecipes() {
    return fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=03722052291e4f84bce1021acd82624f&maxReadyTime=10&addRecipeInformation=True").then((response) => response.json());    
}

export async function searchFetchRecipes(searchBar) {
    console.log(searchBar);
    let searchString = "https://api.spoonacular.com/recipes/complexSearch?apiKey=03722052291e4f84bce1021acd82624f&" + searchBar;
    return fetch(searchString)
        .then((response) => response.json());
}