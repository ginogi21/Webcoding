const div = document.getElementById('app');
const p = document.querySelector('p');

let load = 0;
let int = setInterval(blurry, 50)

function blurry(){
  load++
  if(load > 99){
    clearInterval(int);
  }
  p.textContent = `${load}%`
}
