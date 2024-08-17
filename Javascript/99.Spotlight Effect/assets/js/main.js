let body = document.querySelector('body');
let spotlight = document.querySelector('.spotlight');

window.addEventListener('mousemove',(e)=>{
	spotlight.style.top = e.clientY + 'px';
	spotlight.style.left = e.clientX + 'px';
})

body.addEventListener('dblclick',function(){
	body.classList.toggle('active');	
})