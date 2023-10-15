let playerScore =0;
let computerScore = 0;

function generateComputerInput(){
    const options = ["Rock","Paper","Scissor"];
    let x = Math.floor(Math.random()*3);
    return options[x];
}

function rock(){

    let computer_input = generateComputerInput();
    if (computer_input === "Scissor"){
        playerScore++;
        document.getElementById("msg").innerHTML = "Computer Choose"+computer_input+" You Win!  "+playerScore+" - "+computerScore;

    }
    else if (computer_input === "Paper"){
        computerScore++;
        document.getElementById("msg").innerHTML = "Computer Choose"+computer_input+" You Lose!  "+playerScore+" - "+computerScore;

    }
    else{
        document.getElementById("msg").innerHTML = "Computer Choose"+computer_input+" Round Tied!!  "+playerScore+" - "+computerScore;
    }
}


function paper(){

    let computer_input = generateComputerInput();
    if (computer_input === "Rock"){
        playerScore++;
        document.getElementById("msg").innerHTML = "Computer Choose "+computer_input+" You Win!  "+playerScore+" - "+computerScore;

    }
    else if (computer_input === "Scissor"){
        computerScore++;
        document.getElementById("msg").innerHTML = "Computer Choose "+computer_input+" You Lose!  "+playerScore+" - "+computerScore;

    }
    else{
        document.getElementById("msg").innerHTML = "Computer Choose "+computer_input+" Round Tied!!  "+playerScore+" - "+computerScore;
    }
}

function scissor(){

    let computer_input = generateComputerInput();
    if (computer_input === "Paper"){
        playerScore++;
        document.getElementById("msg").innerHTML = "Computer Choose "+computer_input+" You Win!  "+playerScore+" - "+computerScore;

    }
    else if (computer_input === "Rock"){
        computerScore++;
        document.getElementById("msg").innerHTML = "Computer Choose "+computer_input+" You Lose!  "+playerScore+" - "+computerScore;

    }
    else{
        document.getElementById("msg").innerHTML = "Computer Choose "+computer_input+" Round Tied!!  "+playerScore+" - "+computerScore;
    }
}