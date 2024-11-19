let container = document.querySelector('body');

container.addEventListener('click', (event)=>{
	let spark = document.createElement('div');
	spark.classList.add('spark');
	spark.style.top = (event.clientY - container.offsetTop) + 'px';
	spark.style.left = (event.clientX - container.offsetLeft) + 'px';
	spark.style.filter = 'hue-rotate('+ Math.random() * 360 +'deg)';
	container.appendChild(spark);

	for(let i = 0; i <= 7; i++ ){
		let span = document.createElement('span');
		span.style.transform = 'rotate('+(i * 45)+'deg)';
		spark.appendChild(span);
	}

	setTimeout(()=>{
		spark.remove()
	},1500)
})