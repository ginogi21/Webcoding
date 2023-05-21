const del = document.getElementById('del');
const list = document.querySelectorAll('.check');

function delElement(){
  for( let i=0; i < list.length; i++){

    if(list[i].checked){
      list[i].parentElement.parentElement.remove();
    }    
  }

}

del.addEventListener("click", delElement);

const allCheck = document.querySelector('.allCheck');

allCheck.addEventListener('click',()=>{
  if(allCheck.checked){
    list.forEach((e)=>{
      e.checked = true;
    })
  }else{
    list.forEach((e)=>{
      e.checked = false;
    })
  }
})

