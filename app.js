const slides = document.querySelectorAll('.slide');
const desktopSlides = document.querySelectorAll('.desktop-slide');


const nextBtn = document.querySelectorAll('.next');
const prevBtn = document.querySelectorAll('.previous');

const img = document.querySelectorAll('.product-img');

const heading1 = document.querySelector('.h1');
const heading2 = document.querySelector('.h2');
const paragraph = document.querySelector('.p');


window.addEventListener("DOMContentLoaded", function(){
   text ()
   });



slides.forEach(function (slide, index) {
    slide.style.left = `${index * 100}%`;
 });


let counter = 0;
nextBtn.forEach(function (next) {
   next.addEventListener("click", function () {
      counter++;
      carousel();
      text ();      
   });
});


prevBtn.forEach(function (previous) {
   previous.addEventListener("click", function () {
      counter--;
      carousel();
      text();
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

 function text(){
  


 if(counter === (slides.length = 0) ){
   heading1.textContent = `“ I’ve been interested in coding for a while but never taken the jump, until now. 
   I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
   excited about the future. ”`
   heading2.textContent = `Tanya Sinclair`
   paragraph.textContent = `UX Engineer`
  }

if(counter === (slides.length = 1) ){
   heading1.textContent = `“ If you want to lay the best foundation possible I’d recommend taking this course. 
   The depth the instructors go into is incredible. I now feel so confident about 
   starting up as a professional developer. ”`
   heading2.textContent = `John Tarkpor`
   paragraph.textContent = `Junior Front-end Developer`
}

 }