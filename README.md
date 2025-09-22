# Rock, Paper, Scissors Game ✊✋✌️

A classic Rock, Paper, Scissors game built with **vanilla HTML, CSS, and JavaScript**. This project focuses on DOM manipulation, event handling, and CSS animations to create a fun and interactive browser game experience.

## ✨ What is This?

This project is a web-based implementation of the timeless game Rock, Paper, Scissors, where the user plays against a computer opponent. It was built from the ground up using only core web technologies—no frameworks or libraries.

The goal was to create a polished and engaging game experience, demonstrating strong foundational skills in front-end development. All logic, from the game's state management to the UI updates and animations, is handled with pure JavaScript and CSS.

### Core Features

* **Classic Gameplay:** Choose between rock, paper, or scissors and compete against a computer opponent with a randomized choice.
* **Animated UI:** The game features a "Rock, Paper, Scissors!" countdown before each round, complete with shaking hand animations to build anticipation.
* **Dynamic Updates:** The game board, player choices, and scores are all updated in real-time using direct DOM manipulation.
* **Score Tracking:** A persistent score is kept for both the player and the computer opponent, updating after each round.
* **Clear Visual Feedback:** The losing hand is visually greyed out, providing immediate feedback on the outcome of each round.

---

## 🔧 Tech Stack & Architecture

This project was built with a "back-to-basics" approach, using only the fundamental technologies of the web.

* **Core Technologies:**
    * **HTML5**
    * **CSS3** (including Flexbox, Grid, Custom Properties, and Keyframe Animations)
    * **Vanilla JavaScript (ES6+)**

### Architectural Highlights

1.  **Pure DOM Manipulation (`index.js`)**
    The application is built without any frameworks. All UI elements are either pre-defined in the HTML or created dynamically with JavaScript. The game logic directly manipulates the DOM to update text, change background images, and add/remove CSS classes to control the visual state of the game.

2.  **Event-Driven Game Flow**
    The entire game loop is controlled by user events and timed functions. An `onclick` event on a choice button triggers the `startGame()` function. This function then uses a combination of `setInterval` and `setTimeout` to manage the countdown animation sequence, reveal the choices, determine the winner, and reset the board for the next round.

3.  **CSS for Styling and Animation**
    All styling and animations are handled with a single CSS file.
    * The "shaking" hand effect during the countdown is a CSS keyframe animation.
    * The visual distinction for the loser's hand is achieved by adding a `.loser` class, which applies a grayscale filter.
    * The layout is fully responsive, built with modern CSS properties like Flexbox and Grid.

---

## 🏃‍♂️ How to Run

This is a static website built with vanilla HTML, CSS, and JavaScript.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/rock-paper-scissors.git
    cd rock-paper-scissors
    ```

2.  **Open `index.html`:**
    * You can open the `index.html` file directly in your web browser.
    * For the best experience, it's recommended to use a simple live server. If you have VS Code, the "Live Server" extension is a great option.
