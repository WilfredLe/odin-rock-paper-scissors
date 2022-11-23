// Pseduocode
// 1. User inputs choice (Rock, Paper, or Scissors)
// 2. Computer choice is randomly selected
// 3. Comparision is made between user and computer choice
// 4. Results returned depending on outcome

function getComputerChoice() {
    let choice = '';
    let num = Math.floor((Math.random()*3)+1);
    if (num === 1) {choice = "Rock"}
    else if (num === 2) {choice = "Paper"}
    else {choice = "Scissors"};
    return choice
}

function playRound(computerSelection,playerSelection) {
    winMsg = `You Win! ${playerSelection} beats ${computerSelection}!`;
    loseMsg = `You Lose! ${computerSelection} beats ${playerSelection}!`;
    tieMsg = `It is a tie! You both chose ${playerSelection}!`;
    results ='';
    winner ='';
    if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection.toLowerCase() === 'paper') {results = loseMsg; winner = 'computer'}
        else if (computerSelection.toLowerCase() === "rock") {results = tieMsg; winner = 'none'}
        else {results = winMsg; winner = 'user'}
    } 
    else if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection.toLowerCase() === 'scissors') {results = loseMsg; winner = 'computer'}
        else if (computerSelection.toLowerCase() === "paper") {results = tieMsg; winner = 'none'}
        else {results = winMsg; winner = 'user'}
    }
    else {
        if (computerSelection.toLowerCase() === 'rock') {results = loseMsg; winner = 'computer'}
        else if (computerSelection.toLowerCase() === "scissors") {results = tieMsg; winner = 'none'}
        else {results = winMsg; winner = 'user'}
    };
    return [results,winner]
};

function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;
    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt();
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