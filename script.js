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
    let moveIndex = 0;
    let slideInterval;
    const IMAGES = [...carousel.children];
    
    
    IMAGES.forEach((img) => {
        let newDot = document.createElement('div');
        newDot.classList.add('dot');
        newDot.setAttribute('id', `${IMAGES.indexOf(img)}`);
        dotContainer.appendChild(newDot);
    });

    function slideMovement(arg){
        `${arg}`;
        carousel.style.setProperty('--pics-move', `${-800 * moveIndex}px`);
        addActiveDot();
    }

    function nextSlide(){
        removeActiveDot();
        if(moveIndex >= IMAGES.length - 1) return slideMovement(moveIndex = 0);
        slideMovement(moveIndex++);
    };

    function prevSlide(){
        removeActiveDot();
        if(moveIndex < 1) return slideMovement(moveIndex = IMAGES.length - 1);
        slideMovement(moveIndex--);
    };

    function removeActiveDot(){
        let dotArray = Array.from(dotContainer.children);
       if (moveIndex >= 0) dotArray.forEach(img => img.classList.remove('dot-active'));
    }

    function addActiveDot(){
        let currentImageDot = dotContainer.children[moveIndex];
        currentImageDot.classList.add('dot-active');
    }

    function switchImageOnDot(e){
        console.log(e.target)
        let dotArray = Array.from(dotContainer.children);
        let dotArrayIndex = dotArray.indexOf(e.target);
        moveIndex = dotArrayIndex;
        removeActiveDot();
        carousel.style.setProperty('--pics-move', `${-800 * moveIndex}px`);
        dotArray[dotArrayIndex].classList.add('dot-active');
    }

    
    
    function autoSlide(){
        slideInterval =  setInterval(nextSlide, 2000);
    }
    
    function stopAutoSlide(){
        clearInterval(slideInterval);
    }


    nextBtn.addEventListener('click', () => {
        nextSlide();
        stopAutoSlide();
    });
    prevBtn.addEventListener('click', () => {
        prevSlide();
        stopAutoSlide();
    });
    dotContainer.addEventListener('click', (e) => {
        switchImageOnDot(e);
        stopAutoSlide();
    });
    addActiveDot();
    autoSlide();
});