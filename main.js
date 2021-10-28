$(document).ready(function () {
    window.addEventListener('scroll', function () {
        let header = document.querySelector('nav');
        let windowPosition = window.scrollY > 0;
        header.classList.toggle('scrolling-active', windowPosition);
    })
    const menuBtn = document.getElementsByClassName('menu-btn')[0]

    const menuLinks = document.getElementsByClassName('menu-links')[0]

    menuBtn.addEventListener('click', () => {
        menuLinks.classList.toggle('active')
    })

// typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Clinical Resource Consultant", "Infusion Safety Specialist", "Professional Medical Rep.", "Medical Consultant", "Research Assistant"],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Clinical Resource Consultant", "Infusion Safety Specialist", "Professional Medical Rep.", "Medical Consultant", "Research Assistant"],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    });


})