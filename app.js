// import functions and grab DOM elements
const shedButton = document.getElementById('shed-button');
const treeButton = document.getElementById('tree-button');
const boulderButton = document.getElementById('boulder-button');

const treeContainer = document.getElementById('tree-container');
const boulderContainer = document.getElementById('boulder-container');
const shedContainer = document.getElementById('shed-container');
const containers = [shedContainer, treeContainer, boulderContainer];

const totalEl = document.getElementById('total');
const lossesEl = document.getElementById('losses');
const winsEl = document.getElementById('wins');

// initialize state
const hidingPlaces = ['tree', 'shed', 'boulder'];

let correctGuesses = 0;
let totalGuesses = 0;

shedButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'shed');
});

treeButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'tree');
});

boulderButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'boulder');
});

function handleGuess(correctSpot, userGuess) {
    // reset the styles
    containers.map((container) => container.classList.remove('face'));

    // then increment the guesses
    totalGuesses ++;

    // then grab the appropriate container element for the correct guess from the DOM
    // then add the face class to that element so that the face shows up

    containers.map((container) => {
        if (container.id === `${correctSpot}-container`) {
            container.classList.toggle('face');
        }
    });
    
    // then if the user guess is correct, increment the correct guesses
    // update the DOM to show this change to the user (including the losses, not tracked directly in state)

    if (userGuess === correctSpot) {
        correctGuesses ++;
        winsEl.textContent = `${correctGuesses}`;
    } else {
        lossesEl.textContent = `${totalGuesses - correctGuesses}`;
    }
    totalEl.textContent = `${totalGuesses}`;


}
