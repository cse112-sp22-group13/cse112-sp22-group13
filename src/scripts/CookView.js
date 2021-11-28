/* eslint-disable spaced-comment */
import { searchForKey, getInstructionSteps } from './searchKey.js';

const elemStyle = `
.title {
  font-family: 'Bebas Neue', cursive;
  text-align: center;
  color: #e3d477;
  padding: 3vh 0 2vh 0;
  font-size: 3.7rem;
}

.layout {
  width: 90%;
  margin: 0 auto;
  max-width: 1100px;
}

.recipe-image {
  max-width: 30%;
  max-height: 30%;
}

.direction {
  margin-top: 2rem;
}

.direction h4 {
  color: black;
}

.direction-block {
  background-color: #e6d2af;
  color: black;
  padding: 4rem 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
}

.navigate {
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 1rem;
}

.navigate button {
  /* reset button */
  background-color: #e6d2af;
  color: black;
  border: none;
  width: 50px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  border-radius: 50%;
}

`;

class CookView extends HTMLElement {
  constructor () {
    super();
    this.attachShadow({ mode: 'open' });
  }

  /**
   *  @return {*} The HTML structure of recipe expand
   */
  get data () {
    return this.shadowRoot;
  }

  /**
   *  @param {String} data The data to turn into JSOn and parse.
   */
  set data (data) {
    const parsed = JSON.parse(data);
    console.log(parsed);

    const styleElem = document.createElement('style');
    styleElem.innerHTML = elemStyle;

    const container = document.createElement('div');

    const title = document.createElement('h3');
    title.innerText = searchForKey(parsed, 'title');

    const instructionsList = getInstructionSteps(parsed);

    const maxStepCount = instructionsList.length;

    //#region  //*=========== Step ===========
    const step = document.createElement('p');
    const startStep = document.createElement('span');
    startStep.innerText = '1';
    startStep.id = 'startStep';
    const maxStep = document.createElement('span');
    maxStep.id = 'maxStep';
    maxStep.innerText = maxStepCount;

    step.innerText = 'Step ';
    step.appendChild(startStep);
    step.innerHTML += '/';
    step.appendChild(maxStep);
    //#endregion  //*======== Step ===========

    //#region  //*=========== Img ===========
    const img = document.createElement('img');
    img.src = parsed.image;
    img.classList.add('recipe-image');
    img.alt = 'Recipe Image';
    //#endregion  //*======== Img ===========

    //#region  //*=========== Direction ===========
    const directionNum = document.createElement('h4');
    directionNum.innerHTML = "Direction <span id='directNum'>1</span>";

    const directionContainer = document.createElement('div');
    directionContainer.classList.add('direction');

    const directionBlock = document.createElement('div');
    directionBlock.classList.add('direction-block');

    const direction = document.createElement('p');
    direction.id = 'direction';
    direction.innerText = instructionsList[0].step;

    directionContainer.appendChild(directionNum);
    directionBlock.appendChild(direction);
    directionContainer.appendChild(directionBlock);
    //#endregion  //*======== Direction ===========

    //#region  //*=========== Navigate ===========
    const navigate = document.createElement('div');
    navigate.classList.add('navigate');

    const buttonLeft = document.createElement('button');
    buttonLeft.innerHTML = `
      <span
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
    `;
    buttonLeft.addEventListener('click', () => {
      const instructionsList = getInstructionSteps(parsed);
      const startStepEl = this.shadowRoot.getElementById('startStep');
      const startStep = parseInt(startStepEl.innerText);
      if (startStep > 1) {
        startStepEl.innerText = startStep - 1;
        const directionNumEl = this.shadowRoot.getElementById('directNum');
        directionNumEl.innerText = startStepEl.innerText;
        const directionEl = this.shadowRoot.getElementById('direction');
        directionEl.innerText = instructionsList[startStep - 2].step;
      }
    });
    const buttonRight = document.createElement('button');
    buttonRight.innerHTML = `
    <span
    ><svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  </span>
    `;
    buttonRight.addEventListener('click', () => {
      const instructionsList = getInstructionSteps(parsed);
      const startStepEl = this.shadowRoot.getElementById('startStep');
      const startStep = parseInt(startStepEl.innerText);
      const maxStep = parseInt(
        this.shadowRoot.getElementById('maxStep').innerText
      );
      if (startStep < maxStep) {
        startStepEl.innerText = startStep + 1;
        const directionNumEl = this.shadowRoot.getElementById('directNum');
        directionNumEl.innerText = startStepEl.innerText;
        const directionEl = this.shadowRoot.getElementById('direction');
        directionEl.innerText = instructionsList[startStep].step;
      }
    });

    navigate.appendChild(buttonLeft);
    navigate.appendChild(buttonRight);
    //#endregion  //*======== Navigate ===========

    container.appendChild(title);
    container.appendChild(step);
    container.appendChild(img);
    container.appendChild(directionContainer);
    container.appendChild(navigate);

    // Append the container to the shadowroot.
    this.shadowRoot.appendChild(styleElem);
    this.shadowRoot.appendChild(container);
  }
}

// Define the custom recipe expand container html element.
customElements.define('cook-view', CookView);
