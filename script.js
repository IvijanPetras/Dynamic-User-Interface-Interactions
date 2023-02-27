window.addEventListener("DOMContentLoaded", () => {
// dropdown menu ----------------------
    // let menuIcon = document.querySelector('.menu-icon');
    // let container = document.querySelector('.drop-container');

    // menuIcon.addEventListener("click", () => {
    //    container.classList.toggle('strech-it');
    // });
/// image slider -------------------------

    let carousel = document.querySelector('.carousel');
    let prevBtn = document.querySelector('.prev');
    let nextBtn = document.querySelector('.next');
    let dotContainer = document.querySelector('.dot-container');
    let move = 1;

    function activeSlide(){
       let imgs = [...carousel.children]
       let activeImg = imgs.filter(img => img.classList.contains('active'));
       return imgs.indexOf(...activeImg) + 1;
    };

    console.log(activeSlide())

    function nextSlide(){

        carousel.style.setProperty('--pics-move', `${-800 * activeSlide()}px`);
        move++;
       
    };

    function prevSlide(){
        move = 0;
        console.log(move)
        carousel.style.setProperty('--pics-move', `${800 * move}px`);
    };

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

});