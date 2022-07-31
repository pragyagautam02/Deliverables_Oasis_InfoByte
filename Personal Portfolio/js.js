let object1 = document.querySelector('.home__object--1');
let object2 = document.querySelector('.home__object--2');
let object3 = document.querySelector('.home__object--3');
let object4 = document.querySelector('.home__object--4');
let object5 = document.querySelector('.home__object--5');
let photo = document.querySelector('.home__photo');
let about = document.querySelector('.about__window');
let scrollback = document.querySelector('.footer__scroll-back');

let style1 = getComputedStyle(object1);
let styleTop1 = style1.top;
let valueTop1 = parseFloat(styleTop1);

let style2 = getComputedStyle(object2);
let styleTop2 = style2.top;
let valueTop2 = parseFloat(styleTop2);

let style3 = getComputedStyle(object3);
let styleTop3 = style3.top;
let valueTop3 = parseFloat(styleTop3);

let style4 = getComputedStyle(object4);
let styleTop4 = style4.top;
let valueTop4 = parseFloat(styleTop4);

let style5 = getComputedStyle(object5);
let styleTop5 = style5.top;
let valueTop5 = parseFloat(styleTop5);

let style6 = getComputedStyle(about);
let styleTop6 = style6.top;
let valueTop6 = parseFloat(styleTop6);

window.addEventListener('scroll', function () {
    let valueScroll = window.scrollY;

    object1.style.top = valueTop1 + valueScroll * 0.6 + 'px';
    object1.style.transform = "rotate(" + valueScroll + "deg)";
    object2.style.top = valueTop2 + valueScroll * 0.8 + 'px';
    object2.style.transform = "rotate(" + valueScroll * 0.3 + "deg)";
    object3.style.top = valueTop3 + valueScroll * 0.25 + 'px';
    object3.style.transform = "rotate(" + valueScroll * -0.4 + "deg)";
    object4.style.top = valueTop4 + valueScroll * 0.25 + 'px';
    object4.style.transform = "rotate(" + valueScroll * -0.3 + "deg)";
    object5.style.top = valueTop5 + valueScroll * 0.3 + 'px';
    object5.style.transform = "rotate(" + valueScroll * 0.3 + "deg)";
    if (valueScroll > 0) {
        photo.style.transform = 'scale(' + 1 + ')';
    } else {
        photo.style.transform = 'scale(' + 1.5 + ')';
    }
    if (valueTop6 - valueScroll * 0.9 <= 32) {
        about.style.top = 0;
    } else {
        about.style.top = valueTop6 - valueScroll + 'px';
    }
})

scrollback.addEventListener('click', function () {
    window.scrollTo(0, 0);
})