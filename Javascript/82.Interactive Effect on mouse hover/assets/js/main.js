const text = "Beautiful Sunday";
const textEl = document.querySelector('.text');

const textArray = text.split("");

textArray.forEach((txt)=>{
	const span = document.createElement("span");
	span.innerText = txt;
	if(txt ===" "){
		span.classList.add('empty');
	}

	textEl.appendChild(span)
})