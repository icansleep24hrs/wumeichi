// slideshow module.
const slideShow = (() => {
    const slidesArray = [1, 2, 3, 4, 5];
    function displaySlides() {
        for (let i = 0; i < slidesArray.length; i++) {
            setTimeout(() => {
                console.log(slidesArray[i]);
            }, 2000 * i)
        }g
    }
return {
    slidesArray,
    displaySlides
}
})();

slideShow.displaySlides();