const states = [
  { label: "rock", image: "../assets/raised-fist.png" },
  { label: "paper", image: "../assets/raised-hand.png" },
  { label: "scissors", image: "../assets/victory-hand.png" },
];

let currentState = 0;

let userChoice = null;
let oponentChoice = null;

const optionsContainer = document.querySelector(".options");
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

