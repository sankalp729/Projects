let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const user_Score = document.querySelector("#user-score");
const comp_Score = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["stone", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("game was draw");
    msg.innerText = "Game was a draw";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        user_Score.innerText = userScore;
        console.log("You win");
        msg.innerText = `You win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        comp_Score.innerText = compScore;
        console.log("You lose");
        msg.innerText = `You lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    // generate comp choice : 
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if(userChoice == compChoice){
        // Draw game
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "stone"){
            userWin = compChoice === "paper" ? false : true; 
        }else if(userChoice === "paper"){
            userWin = compChoice === "stone" ? true : false;
        }else{
            userWin = compChoice === "stone" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    });
});