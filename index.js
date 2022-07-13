var name = ''
function getName() {
    name = document.getElementById("myname").value;
    displayGame();
}



function displayGame() {
    var target = document.getElementById('heading1')
    if (target.style.display == 'none') {
        target.style.display = 'block';
    }
}

// name = name.toLowerCase()


function getUserChoice(rps) {
    name = name.toLowerCase()
    console.log(name);
    let userChoice=rps
    let container = document.getElementById("container");
    var computerChoice = Math.random();
        if (computerChoice < 0.34) {
            computerChoice = 'rock';
        } else if (computerChoice <= 0.67) {
            computerChoice = 'paper';
        }  else {
                computerChoice = 'scissors';
            }
    if (name === "matt") {
        if (userChoice === 'rock') {
            container.outerHTML = "<strong> You chose rock, computer picked scissors, congrats you win!</strong>"
        } else if (userChoice === 'paper') {
            container.outerHTML = "<strong> you chose paper, computer chose rock, congrats you win!</strong>"
        } else if (userChoice === 'scissors') {
            container.outerHTML = "<strong>you chose scissors, computer chose paper, congrats you win!</strong>"
        } else {
            alert('unexpected choice.');
        }
    } else if (name === 'jolie') {
        if (userChoice === 'rock') {
            container.outerHTML = "<strong>you chose rock, computer chose paper, you lose!'</strong>"
        } else if (userChoice === 'paper') {
            container.outerHTML = "<strong>you chose paper, computer chose scissors, you lose!'</strong>"
        } else if (userChoice === 'scissors') {
            container.outerHTML = "<strong>you chose scissors, computer chose rock, you lose!'</strong>"
        } else {
            alert('unexpected choice.');
        }
    } else if (name ==='scott'){
        prompt('You lose get wrecked nerd');
    } else if (name === 'lewis') {
        if (userChoice === 'rock') {
            container.outerHTML = "<strong>you chose rock, computer chose paper, you lose!'</strong>"
        } else if (userChoice === 'paper') {
            container.outerHTML = "<strong>you chose paper, computer chose scissors, you lose!'</strong>"
        } else if (userChoice === 'scissors') {
            container.outerHTML = "<strong>you chose scissors, computer chose rock, you lose!'</strong>"
        } else {
            alert('unexpected choice.');
        }
    }  else {
                
            if (userChoice === computerChoice) {
                container.outerHTML = "<strong>you chose " +  `${userChoice}` + ", computer chose " +  `${computerChoice}` + ".  Tie game!`</strong>"
            } else if (userChoice === 'rock') {
                if (computerChoice === 'paper') {
                    container.outerHTML = "<strong>you chose " + `${userChoice}` + ", computer chose " + `${computerChoice}` +  "computer wins!</strong>"
                } else if (computerChoice === 'scissors') {
                    container.outerHTML = "<strong> you chose " +  `${userChoice}` + ", computer chose " + `${computerChoice}` + ", you win!</strong>"
                }
            } else if (userChoice === 'paper') {
                if (computerChoice === 'rock') {
                    container.outerHTML = "<strong> you chose " + `${userChoice}` + ", computer chose " + `${computerChoice}` +  "You Win!</strong>"
                } else if (computerChoice === 'scissors') {
                    container.outerHTML = "<strong> you chose " + `${userChoice}` + ", computer chose " + `${computerChoice}` + ", you lose! </strong>"
                }
            } else if (userChoice === 'scissors') {
                if (computerChoice === 'paper') {
                    container.outerHTML = "<strong> you chose " + `${userChoice}` + ", computer chose " + `${computerChoice}` + ", You Win!</strong>"
                    }   else if (computerChoice === 'rock') {
                        container.outerHTML = "<strong> you chose " + `${userChoice}` + ", computer chose " + `${computerChoice}` + ", you lose!</strong>"
                    }
                        
            }  else {
                alert('unexpected choice please try again');
            }
                }
}


