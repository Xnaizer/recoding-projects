//  show menu
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

// Menu show 
// Validate if constant exist 
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
    });
};

//menu hidden
// validate if contstant exist
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu');
    });
};

// remove menu mobile
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
    // when we click on each nav__link, we remove the show menu
};
navLink.forEach(n => n.addEventListener('click', linkAction));



// change background header 

const scrollHeader = () =>{
    const header = document.getElementById('header');
    this.scrollY >= 50 ? header.classList.add('bg-Header') : header.classList.remove('bg-Header');
};
window.addEventListener('scroll', scrollHeader);

// showing scroll up

const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up');

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll',scrollUp)

// showing active link
const sections = document.querySelectorAll('section[id]');

const scrollActive = () =>{
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId)

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link');
        }else{
            sectionsClass.classList.remove('active-link');
        };
    });
};

window.addEventListener('scroll', scrollActive);



// Dark Theme Section

const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const lightTheme = 'light-theme';
const iconTheme = 'ri-sun-line';

//previously selected topic ( id user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

//we obtain the current theme that the interface has by validating the dark theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-fill' : 'ri-sun-line';


if(selectedTheme) {
    //if the validation is fullfilled, we ask what the issues was to know if we actiated or deactivated the dark theme
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'ri-moon-fill' ? 'add' : 'remove'](iconTheme);
};

//activated or deactivated the theme manualy with button
themeButton.addEventListener('click', () => {
    // add or remove dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    //we save the theme and the current icon that the use choose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
    
});

// scroll reveal animations
const sr = ScrollReveal({
    origin : 'top',
    distance : '60px',
    duration : 2500,
    delay : 400,
})

sr.reveal('.home__img, .newsletter__container, .footer__logo, .footer__description, .footer__content, .footer__info')
sr.reveal('.home__data', {origin: 'bottom'})

sr.reveal('.about__data, .recently__data', {origin: 'left'})
sr.reveal('.about__img, .recently__img', {origin: 'right'})

sr.reveal('.popular__card', { interval: 100})

