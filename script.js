// Declaring the global variable
var totalScore, currentScore, currentPlayer,winnerSelected,dice;

init();


// Initializing the values
function init() {
    totalScore = [0,0];
    currentScore = 0;
    currentPlayer = 1;
    winnerSelected = false;

    document.getElementById('player-1-total-score').textContent = 0;
    document.getElementById('player-2-total-score').textContent = 0;
    document.getElementById('player-1-temp-score').textContent = 0;
    document.getElementById('player-2-temp-score').textContent = 0;
    document.querySelector('.player-1-title').firstElementChild.classList.remove('active');
    document.querySelector('.player-2-title').firstElementChild.classList.remove('active');
    document.querySelector('.player-1-title').firstElementChild.classList.add('active');
    document.querySelector('.player-1-title').firstElementChild.textContent = 'Player-1';
    document.querySelector('.player-2-title').firstElementChild.textContent = 'Player-2';
}


// Listening the roll dice button
document.getElementById('roll-dice').addEventListener('click', function() {
    if (!winnerSelected) {
        dice = Math.floor(Math.random()* 6) + 1;
        document.querySelector('.dice').firstElementChild.src = `images/dice-${dice}.png`;
        if (dice === 1) {
            document.getElementById(`player-${currentPlayer}-temp-score`).textContent = 0;
            changePlayer();
        } else {
            currentScore += dice;
            document.getElementById(`player-${currentPlayer}-temp-score`).textContent = currentScore;
        }
    }
});


// Listening the hold button
document.getElementById('hold').addEventListener('click', function() {
    if (!winnerSelected) {
        totalScore[currentPlayer - 1] += currentScore;
        document.getElementById(`player-${currentPlayer}-total-score`).textContent = totalScore[currentPlayer - 1];
        if (totalScore[currentPlayer - 1] >= 100) {
             document.querySelector(`.player-${currentPlayer}-title`).firstElementChild.textContent = 'Winner';
             winnerSelected = true;
        } else {
            document.getElementById(`player-${currentPlayer}-temp-score`).textContent = 0;
            changePlayer();
        }
    }
});


// Listening the new game button
document.getElementById('new-game').addEventListener('click', init);


// changing the current player and calculating the values
function changePlayer() {
    currentScore = 0;
    currentPlayer === 1 ? currentPlayer = 2: currentPlayer = 1;
    document.querySelector('.player-1-title').firstElementChild.classList.toggle('active');
    document.querySelector('.player-2-title').firstElementChild.classList.toggle('active');
}