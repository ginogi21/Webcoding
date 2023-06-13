/* Button을 선택했을 때 선택된 버튼외에 모든 버튼은 선택해제하는 방법 */

const lists = document.querySelectorAll('li');

function active(){
  lists.forEach(list =>{
    list.classList.remove('active');
    this.classList.add('active')
    /* this에 대하여 더 알아야 함 */
  })
}

lists.forEach((e)=>{
  e.addEventListener('click', active)
})