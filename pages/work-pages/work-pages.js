// Manual slideshow for work pages.
const manualSlideShow = (() => {
    const forwardButton = document.querySelector('.forward-button');
    const backButton = document.querySelector('.back-button');
    const picnicSlides = document.querySelectorAll('.picnic-slideshow img');
    let currentSlide = 0;
    
    function changeSlide(x) {
        picnicSlides[currentSlide].className = 'slide';
        currentSlide = (x + picnicSlides.length) % picnicSlides.length;
        picnicSlides[currentSlide].className = 'slide showing';
    }

    function nextSlide() {
        changeSlide(currentSlide + 1);
    }

    function prevSlide() {
        changeSlide(currentSlide - 1);
    }

    forwardButton.addEventListener('click', nextSlide);
    backButton.addEventListener('click', prevSlide);
})();
