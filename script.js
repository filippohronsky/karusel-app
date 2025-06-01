// This file contains the JavaScript code for the carousel functionality.

document.addEventListener('DOMContentLoaded', function() {
    const carouselImages = document.querySelectorAll('.carousel-image');
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
    let currentIndex = 0;

    function updateCarousel() {
        carouselImages.forEach((image, index) => {
            image.style.display = index === currentIndex ? 'block' : 'none';
        });
    }

    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % carouselImages.length;
        updateCarousel();
    });

    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
        updateCarousel();
    });

    updateCarousel();
});