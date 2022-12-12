let allBtn = document.querySelectorAll("button");
let userScoreElm = document.querySelector('.userScore');
let compScoreElm = document.querySelector('.compScore');
let scoreMsg = document.querySelector('h2');
let scorePlayer = 0;
let scoreComputer = 0;
let roundsPlayed = 0;


allBtn.forEach((elm) => {
    elm.addEventListener('click', (e) => {
        game(e.target.classList.value)
    })
});

function getComputerChoice() {
    let choice = '';
    let num = Math.floor((Math.random()*3)+1);
    if (num === 1) {choice = "Rock"}
    else if (num === 2) {choice = "Paper"}
    else {choice = "Scissors"};
    return choice
}

function playRound(computerSelection,playerSelection) {
    const userChoice = playerSelection.toLowerCase();
    const compChoice = computerSelection.toLowerCase();
    let winner ='';
    if (userChoice === "rock") {
        if (compChoice === 'paper') {winner = 'computer'}
        else if (compChoice === "rock") {winner = 'none'}
        else {winner = 'user'}
    } 
    else if (userChoice === "paper") {
        if (compChoice === 'scissors') {winner = 'computer'}
        else if (compChoice === "paper") {winner = 'none'}
        else {winner = 'user'}
    }
    else {
        if (compChoice === 'rock') {winner = 'computer'}
        else if (compChoice === "scissors") {winner = 'none'}
        else {winner = 'user'}
    };
    return winner
};

function game(playerChoice) {
    let result = playRound(getComputerChoice(),playerChoice);
    if (result === 'user') {scorePlayer++; roundsPlayed++}
    else if (result === 'none') {roundsPlayed++}
    else {scoreComputer++; roundsPlayed++};
    userScoreElm.textContent = scorePlayer;
    compScoreElm.textContent = scoreComputer;
    if(roundsPlayed === 5) {
        if (scorePlayer === scoreComputer) {scoreMsg.textContent = "SCORE: No Winner! It is a tie!"}
        else if (scorePlayer > scoreComputer) {scoreMsg.textContent = "SCORE: Congrats! You win!"}
        else {scoreMsg.textContent ='SCORE: Sorry! You lost!'};
        resetScore()
    }
}

function resetScore() {
    scorePlayer = 0; 
    scoreComputer = 0; 
    roundsPlayed = 0;
}