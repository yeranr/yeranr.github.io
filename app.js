const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");
const hamburger = document.querySelector(".hamburger");
const headline = document.querySelector(".headline");


const tl = new TimelineMax();

tl.fromTo(hero,1, {height: "0%"}, {height: "80%", ease: Power2.easeInOut })
.fromTo(hero, 1.2, {width: "100%"}, {width: "80%", ease: Power2.easeInOut })
.fromTo(slider, 1.2, {x: "-100%"}, {x:  "0%", ease: Power2.easeInOut }, "-=1.2");

const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

//Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//Counter 
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';

//Button Listeners

nextBtn.addEventListener('click',()=>{
    if (counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 1s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
});

prevBtn.addEventListener('click',()=>{
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 1s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
});

carouselSlide.addEventListener('transitionend', ()=>{
    if (carouselImages[counter].id === 'lastClone'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2; 
        carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
    }
    if (carouselImages[counter].id === 'firstClone'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter; 
        carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
    }
});

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    })
    //Animate Links
    navLinks.forEach((link, index)=> {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`;        
    });
}

navSlide();

var audio = new Audio("soundfile.wav");

document.onclick = function() {
  audio.play();
}
