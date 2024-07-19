/* document.addEventListener('DOMContentLoaded', () => {
	let cube = document.querySelector('.cube');

	document.addEventListener('mousemove',(e) => {
		let x = e.clientX / window.innerWidth - 0.5;
		let y = e.clientY / window.innerHeight -0.5;
		cube.style.transform = `rotateX(${y * 360}deg) rotateY(${x * 360}deg)`;
	})

});
 */


document.addEventListener('mousemove',(e) => {
	let cube = document.querySelector('.cube');
	let x = e.clientX / window.innerWidth - 0.5;
	let y = e.clientY / window.innerHeight -0.5;
	cube.style.transform = `rotateX(${y * 360}deg) rotateY(${x * 360}deg)`;
})
