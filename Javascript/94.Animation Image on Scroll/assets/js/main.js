let imageUrl = './assets/img/Background/JPG/Hawaii.jpg';
let container = document.querySelector('.image-container');
let sliceWidth = 20;
let sliceHeight = 20;
let rows = 20;
let cols = 20;
let slices = [];

/* Create slice */
for(let row = 0; row < rows; row++){
	for(let col = 0; col < cols; col++){
		let span = document.createElement('span');
		span.classList.add('image-slice');
		span.style.top = `${row * sliceHeight}px`;
		span.style.left = `${col * sliceWidth}px`;
		span.style.width = `${sliceWidth}px`;
		span.style.height = `${sliceHeight}px`;
		span.style.backgroundImage = `url(${imageUrl})`;
		span.style.backgroundPosition = `-${col * sliceWidth}px -${row * sliceHeight}px`;
		container.appendChild(span);
		slices.push(span);
	}
}

/* add scroll event listener */
window.addEventListener('scroll', () => {
	let scrollPosition = window.scrollY;
	slices.forEach((slice,index) => {
		if(scrollPosition >= index * 1){
			slice.style.transform = 'translate(0,0) rotate(0deg)';
		} else{
			slice.style.transform = `translate(${Math.random() * 100 - 50}vw, ${Math.random() * 100 - 50}vh) rotate(${Math.random() * 360}deg)`;
		}
	})
})
