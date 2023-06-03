const bodyColor = document.querySelector('body');
const colorText = document.querySelector('.color');
const btn = document.querySelector('.btn');


const generateRandomColor = ()=>{
  const letters= '0123456789ABCDEF';
  let hash = '#';
  for(let i = 0; i < 6; i++){
    hash += letters[Math.floor(Math.random()*16)];
  }
  return hash;
}

btn.addEventListener('click',()=>{
  bodyColor.style.background = generateRandomColor();
  colorText.innerHTML = generateRandomColor();
})


