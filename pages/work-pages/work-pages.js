// Manual slideshow for work pages.
const manualSlideShow = (() => {
    const picnicSlides = document.querySelectorAll('.picnic-slideshow > img');
    const picnicSlidesArr = Array.from(picnicSlides);

    function setZIndex() {
        for (let i = 0; i < picnicSlidesArr.length; i++) {
            picnicSlidesArr[i].style.zIndex = i + 1;
        }
    }

    function changeSlides() {
        for (let i = 0; i < picnicSlidesArr.length; i++) {
            if (picnicSlidesArr[i].style.zIndex === '5' && picnicSlidesArr[i].style.opacity <= 0) {
                picnicSlidesArr.unshift(...picnicSlidesArr.splice(i, 1));
                picnicSlidesArr[i].style.zIndex = i + 1;
            }
        }
    }
    setZIndex();
})();
