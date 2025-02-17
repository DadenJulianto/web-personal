// Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}

// menuIcon.addEventListener('click', () => {
//     menuIcon.classList.toggle('active');
//     navbar.classList.toggle('active');
// });

// Scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // Remove 'active' class from all links
            navLinks.forEach(link => link.classList.remove('active'));

            // Add 'active' class to the correct link
            let currentLink = document.querySelector(`header nav a[href*="#${id}"]`);
            if (currentLink) {
                currentLink.classList.add('active');
            }
            // active section for animation on scrol
            sec.classList.add('show-animate');

        }
        // if want to use animation that repeats on scroll use this
        else{
            sec.classList.remove('show-animate');

        }
    });

    // Sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', top > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Remove toggle icon and close navbar when clicking navbar links
// navLinks.forEach(link => {
//     link.addEventListener('click', () => {
//         menuIcon.classList.remove('active');
//         navbar.classList.remove('active');
//     });
// });
