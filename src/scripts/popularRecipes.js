/**
 * FILLPOPULAR will be called right when homepage is clicked on and localstorage is filled.
 * It will access the popular array that main had initialized with the top rate recipes
 * and shuffle it (so that there are different recommendations every page refresh. Then it
 * will choose 3 and places their images and titles for view on homepage. When they are
 * clicked on, will take you to recipe expand page.
 */
export function fillPopular () {
  // get popular array of popular id's
  const popularArr = JSON.parse(localStorage['4']);

  // shuffle array
  for (let i = 0; i < popularArr.length; i++) {
    const j = Math.floor(Math.random() * i);
    const tmp = popularArr[i];
    popularArr[i] = popularArr[j];
    popularArr[j] = tmp;
  }

  // 3 popular recipes:
  console.log(popularArr[0]);
  console.log(popularArr[1]);
  console.log(popularArr[2]);

  const divArr = document.querySelectorAll('.container .row .col-sm');
  for (let i = 0; i < divArr.length; i++) {
    const jsonFile = JSON.parse(localStorage.getItem(popularArr[i]));
    const img = divArr[i].querySelector('img');
    const title = divArr[i].querySelector('.recipe-name');
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
