const burger = document.querySelector('.burger')
const navbar = document.querySelector('.navbar')
const navbarHeight = navbar.offsetHeight * 2

// Opens the menu
burger.onclick = e => e.target.classList.toggle('active')

// Closes the menu by scrolling
window.onscroll = () => {
   if (document.documentElement.scrollTop > navbarHeight)
      burger.classList.remove('active')
}
