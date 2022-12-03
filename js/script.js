// const { active } = require("browser-sync");

// const { active } = require("browser-sync");

function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});

// popup
const contactBtn = document.getElementById('header__btn');
const popupContact = document.getElementById('popup-contact')
const closePopup = document.getElementById('close-popup');
const closeIcon = document.getElementById('close-icon');
const submitBtn = document.getElementById('submit-btn');
const succesPopup = document.getElementById('popup-succes');
const succesOk = document.getElementById('succes-ok');

contactBtn.addEventListener('click', function () {
    popupContact.classList.add('active');
    closePopup.classList.add('active');

});

closePopup.addEventListener('click', function () {
    popupContact.classList.remove('active');
    closePopup.classList.remove('active');
});

closeIcon.addEventListener('click', function () {
    popupContact.classList.remove('active');
    closePopup.classList.remove('active');
});
submitBtn.addEventListener('click', function () {
    popupContact.classList.remove('active');
    closePopup.classList.add('active');
    succesPopup.classList.add('active');
});
succesOk.addEventListener('click', function () {
    closePopup.classList.remove('active');
    succesPopup.classList.remove('active');
});


// const switchBtn = document.querySelectorAll('.switch__button');
// const plans = document.querySelectorAll('.plan__cards');


// for (i = 0; i < switchBtn.length; i++) {
//     switchBtn[i].addEventListener('click', switchPlan)
// }

// function unchekedBtn() {
//     for (i = 0; i < switchBtn.length; i++) {
//         switchBtn[i].classList.remove('activeBtn')
//     }
// }

// function switchPlan() {

//     unchekedBtn()
//     if (this.classList.contains('activeBtn')) {
//         return false
//     } else {
//         this.classList.add('activeBtn');

//     }
// }

const slides = document.querySelectorAll('.plan__cards');
const buttons = document.querySelectorAll('.switch__button');

const activeSlide = () => {
    slides.forEach(slide => {
        slide.classList.add("active");
    })
};

const btnUncheckd = () => {
    buttons.forEach(btnUnch => {
        btnUnch.classList.remove('activeBtn');
    })
};
const slidesUncheckd = () => {
    slides.forEach(slUnch => {
        slUnch.classList.remove('active');
    })
};
buttons.forEach(btn => {
    btn.addEventListener('click', function () {
        slidesUncheckd();
        slides.forEach(slide => {
            if (btn.dataset.index === slide.dataset.index) {
                slide.classList.add('active');
            }
        })
        btnUncheckd();
        btn.classList.add('activeBtn');
    })

});

const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',

    slidesPerView: 2,
    spaceBetween: 170,
    centerInsufficientSlides: true,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    breakpoints: {
        // when window width is >= 320px
        210: {
            slidesPerView: 1,
        },

        992: {
            slidesPerView: 2,

        }


    },

});

const burger = document.querySelectorAll('.header__burger');
const menu = document.querySelectorAll('.header__menu');


burger.forEach(el => {
    el.addEventListener('click', function () {
        menu.forEach(elem => {
            elem.classList.toggle('active');
        })
        burger.forEach(elem => {
            elem.classList.toggle('active');
        })
        document.querySelector('body').classList.toggle('lock');
    })
});