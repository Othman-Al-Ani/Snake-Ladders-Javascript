const playerAmount = (new URLSearchParams(window.location.search)).get("category");

function delay(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}
let SnakesAndLadders = [
    // Storing all the snakes and ladders || pos is the trigger that makes you go up or down, goto is the end point where you will end up
    // V V Snakes V V
    {
        pos: 30,
        goto: 7
    },
    {
        pos: 47,
        goto: 15
    },
    {
        pos: 56,
        goto: 19
    },
    {
        pos: 73,
        goto: 51
    },
    {
        pos: 82,
        goto: 42
    },
    {
        pos: 92,
        goto: 75
    },
    {
        pos: 98,
        goto: 55
    },
    // V V Ladders V V
    {
        pos: 4,
        goto: 25
    },
    {
        pos: 21,
        goto: 39
    },
    {
        pos: 29,
        goto: 74
    },
    {
        pos: 43,
        goto: 76
    },
    {
        pos: 63,
        goto: 80
    },
    {
        pos: 71,
        goto: 89
    }
]



let playerPosArr = [1,1,1,1];
playerPosArr.pop();
console.log(playerPosArr);
    
    //Default player position

var currentlyMoving = false;    // Variable to not allow the dice to be spammed and allow animation to play.

var diceImg = document.getElementById("diceImg");
var gameBoard = document.getElementById("gameboard");


var playerTurn = 1;     //Players turn var

diceImg.addEventListener('click', rollDice);

// The dice rolling function. || Triggers when pressing the dice img 
function rollDice() {
    if (currentlyMoving) return;
    var rand = Math.floor(Math.random() * 6 + 1);


    diceImg.src = "../Dices/Dice" + rand + ".svg";
    movePlayerDelay(rand);
    currentlyMoving = true;

    if (rand < 6) {
        playerTurn++;
    }else {
        playerTurn = playerTurn;
        console.log("Yeet")
    }

    if (playerTurn > playerAmount) {
        playerTurn = 1;
    }
    document.getElementById("playerH1").innerHTML = "Player " + playerTurn + "'s turn";
    console.log(playerTurn);
    return rand;


}


function loadGame() {

    for (i = 100; i > 0; i--) {

    }
    var firstDiv = document.getElementById("1");
    var player = document.createElement("div");
    player.id = "player";
    firstDiv.appendChild(player);

}

//Moving the player || Animating the movement for player
async function movePlayerDelay(value) {
    await delay(500);
    for (i = 1; i <= value; i++) {
        var div = document.getElementById(playerPosArr[playerTurn]);
        var nextDiv = document.getElementById(playerPosArr[playerTurn] + 1);
        console.log(playerPosArr[playerTurn])
        await delay(200); // This will pause execution for 2000 milliseconds (2 seconds)
        //Delete player div from cell
        div.innerHTML = " ";

        var newPlayerDiv = document.createElement("div");
        newPlayerDiv.id = "player";
        nextDiv.appendChild(newPlayerDiv);
        playerPosArr[playerTurn]++;

    }
    for (j = 0; j < SnakesAndLadders.length; j++) {
        if (playerPosArr[playerTurn] == SnakesAndLadders[j].pos) {
            var div = document.getElementById(playerPosArr[playerTurn]);
            div.innerHTML = " ";

            playerPosArr[playerTurn] = SnakesAndLadders[j].goto;

            var div = document.getElementById(playerPosArr[playerTurn]);

            var newPlayerDiv = document.createElement("div");
            newPlayerDiv.id = "player";
            div.appendChild(newPlayerDiv);
        }
    }

    console.log("Final" + playerPosArr[playerTurn]);
    currentlyMoving = false;

}




