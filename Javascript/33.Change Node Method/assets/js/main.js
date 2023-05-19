const form = document.querySelector('#form');

const img = form.querySelector('.img')
const select = form.querySelector('.select')
const input = form.querySelector('.input')

select.addEventListener('change',()=>{
  const selectValue = select.value;
  img.src =`./assets/img/Background/Season/${selectValue}`
});

input.addEventListener('change',()=>{
  const colorIndex = input.value;
  img.style.borderColor=`${colorIndex}` ;
})