
function initIndexPage() {
    document.getElementById("volume")?.addEventListener("click", mute);
    document.getElementById("question")?.addEventListener("click", tut);
    document.getElementById("play")?.addEventListener("click", playset);
}
function initGamePage() {

    var restartButtons = document.getElementsByClassName("restartBtn");

// Loop through the elements and add the event listener to each one
for (var i = 0; i < restartButtons.length; i++) {
  restartButtons[i].addEventListener("click", restartGame);
}
    

}






function mute() {
    var icon = document.getElementById("volume-change");
    const music = document.getElementById('music');
    music.volume = 0.5;
    if (music.paused) {
        music.play();
        icon.classList.toggle("bxs-volume-mute");
        console.log('music playin');
    }
    else{
        music.pause();
        icon.classList.toggle("bxs-volume-mute");
        console.log('music paused');
    }
} 


function tut() {

    var el = document.getElementById("tutorial");

    if (el.classList.contains("hide")) {

        el.classList.toggle("hide");
    } else {
        el.classList.toggle("hide");


    }
}

function playset() {

    var ps = document.getElementById("play-settings");

    if (ps.classList.contains("hide")) {

        ps.classList.toggle("hide");
    } else {
        ps.classList.toggle("hide");


    }
}

function restartGame() {
    location.reload();
    console.log("yos");
}