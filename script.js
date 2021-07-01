'use strict';
//Selecting elements

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');

//initial conditions
// score0El.textContent = 0;
// score1El.textContent = 0;
// diceEl.classList.add('hidden'); //class hidden was added to css file for hidding an element in one click

// const scores = [0, 0];
// let currentScore = 0;
// let activePlayer = 0;
// let playing = true; //we use this to enable/disable functionality see btnHold.addEventListener

let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true; //we use this to enable/disable functionality see btnHold.addEventListener

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;

  diceEl.classList.add('hidden'); //class hidden was added to css file for hidding an element in one click
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  playing = true;
  currentScore = 0;
};

init();

btnRoll.addEventListener('click', function () {
  //1.generating a random number
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    //2.display the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`; //change the src using string
    //3.check for rolled 1: if true, switch to next player
    if (dice !== 1) {
      //add the dice to the current score
      currentScore += dice;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
      //current0.textContent = currentScore;
    } else {
      holdBtnFunc();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //1. add current score to total score for current user
    scores[activePlayer] += currentScore;
    //scores[1] = scores[1] + currentScore
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];
    //2. check if score >= 100 to win
    if (scores[activePlayer] >= 10) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
    } else {
      holdBtnFunc();
    }
  }
});

btnNew.addEventListener('click', init);

const holdBtnFunc = function () {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

const arr1 = [22, 2, 38, 4, 5, 6, 76, 8, 9, 10];

const sumNum = function (arr) {
  const arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      arr2.push(i);
    }
  }
  return arr2;
};
console.log(sumNum(arr1));

const r = prompt('type a number');

const palindromeNumber = function (num) {
  const f = num.length;
  for (let i = 0; i < f / 2; i++) {
    if (num[i] !== num[f - 1 - i]) {
      alert('It is not a palindrome');
    }
  }
  return 'it is palindrome';
};
console.log(palindromeNumber(r));
