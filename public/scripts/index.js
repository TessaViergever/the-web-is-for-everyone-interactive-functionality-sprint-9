// click hamburger icon = toggle menu drop up/down
const menuButton = document.querySelector('#hamburger-menu')
const nav = document.querySelector('.main-navigation')

menuButton.addEventListener('click', function() {
   nav.classList.toggle('open')
   menuButton.classList.toggle('open')
 })



// JS schrijven om menu hamburger te laten werken als JS enabled is

//  if JS = enabeled
//      prevent default <a> in header niet doorlinken naar nav in footer + nav in footer verbergen
// else ?