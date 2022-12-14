'use strict'

const bikeImages = document.querySelectorAll('.bike__slide img');
const bikeBody = document.querySelector('.bike__slide-img');
const bikeDots = document.querySelectorAll('.bike__btn-group input');

const slideImages = document.querySelectorAll('.slide__line img');
const slideBody = document.querySelector('.slide__line');
const slideDots = document.querySelectorAll('.slide__btn-group input');

const priceRadio = document.querySelectorAll('.form__label-box');
const priceImages = document.querySelectorAll('.price__goods');

const menuButton = document.querySelector('.menu-button');
const menuMob = document.querySelector('.menu-mob');

menuButton.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    menuButton.classList.toggle('active-btn');
    menuMob.classList.toggle('active');
})
document.body.addEventListener('click', function () {
    menuButton.classList.remove('active-btn');
    menuMob.classList.remove('active');
})

let indexSlide = 0;
let indexBike = 0;
let indexPrice = 1;

priceRadio.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        priceImages.forEach(i => i.classList.remove('showed'));
        priceRadio.forEach(i => i.classList.remove('select'));
        indexPrice = index;
        priceImages[indexPrice].classList.add('showed');
        priceRadio[indexPrice].classList.add('select');
    })
})

bikeBody.addEventListener('click', () => {
    bikeDots[indexBike].classList.remove('active');
    bikeImages[indexBike].classList.remove('showed');
    indexBike++;
    if (indexBike >= bikeImages.length) indexBike = 0;
    bikeDots[indexBike].classList.add('active');
    bikeImages[indexBike].classList.add('showed');
})

bikeDots.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        bikeImages.forEach(i => i.classList.remove('showed'));
        bikeDots.forEach(i => i.classList.remove('active'));
        indexBike = index;
        bikeImages[indexBike].classList.add('showed');
        bikeDots[indexBike].classList.add('active');
    })
})

slideBody.addEventListener('click', () => {
    slideDots[indexSlide].classList.remove('active');
    slideImages[indexSlide].classList.remove('showed');
    indexSlide++;
    if (indexSlide >= slideImages.length) indexSlide = 0;
    slideDots[indexSlide].classList.add('active');
    slideImages[indexSlide].classList.add('showed');
})

slideDots.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        slideImages.forEach(i => i.classList.remove('showed'));
        slideDots.forEach(i => i.classList.remove('active'));
        indexSlide = index;
        slideImages[indexSlide].classList.add('showed');
        slideDots[indexSlide].classList.add('active');
    })
})


