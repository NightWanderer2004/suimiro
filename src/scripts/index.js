const primaryBtns = document.querySelectorAll('.colorsButton.primary')
const secondaryBtns = document.querySelectorAll('.colorsButton.secondary')
const burger = document.querySelector('.burger')
const navbar = document.querySelector('.navbar')
const navbarHeight = navbar.offsetHeight * 2

const posts = document.querySelectorAll('.post')
const postsList = document.querySelectorAll('.postLink')
const hints = document.querySelectorAll('.hint')
const hintsList = document.querySelectorAll('.hintLink')

const feed = [...posts, ...hints]
const lists = [...postsList, ...hintsList]
const content = [...feed, ...lists]

const primaryColor = localStorage.getItem('primaryColor')
const secondaryColor = localStorage.getItem('secondaryColor')

const themeSwitcher = document.querySelector('.darktheme')
const themeInfo = document.querySelector('.darktheme__info')
const themeDark = document.querySelector('body')

// Set the colors
content.forEach(el => {
   const isPost =
      el.classList.contains('post') || el.classList.contains('postLink')
         ? true
         : false

   const bgColor = isPost ? primaryColor || 'yellow' : secondaryColor || 'stone'
   el.classList.add(bgColor)
})

// Set active class on buttons
primaryBtns.forEach(el => {
   if (primaryColor === el.classList[el.classList.length - 1])
      el.classList.add('active')
   el.onclick = () => {
      if (!el.classList.contains('active')) {
         localStorage.setItem(
            'primaryColor',
            el.classList[el.classList.length - 1]
         )
      }
      primaryBtns.forEach(el => el.classList.remove('active'))
      el.classList.add('active')
   }
})
secondaryBtns.forEach(el => {
   if (secondaryColor === el.classList[el.classList.length - 1]) {
      el.classList.add('active')
   }
   el.onclick = () => {
      if (!el.classList.contains('active')) {
         localStorage.setItem(
            'secondaryColor',
            el.classList[el.classList.length - 1]
         )
      }
      secondaryBtns.forEach(el => el.classList.remove('active'))
      el.classList.add('active')
   }
})

// Menu
burger.onclick = e => e.target.classList.toggle('active')

// Close menu on scroll
window.onscroll = () => {
   if (document.documentElement.scrollTop > navbarHeight)
      burger.classList.remove('active')
}

// Dark Theme

themeSwitcher.addEventListener('click', () => {
   themeDark.classList.toggle('active')
   // if (themeInfo.innerHTML == 'Выкл') {
   //    themeInfo.innerHTML = 'Вкл'
   // } else {
   //    themeInfo.innerHTML = 'Выкл'
   // }
   themeInfo.innerHTML == 'Выкл'
      ? (themeInfo.innerHTML = 'Вкл')
      : (themeInfo.innerHTML = 'Выкл')
})
