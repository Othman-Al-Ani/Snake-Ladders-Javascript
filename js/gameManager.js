
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



let playerPosArr = [];

//Default player position

var currentlyMoving = false;    // Variable to not allow the dice to be spammed and allow animation to play.

var diceImg = document.getElementById("diceImg");
var gameBoard = document.getElementById("gameboard");


var playerTurn = 0;     //Players turn var

diceImg.addEventListener('click', throwDice);


function loadGame() {

    const playerAmount = (new URLSearchParams(window.location.search)).get("category");

    var firstDiv = document.getElementById("1");


    for (i = 0; i <= playerAmount; i++) {

        var player = document.createElement("div");
        player.id = "player" + (i + 1);
        firstDiv.appendChild(player);

        playerPosArr.push(1);


    }





}

// The dice rolling function. || Triggers when pressing the dice img
async function throwDice() {
    if (currentlyMoving) return;
    var rand = Math.floor(Math.random() * 6 + 1);
    diceImg.src = "../Dices/dice-gif.gif";
    var alpha = Math.floor(Math.random() * 800 + 300);
    //console.log(alpha)
    await delay(alpha);
    diceImg.src = "../Dices/Dice" + rand + ".svg";
    movePlayerDelay(rand);
    currentlyMoving = true;


    document.getElementById("playerH1").innerHTML = "Player " + (playerTurn + 1) + "'s turn";
    console.log(playerTurn);

    return rand;
}


//Moving the player || Animating the movement for player
async function movePlayerDelay(value) {
    for (i = 1; i <= value; i++) {
        var div = document.getElementById(playerPosArr[playerTurn]);
        console.log("DIV", div);
        var nextDiv = document.getElementById(playerPosArr[playerTurn] + 1);
        console.log("NEXT DIV", nextDiv);
        await delay(200); // This will pause execution for 200 milliseconds (0.2 seconds)
        //Delete player div from cell
        var playerNameID = "player" + (playerTurn + 1);
        console.log("PLAYER NAME ID", playerNameID);
        console.log("REMOVED", document.getElementById(playerNameID));

        div.removeChild(document.getElementById(playerNameID));
        var newPlayerDiv = document.createElement("div");
        console.log("NEW PLAYER DIV", newPlayerDiv)

        newPlayerDiv.id = playerNameID;
        nextDiv.appendChild(newPlayerDiv);
        playerPosArr[playerTurn]++;
        console.log("Curr turn:" + playerTurn);

    }
    console.log("--------------");
    console.log(playerPosArr);
    for (j = 0; j < SnakesAndLadders.length; j++) {
        if (playerPosArr[playerTurn] == SnakesAndLadders[j].pos) {
            var div = document.getElementById(playerPosArr[playerTurn]);
            var playerNameID = "player" + (playerTurn + 1);
            div.removeChild(document.getElementById(playerNameID));

            playerPosArr[playerTurn] = SnakesAndLadders[j].goto;

            var div = document.getElementById(playerPosArr[playerTurn]);

            var newPlayerDiv = document.createElement("div");
            newPlayerDiv.id = playerNameID;
            div.appendChild(newPlayerDiv);
        }
    }
    if (value != 6) {
        // Move the playerTurn increment here.
        playerTurn++;

        // Ensure playerTurn cycles back to 0 when it exceeds the number of players.
        if (playerTurn >= playerPosArr.length) {
            playerTurn = 0;
        }
    }

    currentlyMoving = false;

}




