const toggleMenu = document.getElementsByClassName('mobile-icon')[0]
const menuLinks = document.getElementsByClassName('navmenu-links')[0]

toggleMenu.addEventListener('click', () =>{
    menuLinks.classList.toggle('active')
})