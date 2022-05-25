const primaryBtns = document.querySelectorAll('.colorsButton.primary')
const secondaryBtns = document.querySelectorAll('.colorsButton.secondary')

const posts = document.querySelectorAll('.post')
const hints = document.querySelectorAll('.hint')

const content = [...posts, ...hints]

const primaryColor = localStorage.getItem('primaryColor')
const secondaryColor = localStorage.getItem('secondaryColor')

content.forEach(el => {
   const isPost = el.classList.contains('post') ? true : false

   const bgColor = isPost ? primaryColor || 'yellow' : secondaryColor || 'stone'
   el.classList.add(bgColor)
})

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
