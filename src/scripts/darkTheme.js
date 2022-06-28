const themeSwitcher =
   document.querySelector('.darkthemeCheckbox') || document.createElement('div')
const themeInfo =
   document.querySelector('.darkthemeInfo') || document.createElement('div')

const setDarkTheme = () => {
   themeSwitcher.checked = true
   themeInfo.innerHTML = 'Вкл'
   document.body.classList.add('dark')
}

// Проверка, включена ли тёмная тема
if (localStorage.getItem('theme') === 'dark') {
   setDarkTheme()
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
   setDarkTheme()
}
// Переклюяает тему
themeSwitcher.onchange = () => {
   themeSwitcher.checked
      ? (themeInfo.innerHTML = 'Вкл')
      : (themeInfo.innerHTML = 'Выкл')

   const theme = themeSwitcher.checked ? 'dark' : 'light'
   localStorage.setItem('theme', theme)

   document.body.classList.toggle('dark')
}
