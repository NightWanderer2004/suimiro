const primaryBtns = document.querySelectorAll('.colorsButton.primary')
const secondaryBtns = document.querySelectorAll('.colorsButton.secondary')

const posts = document.querySelectorAll('.post')
const hints = document.querySelectorAll('.hint')

const content = [...posts, ...hints]

const primaryColor = localStorage.getItem('primaryColor')
const secondaryColor = localStorage.getItem('secondaryColor')

content.forEach(el => {
   const isPost = el.classList.contains('post') ? true : false

   const bgColor = isPost ? primaryColor : secondaryColor
   const textColor = isPost
      ? primaryColor === 'yellow' || primaryColor === 'orange'
         ? 'text-dark'
         : 'text-white'
      : secondaryColor === 'yellow' || secondaryColor === 'orange'
      ? 'text-dark'
      : 'text-white'

   if (primaryColor || secondaryColor) el.classList.add(bgColor, textColor)
   else if (isPost) el.classList.add('yellow', 'text-dark')
   else el.classList.add('emerald', 'text-white')
})

primaryBtns.forEach(el => {
   if (primaryColor === el.classList[el.classList.length - 1]) {
      el.classList.add('border-dark')
   }
   el.onclick = () => {
      localStorage.setItem(
         'primaryColor',
         el.classList[el.classList.length - 1]
      )
      primaryBtns.forEach(el => {
         el.classList.remove('border-dark')
      })
      el.classList.add('border-dark')
   }
})
secondaryBtns.forEach(el => {
   if (secondaryColor === el.classList[el.classList.length - 1]) {
      el.classList.add('border-dark')
   }
   el.onclick = () => {
      localStorage.setItem(
         'secondaryColor',
         el.classList[el.classList.length - 1]
      )
      secondaryBtns.forEach(el => {
         el.classList.remove('border-dark')
      })
      el.classList.add('border-dark')
   }
})
