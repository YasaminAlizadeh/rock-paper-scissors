const states = [
  { label: "rock", image: "../assets/raised-fist.png" },
  { label: "paper", image: "../assets/raised-hand.png" },
  { label: "scissors", image: "../assets/victory-hand.png" },
];

let currentState = 0;

let userChoice = null;
let oponentChoice = null;

let userPoints = 0;
let oponentPoints = 0;

let isUserWinner = null;

const optionsContainer = document.querySelector(".options");
const hands = document.querySelectorAll(".hand");
const userHand = document.querySelector("#user-hand");
const oponentHand = document.querySelector("#oponent-hand");
const userScore = document.querySelector("#user-score");
const oponentScore = document.querySelector("#oponent-score");
let options;

const setOptions = () => {
  states.map((state) => {
    const optionCard = document.createElement("div");
    optionCard.classList.add("option");

    optionCard.id = `option-${state.label}`;
    optionCard.style.backgroundImage = `url('${state.image}')`;

    optionCard.onclick = () => {
      [...options].map((option) => option.classList.add("option--disabled"));

      setUserChoice(state);
    };

    optionsContainer.appendChild(optionCard);
    options = document.querySelectorAll(".option");
  });
};

setOptions();

const setOponentChoice = () => {
  oponentChoice = states[Math.floor(Math.random() * 3)];
};

const setUserChoice = (option) => (userChoice = option);

const revealChoices = () => {
  userHand.style.backgroundImage = `url('${userChoice.image}')`;
  oponentHand.style.backgroundImage = `url('${oponentChoice.image}')`;
};

const updateScore = () => {
  if (isUserWinner === null) return;

  isUserWinner ? userPoints++ : oponentPoints++;

  userScore.innerText = userPoints;
  oponentScore.innerText = oponentPoints;
};

