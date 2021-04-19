window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu__list'),
    menuItem = document.querySelectorAll('.menu__item'),
    hamburger = document.querySelector('.menu__hamburger'),
    hamburgerList = document.querySelector('.menu__list__hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('menu__hamburger_active');
        menu.classList.toggle('menu__list_active');
    });

    hamburgerList.addEventListener('click', () => {
        hamburgerList.classList.toggle('menu__list__hamburger_active');
        menu.classList.toggle('menu__list_active');
    });


    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('menu__hamburger_active');
            menu.classList.toggle('menu__list_active');
        })
    })
})