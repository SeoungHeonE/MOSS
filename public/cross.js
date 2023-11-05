// image Fadein Fadeout Motion
document.addEventListener("DOMContentLoaded", function () {
    const sliderImages = document.querySelectorAll(".slider-image");
    let currentIndex = 0;

    function showImage(index) {
        sliderImages[index].classList.add("opacity");
    }

    function hideImage(index) {
        sliderImages[index].classList.remove("opacity");
    }

    function nextImage() {
        hideImage(currentIndex);
        currentIndex = (currentIndex + 1) % sliderImages.length;
        showImage(currentIndex);
    }


    showImage(currentIndex);


    setInterval(nextImage, 6000);
});
