// slideshow module.
const slideShow = (() => {
    const backgroundDiv = document.querySelector('body');
    const slidesArray = ['red', 'green', 'blue', 'yellow', 'black'];
    function displaySlides() {
        for (let i = 0; i < slidesArray.length; i++) {
            setTimeout(() => {
                backgroundDiv.style.backgroundColor = slidesArray[i];
            }, 2000 * i)
        }
    }
return {
    slidesArray,
    displaySlides
}
})();

// slideShow.displaySlides();
// setInterval(slideShow.displaySlides, 10000);