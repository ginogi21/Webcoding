const btn = document.querySelector('.btn');
const close = document.querySelector('.close');
const popup = document.querySelector('.popup')

btn.addEventListener('click',()=>{
  popup.classList.add('active');
  btn.style.opacity = 0;
})

close.addEventListener('click',()=>{
  popup.classList.remove('active');
  btn.style.opacity = 1;
})