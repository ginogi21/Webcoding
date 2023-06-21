const rating = document.getElementsByClassName('rating')[0];
const block = document.getElementsByClassName('block');

for(let i = 0; i < 100; i++){
  rating.innerHTML +=`<div class="block"></div>`;
  block[i].style.transform = `rotate(${3.6 * i}deg)`;  /* <== 360deg/100 = 3.6deg */
  block[i].style.animationDelay = `${i/40}s`;

  /* now, animate this number */
  const counter = document.querySelector('.counter');
  counter.innerText = 0;

  const target = +counter.getAttribute('data-target');

  const NumberCounter = () =>{
    const value = +counter.innerText;
    if(value < target){
      counter.innerText  = Math.ceil(value + 1);
      setTimeout(()=>{
        NumberCounter()
      },25)
    }
  }
  NumberCounter()
}
