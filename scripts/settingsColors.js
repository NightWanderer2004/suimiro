const primaryBtns = document.querySelectorAll('.colorsButton.primary')
const secondaryBtns = document.querySelectorAll('.colorsButton.secondary')

const feed = [
   ...document.querySelectorAll('.post'),
   ...document.querySelectorAll('.hint'),
]
const lists = [
   ...document.querySelectorAll('.postLink'),
   ...document.querySelectorAll('.hintLink'),
]

const content = [...feed, ...lists]

const primaryColor = localStorage.getItem('primaryColor')
const secondaryColor = localStorage.getItem('secondaryColor')

// Set uo colors on elements
content.forEach(el => {
   const isPost =
      el.classList.contains('post') || el.classList.contains('postLink')
         ? true
         : false

   const bgColor = isPost ? primaryColor || 'yellow' : secondaryColor || 'stone'
   el.classList.add(bgColor)
})

// Set up class on clicked element
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
