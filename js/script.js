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


    // REVEAL
    const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 2000,
        delay: 400,
        // reset:true

    })

    sr.reveal(`#header-section_home-title`)
    sr.reveal(`#header-section_home-text`, {delay:500})
    sr.reveal(`#header-section_home-btn`, {delay:600})
    sr.reveal(`.header-section_home-right`, {delay:700,origin:'bottom'})
    sr.reveal(`.video-container`, {origin:'bottom'})
    sr.reveal(`.tutorial-section_mission-left`, {origin:'left'})
    sr.reveal(`.tutorial-section_mission-right`, {origin:'right'})
    sr.reveal(`.room-info`, {distance:'30px'})
    sr.reveal(`.mid-info,.room-image`, {origin:'bottom',distance:'30px'})
    sr.reveal(`.mid-image`, {origin:'top',distance:'30px'})
    sr.reveal(`.partners`, {interval:30})
    sr.reveal(`.numbers`, {origin:'bottom',distance:'30px'})
    sr.reveal(`#numbers-text`, {origin:'bottom',distance:'60px',delay:700})
    sr.reveal(`.contact-text`, {origin:'left'})
    sr.reveal(`.contact-form`, {origin:'right'})



})