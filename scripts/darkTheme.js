const themeSwitcher =
   document.querySelector('.darkthemeCheckbox') || document.createElement('div')
const themeInfo =
   document.querySelector('.darkthemeInfo') || document.createElement('div')

const themeSwitcherSystem =
   document.querySelector('.darkthemeCheckbox.system') ||
   document.createElement('div')
const themeInfoSystem =
   document.querySelector('.darkthemeInfo.system') ||
   document.createElement('div')

let theme = localStorage.getItem('theme')

const setDarkTheme = () => {
   themeSwitcher.checked = true
   themeInfo.innerHTML = 'Вкл'
   document.body.classList.add('dark')
}
const setSystemTheme = () => {
   themeSwitcherSystem.checked = true
   if (window.matchMedia('(prefers-color-scheme: dark)').matches)
      document.body.classList.add('dark')
}

// Проверка, включена ли тёмная тема
if (theme === 'dark') setDarkTheme()
else if (theme === 'system') setSystemTheme()

// Переклюяает тему
themeSwitcher.onchange = () => {
   if (theme === 'light' || theme === 'system')
      document.body.classList.add('dark')
   else document.body.classList.remove('dark')

   if (themeSwitcher.checked) {
      themeInfo.innerHTML = 'Вкл'
      themeSwitcherSystem.checked = false
      theme = 'dark'
   } else {
      themeInfo.innerHTML = 'Выкл'
      theme = 'light'
   }

   const currentTheme = themeSwitcher.checked ? 'dark' : 'light'
   localStorage.setItem('theme', currentTheme)
}
themeSwitcherSystem.onchange = () => {
   if (window.matchMedia('(prefers-color-scheme: dark)').matches)
      document.body.classList.add('dark')
   else document.body.classList.remove('dark')

   if (themeSwitcherSystem.checked) {
      themeSwitcher.checked = false
      themeInfo.innerHTML = 'Выкл'
      theme = 'system'
   } else theme = 'light'

   const currentTheme = themeSwitcherSystem.checked ? 'system' : 'light'
   localStorage.setItem('theme', currentTheme)
}
