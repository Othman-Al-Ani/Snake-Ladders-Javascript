

document.getElementById("volume").addEventListener("click", mute);

        function mute() {
            var element = document.getElementById("volume-change");

            if (element.classList.contains("bx-volume-full")) {
                element.classList.toggle("bxs-volume-mute");
            } else {
                element.classList.toggle("bx-volume-full");
            }
        }



        document.getElementById("question").addEventListener("click", tut);

        function tut(){

            var el = document.getElementById("tutorial");

            if(el.classList.contains("hide")) {

                el.classList.toggle("hide");
            } else {
                el.classList.toggle("hide");
            
    
            }
        }

        document.getElementById("play").addEventListener("click", playset);

        function playset(){

            var ps = document.getElementById("play-settings");

            if(ps.classList.contains("hide")) {

                ps.classList.toggle("hide");
            } else {
                ps.classList.toggle("hide");
            
    
            }
        }