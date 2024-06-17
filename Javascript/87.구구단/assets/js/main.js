let i,j;
let body = document.querySelector('body');

for(i = 1; i <= 9; i++){
	let div = document.createElement('div')
		div.innerHTML += `<h2>${i}단</h2>`;
		body.appendChild(div);
	for(j = 1; j <= 9; j++){
		div.innerHTML += `<p>${i} x ${j} = ${i*j}</p>`;	
	}
}	

