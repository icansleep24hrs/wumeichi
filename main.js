// slideshow module.
const slideShow = (() => {
    const backgroundDiv = document.querySelector('body');
    const slide1 = 'url(pics/sugar-apple.jpg)';
    const slide2 = 'url(pics/untitled-2022.jpg)';
    const slide3 = 'url(pics/yxx-3.jpg)';
    const slide4 = 'url(pics/yxx-the-flares-4.jpg)';
    const slide5 = 'url(pics/yxx-the-flares-6.jpg)';
    const slidesArray = [slide1, slide2, slide3, slide4, slide5];
    function displaySlides() {
        for (let i = 0; i < slidesArray.length; i++) {
            setTimeout(() => {
                backgroundDiv.style.backgroundImage = slidesArray[i];
            }, 5000 * i)
        }
    }
return {
    slidesArray,
    displaySlides
}
})();

slideShow.displaySlides();
setInterval(slideShow.displaySlides, 25000);