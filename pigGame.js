const main = document.querySelector('main');
const player = document.querySelector('.player');
const p0 = document.querySelector('.player0');
const p1 = document.querySelector('.player1');
const dice = document.querySelector('.dice');
const b = document.querySelector('.button');
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');

const sc = [0, 0];
let curScore = 0;
let activePlayer = 0;
let isPlay = true;

const switchPlayer = function () {
  document.getElementById(`Current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  curScore = 0;
  p0.classList.toggle('player--active');
  p1.classList.toggle('player--active');
};

document.querySelector('.rollDice').addEventListener('click', function () {
  if (isPlay) {
    let random = Math.trunc(Math.random() * 6) + 1;
    dice.src = `dice-${random}.png`;
    dice.classList.remove('hidden');
    document.querySelector('.rolldice').style.top = '2rem';
    document.querySelector('.hold').style.top = '-1rem';
    document.querySelector('.newGame').style.bottom = '-2rem';
    if (random !== 1) {
      curScore += random;
      document.getElementById(`Current--${activePlayer}`).textContent =
        curScore;
    } else {
      switchPlayer();
    }
  }
});

document.querySelector('.newGame').addEventListener('click', function () {
  isPlay = true;
  score0.textContent = 0;
  score1.textContent = 0;
  dice.classList.add('hidden');
  document.querySelector(`.player${activePlayer}`).classList.remove('winner');
  document
    .querySelector(`.player${activePlayer}`)
    .classList.add('player--active');
  document.getElementById(`Current--${activePlayer}`).textContent = 0;
});

document.querySelector('.hold').addEventListener('click', function () {
  if (isPlay) {
    sc[activePlayer] += curScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      sc[activePlayer];

    if (sc[activePlayer] >= 10) {
      isPlay = false;
      document.querySelector(`.player${activePlayer}`).classList.add('winner');
      document
        .querySelector(`.player${activePlayer}`)
        .classList.remove('player--active');
    } else switchPlayer();
  }
});
//document.querySelector('dice').src = 'dice[random]';
