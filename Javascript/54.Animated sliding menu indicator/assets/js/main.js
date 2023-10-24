let indicator = document.querySelector('#indicator');
let items = document.querySelectorAll('nav a');

function marker(e){
/*   console.log(e) */
  indicator.style.left = e.offsetLeft + "px";
/*   console.log(e.offsetLeft + "px") */
  indicator.style.width = e.offsetWidth + "px";
/*   console.log(e.offsetWidth + "px") */
}

items.forEach(link =>{
  link.addEventListener('click', (e)=>{
    marker(e.target)
  })
})