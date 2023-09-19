const music = document.getElementById('music');

function initIndexPage() {
    document.getElementById("volume")?.addEventListener("click", mute);
    document.getElementById("question")?.addEventListener("click", tut);
    document.getElementById("play")?.addEventListener("click", playset);

    music.volume = 1;

}
function initGamePage() {

    var restartButtons = document.getElementsByClassName("restartBtn");

    document.getElementById("volume")?.addEventListener("click", mute);
    document.getElementById("question")?.addEventListener("click", tut);
    // Loop through the elements and add the event listener to each one
    for (var i = 0; i < restartButtons.length; i++) {
        restartButtons[i].addEventListener("click", restartGame);
    }

    music.volume = 0.25;


}
function mute() {

    var icon = document.getElementById("volume-change");

    if (music.paused) {
        music.play();
    }
    else {
        music.pause();
    }
    icon.classList.toggle("bxs-volume-mute");

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
}