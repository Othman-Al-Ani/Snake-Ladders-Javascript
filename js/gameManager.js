var diceImg = document.getElementById("diceImg");
var gameBoard = document.getElementById("gameboard");
//var diceNumb = rollDice();

console.log("ur mom");

diceImg.addEventListener('click', rollDice);


function rollDice() {
    var animation = 1;
    var rand = Math.floor(Math.random() * 6 + 1);
    /*for (i = 10; i > 0; i--) {
        animation = Math.floor(Math.random() * 6 + 1);
        diceImg.src = "Dices/Dice" + animation + ".svg"
        console.log(animation);
    } */

    diceImg.src = "../Dices/Dice" + rand + ".svg";

    return rand;
}


function loadGame() {
    for(i = 100; i > 0; i--)
    {
        var temp = document.createElement ("div");
        temp.id = i;
        gameBoard.appendChild(temp);
        console.log(i);
    }
}
