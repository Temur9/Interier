window.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar-section');
        navbar.classList.toggle('sticky', window.scrollY > 0)
    })












    //SCROLL TO TOP
    const scrollBtn = document.querySelector('.scrollToTop-btn')

    window.addEventListener('scroll', () => {
        scrollBtn.classList.toggle('active', window.scrollY > 500)
    })
    scrollBtn.addEventListener('click', () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })
})