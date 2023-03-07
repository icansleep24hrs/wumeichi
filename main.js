// Automatic slideshow module for front page.
const autoSlideShow = (() => {
    const mainSlides = document.querySelectorAll('.main-slideshow-div > img');
    const mainSlidesArr = Array.from(mainSlides);
    function setSlideOpacity() {
        for (let i = 0; i < mainSlidesArr.length; i++) {
                mainSlidesArr[i].style.opacity = 1;
        }
    }
    function transitionSlides() {
        return new Promise((x) => {
            const opacityInterval = setInterval(changeOpacity, 15);
            function changeOpacity() {
                for (let i = 0; i < mainSlidesArr.length; i++) {
                    mainSlidesArr[i].style.zIndex = i + 1;
                    if (mainSlidesArr[i].style.zIndex === '5') {
                        mainSlidesArr[i].style.opacity -= 0.01;
                    }
                    if (mainSlidesArr[i].style.opacity <= 0) {
                        clearInterval(opacityInterval);
                        x();
                    }
                }
            }
        })
    }
    async function changeSlides() {
        for (let i = 0; i < mainSlides.length; i++) {
            if (mainSlidesArr[i].style.zIndex === '5' && mainSlidesArr[i].style.opacity <= 0) {
                mainSlidesArr.unshift(...mainSlidesArr.splice(i, 1));
                mainSlidesArr[i].style.zIndex = i + 1;
            }
        }
        await transitionSlides();
        mainSlidesArr[0].style.opacity = 1;
    }
    setSlideOpacity();
    return {
        changeSlides
    }
})();
setInterval(autoSlideShow.changeSlides, 4000);
