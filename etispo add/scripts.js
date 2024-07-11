document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".clickable-image");
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");
    const modalVideo = document.getElementById("modal-video");
    const modalImages = document.getElementById("modal-images");
    const startScreen = document.getElementById("start-screen");
    const startButton = document.getElementById("start-button");
    const close = document.getElementsByClassName("close")[0];
    let time1, time2;
    startButton.addEventListener("click", function () {
        startScreen.style.display = "none";
    });

    images.forEach(image => {
        image.addEventListener("click", function () {
            modalImage.src = this.src;
            modal.classList.add("show");
            modalVideo.play();

            // Toggle animation class
            modalImages.classList.toggle("animation");

            // Set timeout to change modal content after 5 seconds
            time1 = setTimeout(function () {
                modalVideo.style.display = "none";
                modalImage.style.display = "none";
                modal.style.backgroundColor = "#040D33";
                modalImages.style.display = "flex";
                modalImages.style.flexDirection = "column";
            }, 5000);

            // Set timeout to close modal after 9 seconds
            time2 = setTimeout(function () {
                modal.classList.remove("show");
                modalVideo.pause();
                modalVideo.style.display = "block";
                modalImage.style.display = "block";
                modalImages.style.display = "none";
                modal.style.backgroundColor = "transparent"; // Reset background color
                modalImages.classList.remove("animation"); // Remove animation class
            }, 9000);
        });
    });

    close.addEventListener("click", function () {
        modal.classList.remove("show");
        modalVideo.pause();
        modalVideo.style.display = "block";
        modalImage.style.display = "block";
        modalImages.style.display = "none";
        modal.style.backgroundColor = "transparent"; // Reset background color
        modalImages.classList.remove("animation"); // Remove animation class
        if (time1) {
            clearTimeout(time1)
        }
        if (time2) {
            clearTimeout(time2)
        }
    });


    window.addEventListener("click", function (event) {
        if (event.target == modal) {
            modal.classList.remove("show");
            modalVideo.pause();
            modalVideo.style.display = "block";
            modalImage.style.display = "none";
            modal.style.backgroundColor = "transparent"; // Reset background color
            modalImage.classList.remove("animation"); // Remove animation class
        }
    });
});

