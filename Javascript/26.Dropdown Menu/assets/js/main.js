const btn = document.querySelector('.btn');
const dropdown = document.querySelector('#dropdown1');

btn.addEventListener('click',()=>{
  dropdown.classList.toggle('active');
})