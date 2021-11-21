// should recieve a website url
// import {extraction, forceExtraction} from '../source/personalsave.js'; in main
// var x = extraction('https://foodista.com/recipe/ZHK4KPB6/chocolate-crinkle-cookies'); to try it out in main
export async function extraction(input){
  var data = {};
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
      apiKey: 'a6e411c0c3e349d29672f54d7ba122e3'
      }
    };
  await axios.request(format).then(function(response){
    data = response.data
    console.log(JSON.stringify(data));
    return data;
  }).catch(function(error) {
    console.log('shiiet');
    console.log(error);
  });
}
 
export async function extraction(input){
  var data = {};
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
      apiKey: 'a6e411c0c3e349d29672f54d7ba122e3'
      }
    };
  await axios.request(format).then(function(response){
    data = response.data
    console.log(JSON.stringify(data));
    return data;
  }).catch(function(error) {
    console.log('shiiet');
    console.log(error);
  });
}
