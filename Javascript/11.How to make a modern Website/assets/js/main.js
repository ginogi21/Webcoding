const button = document.querySelector('button');
const light = document.querySelector('.light')
const buttonToggle = document.querySelector('button span');

button.addEventListener('click',()=>{
  light.classList.toggle('on');
  buttonToggle.classList.toggle('on')
})
