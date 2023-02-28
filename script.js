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
    let imgs = [...carousel.children]
    
    
    function nextSlide(){
        const activeImg = [...carousel.children].filter(img => img.classList.contains('active'));
        let activeImage = imgs.indexOf(...activeImg);
        carousel.style.setProperty('--pics-move', `${-800 * (activeImage + 1)}px`);
        activeImg[0].classList.remove('active');
        imgs[activeImage + 1].classList.add('active');
        console.log(imgs)
    };

    function prevSlide(){
        const activeImg = [...carousel.children].filter(img => img.classList.contains('active'));
        let activeImage = imgs.indexOf(...activeImg);
        activeImg[0].classList.remove('active');
        imgs[activeImage - 1].classList.add('active');
        carousel.style.setProperty('--pics-move', `${800 * (activeImage - 1)}px`);
        console.log(activeImage);
    };

    nextBtn.addEventListener('click', () => {
        nextSlide();
    });
    prevBtn.addEventListener('click', prevSlide);

});