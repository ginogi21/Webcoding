let sun = document.querySelector('.sun');
let body = document.querySelector('body');

sun.addEventListener('click', ()=>{
  body.classList.toggle('dark');
})