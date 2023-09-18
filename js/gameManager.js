
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


const sfx = document.getElementById('sfx');

//Default player position
let playerPosArr = [];


var currentlyMoving = false;    // Variable to not allow the dice to be spammed and allow animation to play.

var diceImg = document.getElementById("diceImg");
var gameBoard = document.getElementById("gameboard");


var playerTurn = 0;     //Players turn var

//How fast does player move from one div to another [miliseconds]
var moveSpeed = 200;



// This function loads the game and initializes player elements.
function loadGame() {
    // Get the 'category' parameter from the URL query string (assuming it represents the number of players).
    const playerAmount = (new URLSearchParams(window.location.search)).get("category");

    // Get the first cell element with an ID of "1".
    var firstDiv = document.getElementById("1");

    // Loop to create player elements based on the specified playerAmount.
    for (i = 0; i <= playerAmount; i++) {
        // Create a new div element for a player.
        var player = document.createElement("div");

        // Set the ID of the player div with a unique identifier (e.g., "player1", "player2", ...).
        player.id = "player" + (i + 1);

        // Append the player div to the first cell (cell with ID "1").
        firstDiv.appendChild(player);

        // Initialize the player's position array with a starting position of 1.
        playerPosArr.push(1);
    }

    diceImg.addEventListener('click', throwDice);

    var player = document.getElementById("player"+(playerTurn+1));
    player.classList.toggle("active");

}



// The dice rolling function. || Triggers when pressing the dice img
async function throwDice() {
    // If a player is currently moving, exit the function to prevent multiple moves.
    if (currentlyMoving) return;

    // Generate a random number between 1 and 6 to simulate the dice roll.
    var rand = Math.floor(Math.random() * 6 + 1);

    // Change the source of the dice image to a loading animation.
    diceImg.src = "../Dices/dice-gif.gif";

    // Generate a random delay time between 300 and 800 milliseconds.
    var alpha = Math.floor(Math.random() * 800 + 300);

    // Pause execution for the generated delay time.
    await delay(alpha);

    // Change the source of the dice image to display the rolled number.
    diceImg.src = "../Dices/Dice" + rand + ".svg";

    // Check if moving the player would exceed the game board's size (100 cells).
    if ((playerPosArr[playerTurn] + rand) > 100) {
        // Move to the next player's turn.
        playerTurn++;

        // Ensure playerTurn cycles back to 0 when it exceeds the number of players.
        if (playerTurn >= playerPosArr.length) {
            playerTurn = 0;
        }
    } else {
        // Move the player by calling the 'movePlayerDelay' function with the rolled value.
        movePlayerDelay(rand);

        // Set the 'currentlyMoving' flag to indicate that a player is currently moving.
        currentlyMoving = true;
    }

    

    // Return the rolled dice value.
    return rand;
}



//Moving the player || Animating the movement for player
async function movePlayerDelay(value) {
    // Loop from 1 to the specified 'value'.
    for (i = 1; i <= value; i++) {
        // Get the current player's position cell element by its ID.
        var div = document.getElementById(playerPosArr[playerTurn]);
        
        // Get the next cell element where the player will move.
        var nextDiv = document.getElementById(playerPosArr[playerTurn] + 1);
        
        // Pause execution
        sfx.play();
        await delay(moveSpeed);
        sfx.pause();
        sfx.currentTime = 0;

        // Remove the player's div element from the current cell.
        var playerNameID = "player" + (playerTurn + 1);
        div.removeChild(document.getElementById(playerNameID));

        // Create a new div for the player.
        var newPlayerDiv = document.createElement("div");
        newPlayerDiv.id = playerNameID;
        
        // Append the new player div to the next cell.
        nextDiv.appendChild(newPlayerDiv);
        
        // Update the player's position in the array.
        playerPosArr[playerTurn]++;
    }

    // Check if the player landed on a snake or ladder.
    for (j = 0; j < SnakesAndLadders.length; j++) {
        if (playerPosArr[playerTurn] == SnakesAndLadders[j].pos) {
            await delay (moveSpeed + 300);
            // Remove the player's div from the current cell.
            var div = document.getElementById(playerPosArr[playerTurn]);
            var playerNameID = "player" + (playerTurn + 1);
            div.removeChild(document.getElementById(playerNameID));

            // Update the player's position to the designated position from the snake or ladder.
            playerPosArr[playerTurn] = SnakesAndLadders[j].goto;

            // Get the new cell where the player landed.
            var div = document.getElementById(playerPosArr[playerTurn]);

            // Create a new player div and set its ID.
            var newPlayerDiv = document.createElement("div");
            newPlayerDiv.id = playerNameID;

            // Append the new player div to the new cell.
            div.appendChild(newPlayerDiv);
        }
    }
    if(playerPosArr[playerTurn] == 100){
        playerWon();
    }
    // If the player didn't roll a 6, increment the playerTurn.
    if (value != 6) {
        playerTurn++;

        // Ensure playerTurn cycles back to 0 when it exceeds the number of players.
        if (playerTurn >= playerPosArr.length) {
            playerTurn = 0;
        }
    }
    // Update the HTML element to indicate whose turn it is.
    document.getElementById("playerH1").innerHTML = "Player " + (playerTurn + 1) + "'s turn";

    if (playerTurn == 0) {
        document.getElementById("coloredBox").style.backgroundColor = "red";
    } else if (playerTurn == 1) {
        document.getElementById("coloredBox").style.backgroundColor = "blue";
    } else if (playerTurn == 2) {
        document.getElementById("coloredBox").style.backgroundColor = "green";
    } else if (playerTurn == 3) {
        document.getElementById("coloredBox").style.backgroundColor = "yellow";
    }else {
        document.getElementById("coloredBox").style.backgroundColor = "white";
    }

    var player = document.getElementById("player"+(playerTurn+1));
    player.classList.toggle("active");
    // Set a flag to indicate that player movement has finished.
    currentlyMoving = false;
}
function playerWon(){
    console.log("won");

   document.getElementById("win-title").innerText = "Player " + (playerTurn + 1) + " won!!";

    diceImg.style.display = "none";

    var win = document.getElementById("winner");
    win.classList.toggle("hide");

}

