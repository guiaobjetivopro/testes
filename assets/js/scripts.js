const iconMenu = document.querySelector('.icon_menu');
const menuMobile = document.querySelector('.content_menu_mobile');
const lens = document.querySelector('.lens');

iconMenu.addEventListener('click', () => {
    lens.classList.add('active');
    menuMobile.classList.add('open');
});

lens.addEventListener('click', () => {
    lens.classList.remove('active');
    menuMobile.classList.remove('open');
});