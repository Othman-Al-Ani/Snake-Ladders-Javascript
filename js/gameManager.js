function delay(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}
//Default player position
var playerPos = 1;

var currentlyMoving = false;

var diceImg = document.getElementById("diceImg");
var gameBoard = document.getElementById("gameboard");
//var diceNumb = rollDice();

console.log("ur mom");

diceImg.addEventListener('click', rollDice);

function rollDice() {
    if(currentlyMoving) return;
    var rand = Math.floor(Math.random() * 6 + 1);


    diceImg.src = "../Dices/Dice" + rand + ".svg";
    movePlayerDelay(rand);
    currentlyMoving = true;
    return rand;

}
function movePlayer(value) {
    
}

function loadGame() {
    for (i = 100; i > 0; i--) {

        var temp = document.createElement("div");
        temp.id = i;
        if (i == 1) {
            var player = document.createElement("div");
            player.id = "player";
            temp.appendChild(player);
        }
        gameBoard.appendChild(temp);

    }
}

async function movePlayerDelay(value) {
    for (i = 1; i <= value; i++) {
        var div = document.getElementById(playerPos);
        var nextDiv = document.getElementById(playerPos + 1);
        //Delete player div from cell
        console.log(div);
        await delay(200); // This will pause execution for 2000 milliseconds (2 seconds)
        div.innerHTML = " ";

        var newPlayerDiv = document.createElement("div");
        newPlayerDiv.id = "player";
        nextDiv.appendChild(newPlayerDiv);
        playerPos++;

    }
    currentlyMoving = false;

}

