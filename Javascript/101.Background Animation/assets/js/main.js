let section = document.querySelector('section');

for(let i = 0; i < 600; i++){
	div = document.createElement('div');
	section.appendChild(div)
}

document.addEventListener('mousemove', (e) => {
	document.querySelectorAll('div').forEach(div => {
		let x = (div.offsetLeft) - e.pageX;
		let y = (div.offsetTop) - e.pageY;
		let dist = Math.sqrt(x * x + y * y);
		let score = Math.exp(dist * -0.01);
		div.style.transform = "scale("+ score * 4 +")";
	})
})