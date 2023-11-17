let navigation = document.querySelector('.navigation');
let menuToggle = document.querySelector('.menuToggle');

menuToggle.addEventListener('click', function(){
  this.classList.toggle('active');
  navigation.classList.toggle('active')
})