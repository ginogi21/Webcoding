let currentPage = 1;

function loadImage(){
	let image = Array.from({length: 5}, (_, index) => {
		return `<img src = "./assets/img/temp/img${index + 1}.jpg">`;
	});
	let container = document.getElementById('container');
	container.innerHTML += image.join('');
}
loadImage();


/* code for infinite scroll */

window.addEventListener('scroll', ()=>{
	let {scrollTop, clientHeight, scrollHeight} = document.documentElement;

	if(scrollTop + clientHeight >= scrollHeight){
		currentPage ++;
		loadImage()
	}
})