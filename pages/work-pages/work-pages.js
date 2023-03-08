// Manual slideshow for work pages.
const manualSlideShow = (() => {
    const forwardButton = document.querySelector('.forward-button');
    const backButton = document.querySelector('.back-button');
    const allSlides = document.querySelectorAll('.picnic-slideshow img, .pandora-1-slideshow img');
    let currentSlide = 0;
    
    function changeSlide(x) {
        allSlides[currentSlide].className = 'slide';
        currentSlide = (x + allSlides.length) % allSlides.length;
        allSlides[currentSlide].className = 'slide current';
    }

    function nextSlide() {
        changeSlide(currentSlide + 1);
    }

    function prevSlide() {
        changeSlide(currentSlide - 1);
    }

    return {
        forwardButton,
        backButton,
        nextSlide,
        prevSlide
    }
})();

manualSlideShow.forwardButton.addEventListener('click', manualSlideShow.nextSlide);
manualSlideShow.backButton.addEventListener('click', manualSlideShow.prevSlide);
