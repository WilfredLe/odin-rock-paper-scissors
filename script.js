// Pseduocode
// 1. User inputs choice (Rock, Paper, or Scissors)
// 2. Computer choice is randomly selected
// 3. Comparision is made between user and computer choice
// 4. Results returned depending on outcome
let rockBtn = document.querySelector(".rock");
let paperBtn = document.querySelector(".paper");
let scissorsBtn = document.querySelector(".scissors");
let allBtn = document.querySelectorAll("button");

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
    const winMsg = `You Win! ${playerSelection} beats ${computerSelection}!`;
    const loseMsg = `You Lose! ${computerSelection} beats ${playerSelection}!`;
    const tieMsg = `It is a tie! You both chose ${playerSelection}!`;
    let results ='';
    let winner ='';
    if (userChoice === "rock") {
        if (compChoice === 'paper') {results = loseMsg; winner = 'computer'}
        else if (compChoice === "rock") {results = tieMsg; winner = 'none'}
        else {results = winMsg; winner = 'user'}
    } 
    else if (userChoice === "paper") {
        if (compChoice === 'scissors') {results = loseMsg; winner = 'computer'}
        else if (compChoice === "paper") {results = tieMsg; winner = 'none'}
        else {results = winMsg; winner = 'user'}
    }
    else {
        if (compChoice === 'rock') {results = loseMsg; winner = 'computer'}
        else if (compChoice === "scissors") {results = tieMsg; winner = 'none'}
        else {results = winMsg; winner = 'user'}
    };
    return [results,winner]
};

function game(playerChoice) {
    let scorePlayer = 0;
    let scoreComputer = 0;
    for (let i = 0; i < 5; i++) {
        let result = playRound(getComputerChoice(),playerChoice);
        console.log(result[0]);
        if (result[1] === 'user') {scorePlayer++}
        else if (result[1] === 'none') {}
        else {scoreComputer++}
    };
    if (scorePlayer === scoreComputer) {console.log("No Winner! It is a tie!")}
    else if (scorePlayer > scoreComputer) {console.log("Congrats! You win!")}
    else {console.log('Sorry! You lost!')};
}