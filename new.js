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


class playGame {
    constructor() {
        this.playerScore = 0;
        this.computerScore = 0;
    }


}