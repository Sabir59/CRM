const hamburger = document.querySelector('.hamburger-container');
const navigationMobile = document.querySelector('.navigation-mobile');

hamburger.addEventListener('click', () => {
	navigationMobile.classList.toggle('navitransform');
});
