let hours = document.getElementById('hour');
let minute = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let ampm = document.getElementById('ampm');

let hr = document.querySelector('#hr');
let mn = document.querySelector('#mn');
let sc = document.querySelector('#sc');

setInterval(()=>{
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  
  let am = h > 12 ? 'PM' : 'AM';

  /* convert 24hrs clock to 12hours clock */
  if(h > 12){
    h = h - 12;
  }

  /* add zero before single digit number */
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;

  hours.innerHTML = h;
  minute.innerHTML = m;
  seconds.innerHTML = s;
  ampm.innerHTML = am;
  hr.style.transform = `rotateZ(${h * 30 + m / 2}deg)`;
  mn.style.transform = `rotateZ(${m * 6}deg)`;
  sc.style.transform = `rotateZ(${s * 6}deg)`;

})

