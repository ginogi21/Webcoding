let section = document.querySelector('section');

window.addEventListener('scroll', function(){
  let value = this.window.scrollY;
  section.style.clipPath = `circle(${value*2.1}px at left center)`;
})