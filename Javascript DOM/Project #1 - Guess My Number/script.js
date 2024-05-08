'use strict';

// defining the random number
let secretNumber = Math.ceil(Math.random() * 20);
// document.querySelector('.number').textContent = secretNumber;

// Victory Song
const victoryAudio = new Audio('victory.mp3');

// Score
let score = 20;
let highscore = 0;

// display
const display = function (className, message) {
  document.querySelector(className).textContent = message;
};

// Adding Event Listener to Input field
document.querySelector('.check').addEventListener('click', function () {
  const guess = Math.trunc(document.querySelector('.guess').value);

  if (!guess) {
    display('.message', 'No Number!');
  } else if (guess === secretNumber) {
    display('.message', '🎉Correct Answer!🎉');
    victoryAudio.play();
    document.querySelector('body').style.backgroundColor = '#306e41';
    document.querySelector('.number').style.width = '30rem';
    display('.number', secretNumber);
    if (score > highscore) {
      highscore = score;
      display('.highscore', highscore);
    }
  } else if (guess !== secretNumber) {
    display(
      '.message',
      guess > secretNumber ? 'Big, Try Again...' : 'Small, Try Again'
    );
    display('.score', score);
  } else {
    display('.message', 'Game Over!');
    display('.score', 0);
    document.querySelector('.number').style.width = '30rem';
    display('.number', secretNumber);
    document.querySelector('body').style.backgroundColor = '#940303';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.ceil(Math.random() * 20);
  victoryAudio.pause();
  victoryAudio.currentTime = 0;
  document.querySelector('.number').value = secretNumber;
  document.querySelector('.guess').value = '';
  display('.message', 'Start Guessing...');
  display('.number', '?');
  display('.score', score);
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
