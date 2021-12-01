// will run function every time homepage is clicked on

export function fillPopular() {

  // get hash table
  const hashes = JSON.parse(localStorage['0']);
  // get array of ids
  const elementIdArr = hashes.map(h => h[1]);
  // popular array
  let popularArr = [];
  //fill poplular array with id's of recipes with spoonacular score >= 50
  for (const id of elementIdArr) {
    const jsonFile = JSON.parse(localStorage.getItem(id));
    if(jsonFile.spoonacularScore >= 30)
    {
        popularArr.push(id);
    }
  }

  // shuffle array
  for(let i = 0; i < popularArr.length; i++){
    const j = Math.floor(Math.random() * i);
    const tmp = popularArr[i];
    popularArr[i] = popularArr[j];
    popularArr[j] = tmp;
  }

  // 3 popular recipes:
  console.log(popularArr[0]);
  console.log(popularArr[1]);
  console.log(popularArr[2]);

  let divArr= document.querySelectorAll('.container .row .col-sm');
  for(let i = 0; i < divArr.length; i++)
  {
    const jsonFile = JSON.parse(localStorage.getItem(popularArr[i]));
    let img = divArr[i].querySelector('img');
    let title = divArr[i].querySelector('.recipe-name');
    img.src = jsonFile.image;
    title.innerText = jsonFile.title;
    img.addEventListener('click', (e) => {
      window.location.href = '../recipe_expand/recipe_expand.html' + '#' + popularArr[i];
    });
  }

}