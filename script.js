let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

menuBtn.onclick = () =>{
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

var swiper = new swiper(".course-slider",{
    spaceBetween: 20,
    grabcursor:true,
    loop:true,
    pagination: {
        el: ".swiper-pagination",
        clicktable: true,
    },
    breakpoints: {
        640: {
            slidesperview: 1,
        },
        768: {
            slidesperview: 2,
        },
        1024: {
            slidesperview: 3,
        },
    },
});

var swiper = new swiper(".teachers-slider",{
    spaceBetween: 20,
    grabcursor:true,
    loop:true,
    pagination: {
        el: ".swiper-pagination",
        clicktable: true,
    },
    breakpoints: {
        640: {
            slidesperview: 1,
        },
        768: {
            slidesperview: 2,
        },
        1024: {
            slidesperview: 3,
        },
    },
});

var swiper = new swiper(".reviews-slider",{
    spaceBetween: 20,
    grabcursor:true,
    loop:true,
    pagination: {
        el: ".swiper-pagination",
        clicktable: true,
    },
    breakpoints: {
        640: {
            slidesperview: 1,
        },
        768: {
            slidesperview: 2,
        },
        1024: {
            slidesperview: 3,
        },
    },
});
