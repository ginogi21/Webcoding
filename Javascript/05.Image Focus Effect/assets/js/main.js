const focus = document.querySelector('#focus');
const focusHalfWidth = focus.offsetWidth/2;

document.addEventListener('mousemove',(e)=>{
  focus.style.left = e.pageX - focusHalfWidth + 'px';
  focus.style.top = e.pageY - focusHalfWidth + 'px';
})