// Manual slideshow for work pages.
const manualSlideShow = (() => {
    const slidesButton = document.querySelector('.slides-button');
    const picnicSlides = document.querySelectorAll('.picnic-slideshow > img');
    const picnicSlidesArr = Array.from(picnicSlides);

    function setZIndex() {
        for (let i = 0; i < picnicSlidesArr.length; i++) {
            picnicSlidesArr[i].style.zIndex = i + 1;
            if (!(picnicSlidesArr[i].style.zIndex === '11')) {
                picnicSlidesArr[i].style.display = 'none';
            }
        }
    }

    function changeSlides() {
        for (let i = 0; i < picnicSlidesArr.length; i++) {
            if (picnicSlidesArr[i].style.zIndex === '11') {
                picnicSlidesArr[i].style.display = 'block';
                picnicSlidesArr.unshift(...picnicSlidesArr.splice(i, 1));
                picnicSlidesArr[i].style.zIndex = i + 1;
                picnicSlidesArr[i].style.display = 'none';
            }
        }
    }
    setZIndex();
    changeSlides();
    slidesButton.addEventListener('click', changeSlides);
})();
