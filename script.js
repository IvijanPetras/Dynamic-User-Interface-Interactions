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
    let move = 0;
    const IMAGES = [...carousel.children]
    
    
    IMAGES.forEach((img) => {
        let newDot = document.createElement('div');
        newDot.classList.add('dot');
        newDot.setAttribute('id', `${IMAGES.indexOf(img)}`);
        dotContainer.appendChild(newDot);
    });

    function slideMovement(arg){
        `${arg}`;
        carousel.style.setProperty('--pics-move', `${-800 * move}px`);
        addActiveDot();
    }

    function nextSlide(){
        if(move >= IMAGES.length - 1) return
        removeActiveDot();
        slideMovement(move++);
    };

    function prevSlide(){
        if(move < 1) return 
        removeActiveDot();
        slideMovement(move--);
    };

    function removeActiveDot(){
        let dotArray = Array.from(dotContainer.children);
       if (move >= 0) dotArray.forEach(img => img.classList.remove('dot-active'));
    }

    function addActiveDot(){
        let currentImageDot = dotContainer.children[move];
        currentImageDot.classList.add('dot-active');
    }

    function switchImageOnDot(e){
        let dotArray = Array.from(dotContainer.children);
        let dotArrayIndex = dotArray.indexOf(e.target);
        move = dotArrayIndex;
        removeActiveDot();
        carousel.style.setProperty('--pics-move', `${-800 * move}px`);
        dotArray[dotArrayIndex].classList.add('dot-active');
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    dotContainer.addEventListener('click', switchImageOnDot);
    addActiveDot();

});