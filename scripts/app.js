/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result gets added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying;

function initGame() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.add('active');



}

initGame();

document.querySelector('.btn-roll').addEventListener('click', function () {

    if (gamePlaying) {
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
            nextPlayer();

        }
    }

});

function nextPlayer() {
    activePlayer = activePlayer === 0 ? 1 : 0;
    roundScore = 0
    document.querySelector('#current-0').textContent = roundScore;
    document.querySelector('#current-1').textContent = roundScore;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {


        //    Add round score to active player total
        scores[activePlayer] += roundScore;
        roundScore = 0

        //    Update UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        //    Check if the player won the game
        if (scores[activePlayer] >= 30) {
            //        Active player wins the game
            document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;

        } else {
            //    Change active player
            nextPlayer();
        }

    }
});

document.querySelector('.btn-new').addEventListener('click', initGame);
