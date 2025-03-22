const btn = document.getElementById('submit');
const roundNo = document.getElementById('round');
const score1Element = document.getElementById('score1');
const score2Element = document.getElementById('score2');
const player1Dice = document.getElementById('player1-dice');
const player2Dice = document.getElementById('player2-dice');
const endButton = document.getElementById('end-game');

let round = 1;
let player1Score = 0;
let player2Score = 0;
let turnDecider = 0;

function rollDice() {
    if (round > 5) return; 

    const roll = Math.floor(Math.random() * 6) + 1;
    let playerCard, playerDice;

    player1Dice.innerHTML = '';
    player2Dice.innerHTML = '';

    if (turnDecider % 2 === 0) {
        playerCard = document.getElementById('player1');
        playerDice = player1Dice;
        playerCard.classList.add('active');
        player1Score += roll;
        score1Element.textContent = player1Score;
    } else {
        playerCard = document.getElementById('player2');
        playerDice = player2Dice;
        playerCard.classList.add('active');
        player2Score += roll;
        score2Element.textContent = player2Score;
    }

    const diceImage = document.createElement('img');
    diceImage.src = `images/dice${roll}.png`;
    diceImage.alt = `Roll: ${roll}`;
    playerDice.appendChild(diceImage);

    setTimeout(() => {
        playerCard.classList.remove('active');
    }, 500);

    turnDecider++;

    if (turnDecider % 2 === 0) {
        if (round >= 5) {
            endGame();
            return;
        }
        round++;
    }

    roundNo.innerHTML = `<h2>Round: ${round}</h2>`;
}

function endGame() {
    const winner = player1Score > player2Score ? 'Player 1' : (player2Score > player1Score ? 'Player 2' : 'No one, it\'s a tie!');
    alert(`🎉 Game Over! The winner is ${winner}`);
    endButton.style.display = 'block';
    btn.style.display = 'none';
}

btn.addEventListener('click', rollDice);
endButton.addEventListener('click', () => {
    location.reload();
});
