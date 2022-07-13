function getName() {
    const name=document.getElementById('myName').value;
    displayGame();
}

function getUserChoice(rps) {
    let userChoice=rps
}
function gameOutput(text) {
    var heading1 = document.getElementById("heading1");
    heading1.firstChild.nodeValue = text
}


function displayGame() {
    var target = document.getElementById('heading1')
    if (target.style.display == 'none') {
        target.style.display = 'block';
    }
}

