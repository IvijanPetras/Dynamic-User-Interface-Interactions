window.addEventListener("DOMContentLoaded", () => {

    let menuIcon = document.querySelector('.menu-icon');
    let home = document.querySelector('.home');
    let contact = document.querySelector('.contact');
    let about = document.querySelector('.about');
    let container = document.querySelector('.drop-container');

    function animate(elem) {
        if(elem.classList[1] === undefined || elem.classList[1] === 'dropit') {
          elem.classList.remove("dropit");
          elem.classList.add("dropit-reverse");
        } else {
        elem.classList.remove("dropit-reverse");
        elem.classList.add("dropit");
        }
        
      }
    

    menuIcon.addEventListener("click", () => {
       container.classList.toggle('strech-it');
    });

});