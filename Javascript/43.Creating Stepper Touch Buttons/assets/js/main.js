/* mounse를 숫자원위에 올려서 좌우로 움직일 때 숫자가 가감됨(우측으로 움직이면 1씩 증가, 좌측으로 움직이면 1씩 감소) */

const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');
const counter = document.querySelector('.counter');
const totalCount = document.querySelector('p');
let positionPlus;
let number = 0;
let timer;

totalCount.innerHTML = number;

counter.addEventListener('mousemove', (event)=>{
  const position = counter.getBoundingClientRect();
  const x = event.pageX - position.left - position.width / 2;

  positionPlus = (x * 0.02).toFixed(2);

  if(number == 0 && positionPlus < 0){
    positionPlus = (x * 0.01).toFixed(2);
  }

  if(timer) clearTimeout(timer);

  timer = setTimeout(()=>{
    if(positionPlus > 0.65){
      number ++;
      totalCount.innerHTML = number;
    }else if(positionPlus < -0.65 && number != 0){
      number --;
      totalCount.innerHTML = number;
    }
  },100)

  counter.style.transform = `translateX(${positionPlus}em)`;
})
counter.addEventListener('mouseout', ()=>{
  counter.style.transform = `translateX(0)`;
  counter.style.transition = '0.3s cubic-bezier(0.2, 0.70, 0.1, 1.80)';

})