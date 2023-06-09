const states = [
  { label: "rock", image: "https://i.ibb.co/jf9KZ0F/raised-fist.png" },
  { label: "paper", image: "https://i.ibb.co/6mD1PXY/raised-hand.png" },
  { label: "scissors", image: "https://i.ibb.co/6BWBCRK/victory-hand.png" },
];

let currentState = 0;

let userChoice = null;
let oponentChoice = null;

let userPoints = 0;
let oponentPoints = 0;

let isUserWinner = null;

const optionsContainer = document.querySelector(".options");
const boardText = document.querySelector("#board-text");
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
      startGame();
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

const startGame = () => {
  [...hands].map(
    (hand) =>
      (hand.style.backgroundImage = `url('https://i.ibb.co/frgrPjb/up-facing-fist.png')`)
  );
  [...hands].map((hand) => hand.classList.remove("loser"));
  [...hands].map((hand) => hand.classList.add("hand--moving"));

  setOponentChoice();
  startCountDown();
};

const revealChoices = () => {
  userHand.style.backgroundImage = `url('${userChoice.image}')`;
  oponentHand.style.backgroundImage = `url('${oponentChoice.image}')`;
};

const revertChanges = () => {
  currentState = 0;
  boardText.innerText = "";

  [...hands].map((hand) => hand.classList.remove("hand--moving"));
  [...options].map((option) => option.classList.remove("option--disabled"));
};

const updateScore = () => {
  if (isUserWinner === null) return;

  isUserWinner ? userPoints++ : oponentPoints++;

  userScore.innerText = userPoints;
  oponentScore.innerText = oponentPoints;
};

const showWinner = () => {
  if (isUserWinner === null) return;
  !isUserWinner
    ? userHand.classList.add("loser")
    : oponentHand.classList.add("loser");
};

const setWinner = () => {
  switch (userChoice.label) {
    case "rock":
      if (oponentChoice.label === "paper") isUserWinner = false;
      else if (oponentChoice.label === "scissors") isUserWinner = true;
      else isUserWinner = null;
      break;

    case "paper":
      if (oponentChoice.label === "rock") isUserWinner = true;
      else if (oponentChoice.label === "scissors") isUserWinner = false;
      else isUserWinner = null;
      break;

    case "scissors":
      if (oponentChoice.label === "paper") isUserWinner = true;
      else if (oponentChoice.label === "rock") isUserWinner = false;
      else isUserWinner = null;
      break;

    default:
      break;
  }

  showWinner();
};

const startCountDown = () => {
  let interval = setInterval(() => {
    if (currentState < 3) {
      boardText.innerText = `${states[currentState].label}!`;
      currentState++;
    }
  }, 500);

  setTimeout(() => {
    clearInterval(interval);
    revealChoices();
    setWinner();
    updateScore();
    revertChanges();
  }, 2000);
};
