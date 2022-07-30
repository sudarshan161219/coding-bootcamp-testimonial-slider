const slides = document.querySelectorAll('.slide');
const desktopSlides = document.querySelectorAll('.desktop-slide');


const nextBtn = document.querySelectorAll('.next');
const prevBtn = document.querySelectorAll('.previous');

const img = document.querySelectorAll('.product-img');

const heading = document.querySelector('.heading-one');
const paragraph = document.querySelector('.paragraph-one');

const desktopHeading = document.querySelector('.desktop-heading-one');
const desktopParagraph = document.querySelector('.desktop-paragraph-one');

const nav = document.querySelector('.menu');
const menu = document.querySelector('.navigation')
const close = document.querySelector('.close');
const background = document.querySelector('.background')


slides.forEach(function (slide, index) {
    slide.style.left = `${index * 100}%`;

    
 });


let counter = 0;
nextBtn.forEach(function (next) {
   next.addEventListener("click", function () {
      counter++;
      carousel();
    //   text ()
    
          
 
   });
});


prevBtn.forEach(function (previous) {
   previous.addEventListener("click", function () {
      counter--;
      carousel();
    //   text ()
   });
});



function carousel() {
    if (counter === slides.length) {
       counter = 0;
      
    }
    if (counter < 0) {
       counter = slides.length - 1;
      
    }
    slides.forEach(function (slide) {
       slide.style.transform = `translateX(-${counter * 100}%)`
    });

  
 }