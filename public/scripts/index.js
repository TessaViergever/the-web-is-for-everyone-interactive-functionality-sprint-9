const menuButton = document.querySelector('#hamburger-menu')
const nav = document.querySelector('.main-navigation')

menuButton.addEventListener('click', function() {
    nav.classList.toggle('open')
    menuButton.classList.toggle('open')
})