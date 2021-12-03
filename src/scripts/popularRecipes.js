// will run function every time homepage is clicked on

export function fillPopular() {

  // get popular array of popular id's
  const popularArr = JSON.parse(localStorage['4']);

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
    title.addEventListener('click', (e) => {
      window.location.href = '../recipe_expand/recipe_expand.html' + '#' + popularArr[i];
    });
    img.addEventListener('click', (e) => {
      window.location.href = '../recipe_expand/recipe_expand.html' + '#' + popularArr[i];
    });
  }

}