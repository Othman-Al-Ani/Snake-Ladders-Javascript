
function initIndexPage(){
    document.getElementById("volume").addEventListener("click", mute);
    document.getElementById("question").addEventListener("click", tut);
    document.getElementById("play").addEventListener("click", playset);
}
function initGamePage(){
    document.getElementById("restartBtn").addEventListener("click", restartGame);

}





function mute() {
    var element = document.getElementById("volume-change");

    if (element.classList.contains("bx-volume-full")) {
        element.classList.toggle("bxs-volume-mute");
    } else {
        element.classList.toggle("bx-volume-full");
    }
}

function tut(){

    var el = document.getElementById("tutorial");

    if(el.classList.contains("hide")) {

        el.classList.toggle("hide");
    } else {
        el.classList.toggle("hide");
    

    }
}

function playset(){

    var ps = document.getElementById("play-settings");

    if(ps.classList.contains("hide")) {

        ps.classList.toggle("hide");
    } else {
        ps.classList.toggle("hide");
    

    }
}

function restartGame(){
    location.reload();
}