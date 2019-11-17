/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result gets added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer;
scores = [0, 0];
roundScore = 0;
activePlayer = 0;

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


document.querySelector('.dice').style.display = 'none';


document.querySelector('.btn-roll').addEventListener('click', function () {
    var diceDom = document.querySelector('.dice');
    //    1. Generate random dice number
    var dice = Math.floor(Math.random() * 6) + 1;
    //    2. Display the result
    diceDom.style.display = 'block';
    diceDom.src = 'images/dice-' + dice + '.png';

    //    3.Update round score if not the sentinel value.
    if (dice !== 1) {
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;

        //        scores[activePlayer] += roundScore;
        //        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];


    } else {
        document.querySelector('#current-' + activePlayer).textContent = 0;
        //        Change the active player!
        activePlayer = activePlayer === 0 ? 1 : 0;
        roundScore = 0;
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        diceDom.style.display = 'none';

    }
});

document.querySelector('.btn-hold').addEventListener('click', function () {
    //    Add round score to active player total
    scores[activePlayer] += roundScore;
    roundScore = 0

    //    Update UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    //    Change active player
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
});
