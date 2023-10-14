const prevBtn = document.querySelector('.prevbtn');
const nextBtn = document.querySelector('.nextbtn');
const slides= document.querySelectorAll('.slide');

const slideNumber = slides.length;

let num = 0;

nextBtn.addEventListener('click', ()=>{
  slides.forEach((slide) =>{
    slide.classList.remove('active')
  })

  num++;

  if(num > (slideNumber - 1)){
    num = 0;
  }

  slides[num].classList.add('active');
})

prevBtn.addEventListener('click', ()=>{
  slides.forEach((slide) =>{
    slide.classList.remove('active')
  })

  num--;

  if(num < 0 ){
    num = slideNumber - 1;
  }

  slides[num].classList.add('active');
})