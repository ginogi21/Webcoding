const sec1 = document.querySelector('.sec1');
const sec2 = document.querySelector('.sec2');

window.addEventListener('scroll',function(){
  let value = window.scrollY;
  sec1.style.clipPath = "circle("+value * 1.15+"px at 0 0)";
  sec2.style.clipPath = "circle("+value * 0.90+"px at 100% 100%)";  
})