const boxes = document.querySelectorAll('.box'),
			image = document.querySelector('.image');

boxes.forEach((box) => {
	box.addEventListener('dragover', (e) =>{
		e.preventDefault();
		box.classList.add('hovered');
	});

	box.addEventListener('dragleave', () =>{
		box.classList.remove('hovered')
	})
	/* When a draggable element is dropped on a box elemen */
	box.addEventListener('drop', () =>{
		box.appendChild(image);
		box.classList.remove('hovered');
	})
})