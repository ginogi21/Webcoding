let bounceElement = document.querySelector('span'),
		btn1 = document.querySelector('.btn1'),
		btn2 = document.querySelector('.btn2');

btn2.addEventListener('click', () =>{
	gsap.to(bounceElement, {
		duration:2.5,
		ease: "elastic.inOut(1,0.3)",
		x: "100%",
		background: "linear-gradient(239deg, #4cddaa, #5eff35)"
		});
})

btn1.addEventListener('click', () =>{
	gsap.to(bounceElement, {
		duration:2.5,
		ease: "elastic.inOut(1,0.3)",
		x: "0%",
		background: "linear-gradient(239deg, #4c60dd, #d435ff)"
		});
})