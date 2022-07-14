//Passes value from name field to JS
var name = ''
function getName() {
    name = document.getElementById("myname").value;
    displayGame();
}


//Toggles visibility of rock paper scissors game in HTML
function displayGame() {
    var target = document.getElementById('heading1')
    if (target.style.display == 'none') {
        target.style.display = 'block';
    }
}

let playerScore = 0;
let computerScore = 0;

//Game logic based on name.   refactor to fisher-yates random
function getUserChoice(rps) {
    let playerscorehtml = document.getElementById("playerscorehtml");
    let computerscorehtml = document.getElementById("computerscorehtml");
    name = name.toLowerCase()
    name = name.replace(/\s+/g, '');
    console.log(name);
    console.log(playerScore);
    let userChoice=rps
    let container = document.getElementById("container");
    // let answerContainer = document.createElement('div');
    // answerContainer.id = "answerId"
    // container.appendChild(answerContainer);
    // document.getElementById("container").outerHTML = "";
    console.log(container);
    var computerChoice = Math.random();
    console.log(computerChoice);
        if (computerChoice < 0.34) {
            computerChoice = 'rock';
        } else if (computerChoice <= 0.67) {
            computerChoice = 'paper';
        }  else {
                computerChoice = 'scissors';
            }
    if (name === "matt") {
        if (userChoice === 'rock') {
            playerScore++
            computerscorehtml.innerHTML=`${computerScore}`;
            playerscorehtml.innerHTML=`${playerScore}`;
            container.innerHTML = "<strong> You chose rock, computer picked scissors, congrats you win!</strong>"
        } else if (userChoice === 'paper') {
            playerScore++
            computerscorehtml.innerHTML=`${computerScore}`;
            playerscorehtml.innerHTML=`${playerScore}`;
            container.innerHTML = "<strong> you chose paper, computer chose rock, congrats you win!</strong>"
        } else if (userChoice === 'scissors') {
            playerScore++
            computerscorehtml.innerHTML=`${computerScore}`;
            playerscorehtml.innerHTML=`${playerScore}`;
            container.innerHTML = "<strong>you chose scissors, computer chose paper, congrats you win!</strong>"
        } else {
            alert('unexpected choice.');
        }
    } else if (name === 'jolie') {
        if (userChoice === 'rock') {
            computerScore++
            computerscorehtml.innerHTML=`${computerScore}`;
            playerscorehtml.innerHTML=`${playerScore}`;
            container.innerHTML = "<strong>you chose rock, computer chose paper, you lose!'</strong>"
        } else if (userChoice === 'paper') {
            computerScore++
            computerscorehtml.innerHTML=`${computerScore}`;
            playerscorehtml.innerHTML=`${playerScore}`;
            container.innerHTML = "<strong>you chose paper, computer chose scissors, you lose!'</strong>"
        } else if (userChoice === 'scissors') {
            computerScore++
            computerscorehtml.innerHTML=`${computerScore}`;
            playerscorehtml.innerHTML=`${playerScore}`;
            container.innerHTML = "<strong>you chose scissors, computer chose rock, you lose!'</strong>"
        } else {
            alert('unexpected choice.');
        }
    }  else if (name === 'lewis') {
        if (userChoice === 'rock') {
            computerScore++
            computerscorehtml.innerHTML=`${computerScore}`;
            playerscorehtml.innerHTML=`${playerScore}`;
            container.innerHTML = "<strong>you chose rock, computer chose paper, you lose!'</strong>"
        } else if (userChoice === 'paper') {
            computerScore++
            computerscorehtml.innerHTML=`${computerScore}`;
            playerscorehtml.innerHTML=`${playerScore}`;
            container.innerHTML = "<strong>you chose paper, computer chose scissors, you lose!'</strong>"
        } else if (userChoice === 'scissors') {
            computerScore++
            computerscorehtml.innerHTML=`${computerScore}`;
            playerscorehtml.innerHTML=`${playerScore}`;
            container.innerHTML = "<strong>you chose scissors, computer chose rock, you lose!'</strong>"
        } else {
            alert('unexpected choice.');
        }
    }  else {
                
            if (userChoice === computerChoice) {
                console.log('test', computerChoice);
                computerscorehtml.innerHTML=`${computerScore}`;
                playerscorehtml.innerHTML=`${playerScore}`;
                container.innerHTML = "<strong>you chose " +  `${userChoice}` + ", computer chose " +  `${computerChoice}` + ".  Tie game!`</strong>"
                return;
            } else if (userChoice === 'rock') {
                if (computerChoice === 'paper') {
                    computerScore++
                    computerscorehtml.innerHTML=`${computerScore}`;
                    playerscorehtml.innerHTML=`${playerScore}`;
                    console.log('computerchoice', computerChoice);
                    container.innerHTML = "<strong> you chose " + `${userChoice}` + ", computer chose " + `${computerChoice}` +  "computer wins!</strong>"
                    return;
                } else if (computerChoice === 'scissors') {
                    playerScore++
                    computerscorehtml.innerHTML=`${computerScore}`;
                    playerscorehtml.innerHTML=`${playerScore}`;
                    console.log('computerchoice', computerChoice);
                    container.innerHTML = "<strong> you chose " +  `${userChoice}` + ", computer chose " + `${computerChoice}` + ", you win!</strong>"
                    return;
                }
            } else if (userChoice === 'paper') {
                if (computerChoice === 'rock') {
                    playerScore++
                    computerscorehtml.innerHTML=`${computerScore}`;
                    playerscorehtml.innerHTML=`${playerScore}`;
                    console.log('test', computerChoice);
                    container.innerHTML = "<strong> you chose " + `${userChoice}` + ", computer chose " + `${computerChoice}` +  "You Win!</strong>"
                    return;
                } else if (computerChoice === 'scissors') {
                    computerScore++
                    computerscorehtml.innerHTML=`${computerScore}`;
                    playerscorehtml.innerHTML=`${playerScore}`;
                    console.log('test', computerChoice);
                    container.innerHTML = "<strong> you chose " + `${userChoice}` + ", computer chose " + `${computerChoice}` + ", you lose! </strong>"
                    return;
                }
            } else if (userChoice === 'scissors') {
                if (computerChoice === 'paper') {
                    playerScore++
                    computerscorehtml.innerHTML=`${computerScore}`;
                    playerscorehtml.innerHTML=`${playerScore}`;
                    console.log(`test`,computerChoice);
                    container.innerHTML = "<strong> you chose " + `${userChoice}` + ", computer chose " + `${computerChoice}` + ", You Win!</strong>"
                    return;
                    }   else if (computerChoice === 'rock') {
                        computerScore++
                        computerscorehtml.innerHTML=`${computerScore}`;
                    playerscorehtml.innerHTML=`${playerScore}`;
                        console.log(computerChoice);
                        container.innerHTML =  "<strong> you chose " + `${userChoice}` + ", computer chose " + `${computerChoice}` + ", you lose!</strong>"
                        return;
                    }
                        
            }  else {
                alert('unexpected choice please try again');
                return;
            }
                }
}
