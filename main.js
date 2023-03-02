// slideshow module.
const slideShow = (() => {
    const slide1 = document.querySelector('.slide-1');
    const slide2 = document.querySelector('.slide-2');
    const slide3 = document.querySelector('.slide-3');
    const slide4 = document.querySelector('.slide-4');
    const slide5 = document.querySelector('.slide-5');
    const slidesArray = [slide5, slide4, slide3, slide2, slide1];
    function setSlideOpacity() {
        for (let i = 0; i < slidesArray.length; i++) {
                slidesArray[i].style.opacity = 1;
        }
    }
    function transitionSlides() {
        return new Promise((x) => {
            const opacityInterval = setInterval(changeOpacity, 15);
            function changeOpacity() {
                for (let i = 0; i < slidesArray.length; i++) {
                    slidesArray[i].style.zIndex = i + 1;
                    if (slidesArray[i].style.zIndex === '5') {
                        slidesArray[i].style.opacity -= 0.01;
                    }
                    if (slidesArray[i].style.opacity <= 0) {
                        clearInterval(opacityInterval);
                        x();
                    }
                }
            }
        })
    }
    async function changeSlides() {
        for (let i = 0; i < slidesArray.length; i++) {
            if (slidesArray[i].style.zIndex === '5' && slidesArray[i].style.opacity <= 0) {
                slidesArray.unshift(...slidesArray.splice(i, 1));
                slidesArray[i].style.zIndex = i + 1;
            }
        }
        await transitionSlides();
        slidesArray[0].style.opacity = 1;
    }
    setSlideOpacity();
    return {
        changeSlides
    }
})();
setInterval(slideShow.changeSlides, 4000);
