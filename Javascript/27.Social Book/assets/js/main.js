const navBar = document.querySelector('.nav-user-icon');
const setMenu = document.querySelector('.settings-menu');
const modeBtn = document.querySelector('#dark-btn');

navBar.addEventListener('click',()=>{
  setMenu.classList.toggle('active');
});

modeBtn.addEventListener('click',()=>{
  modeBtn.classList.toggle('dark-btn-on');
  document.body.classList.toggle("dark-theme");

  if(localStorage.getItem("theme") == "light"){
    localStorage.setItem("theme","dark");
  }else{
    localStorage.setItem("theme","light");
  }

});


if(localStorage.getItem("theme") == "light" ){
  modeBtn.classList.remove('dark-btn-on');
  document.body.classList.remove("dark-theme");
}
else if(localStorage.getItem("theme") == "dark"){
  modeBtn.classList.add('dark-btn-on');
  document.body.classList.add("dark-theme");
}
else{
  localStorage.setItem("theme","light");
}
