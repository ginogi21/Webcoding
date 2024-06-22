let toggleBtn = document.querySelector('.toggleBtn');
let menu = document.querySelector('.menu');
console.log(toggleBtn)

toggleBtn.addEventListener('click', ()=>{
	menu.classList.toggle('active');
})