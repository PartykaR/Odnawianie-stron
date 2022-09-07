document.addEventListener('DOMContentLoaded', function () {
   const nav = document.querySelector('.navbar')
   const allNavItems = document.querySelectorAll('.nav-link')
   const navList = document.querySelector('.navbar-collapse')

   function addShadow() {
      if (window.scrollY >= 30) {
         nav.classList.add('shadow-bg')
      } else {
         nav.classList.remove('shadow-bg')
      }
   }

   allNavItems.forEach(item => item.addEventListener('click', () => navList.classList.remove('show')))


   window.addEventListener('scroll', addShadow)

})

const cookieBox = document.querySelector('.cookie-box')
const cookieBtn = document.querySelector('.cookie-btn')

const showCookie = () => {
   const cookieEaten = localStorage.getItem('cookie')
   console.log(cookieEaten);
   if (cookieEaten) {
      cookieBox.classList.add('hide')
   }
}

const handleCookieBox = () => {
   localStorage.setItem('cookie', 'true')
   cookieBox.classList.add('hide')
}

cookieBtn.addEventListener('click', handleCookieBox)
showCookie()

const footerYear = document.querySelector('.footer__year')

const handleCurrentYear = () => {
   const year = (new Date).getFullYear();
   footerYear.innerText = year;
}
handleCurrentYear();