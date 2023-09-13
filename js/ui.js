

document.getElementById("volume").addEventListener("click", mute);

        function mute() {
            var element = document.getElementById("volume");

            if (element.classList.contains("bx-volume-full")) {
                element.classList.toggle("bxs-volume-mute");
            } else {
                element.classList.toggle("bx-volume-full");
            }
        }