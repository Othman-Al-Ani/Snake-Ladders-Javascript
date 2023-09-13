document.getElementById("volume").addEventListener("click",mute);

function mute(){

var element = document.getElementById("volume");

element.classList.toggle("bxs-volume-mute");

}