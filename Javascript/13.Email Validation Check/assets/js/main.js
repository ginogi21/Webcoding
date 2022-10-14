let form = document.querySelector('#form');
let text = document.  querySelector('#text');
let email = document.querySelector('#email');

function validate(){
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if(email.value.match(pattern)){
    form.classList.add('valid');
    form.classList.remove('invalid');
    text.innerHTML = "Your Email Address is Valid";
    text.style.color = '#4caf50';
  }else{
    form.classList.remove('valid');
    form.classList.add('invalid');
    text.innerHTML = "Please Enter Valid Email Address";
    text.style.color = '#f44336';
  }
  if(email.value == ""){
    form.classList.remove('valid');
    form.classList.remove('invalid');
    text.innerHTML = "";
  }
}

email.addEventListener('keyup',validate)