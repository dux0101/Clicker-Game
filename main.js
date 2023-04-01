let score = 0;
let clickValue = 1; // set the value of each click to 1

const button = document.getElementById('click-button');
const scoreDisplay = document.getElementById('score');

button.addEventListener('click', () => {
	score += clickValue; // increase the score by the click value
	scoreDisplay.innerHTML = `Score: ${score}`;
});
