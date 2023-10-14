const prevBtn = document.querySelector('.prevbtn');
const nextBtn = document.querySelector('.nextbtn');

const liElement = document.querySelectorAll('li');
const numLi = liElement.length;

let liNumeber = 0;

nextBtn.addEventListener('click', ()=>{
  liElement.forEach((li)=>{
    li.classList.remove('active');
  })

  liNumeber++;  

  if(liNumeber > (numLi -1 )){
    liNumeber = 0 ;
  }
  liElement[liNumeber].classList.add('active');
})

prevBtn.addEventListener('click', ()=>{
  liElement.forEach((li)=>{
    li.classList.remove('active');
  })

  liNumeber--;  

  if(liNumeber < 0 ){
    liNumeber = numLi - 1 ;

  }
  liElement[liNumeber].classList.add('active');
})
