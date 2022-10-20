const lists = document.querySelectorAll('.list');


function links(e){
  console.log(e.target);
  lists.forEach(list => list.classList.remove('active'));
  e.target.classList.add('active');
}

lists.forEach(list => list.addEventListener('click', links))


// 또는 this를 이용하는 방법;

// function links(){
//   console.log(this);
//   lists.forEach(list => list.classList.remove('active'));
//   this.classList.add('active');
// }

// lists.forEach(list => list.addEventListener('click', links))