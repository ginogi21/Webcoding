window.addEventListener('scroll', ()=>{
	let scrollY = window.scrollY;
	let totallHeight = document.body.scrollHeight - window.innerHeight;
	let percentScolled = (scrollY/totallHeight) * 100;
	let translateX = (percentScolled/5) * (-4);
	document.querySelector('.container').style.transform = `translateX(${translateX}%)`;	
})