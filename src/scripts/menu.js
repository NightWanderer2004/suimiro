const burger = document.querySelector('.burger')
const navbar = document.querySelector('.navbar')
const navbarHeight = navbar.offsetHeight * 2

// Переключает меню
burger.onclick = e => e.target.classList.toggle('active')

// Закрывает меню по скролу
window.onscroll = () => {
   if (document.documentElement.scrollTop > navbarHeight)
      burger.classList.remove('active')
}
