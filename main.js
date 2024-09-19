const navIconEl = document.querySelector('.nav__icon');
const navCloseEl = document.querySelector('.nav__close');
const navListEl = document.querySelector('.nav__list');
const navBgoverlayEl = document.querySelector('.nav__bgoverlay');

 const navOpen = () => {
    navListEl.classList.add('show');
    navBgoverlayEl.classList.add('active');
    document.body.style='visibility: visible; height: 100vh; width:100vw; overflow: hidden;';
}

const navClose = () => {
    navListEl.classList.remove('show');
    navBgoverlayEl.classList.remove('active');
    document.body.style= 'visibility: visible; height:initial; width: 100%; overflow-x: hidden;';
}

navIconEl.addEventListener('click', navOpen);
navCloseEl.addEventListener('click', navClose);
navBgoverlayEl.addEventListener('click', navClose);

// aos

AOS.init({
    offset: 200,
    delay: 100,
    duration: 400,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom'
})