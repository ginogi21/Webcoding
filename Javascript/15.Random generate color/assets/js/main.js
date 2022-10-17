const box = document.querySelector('.box');
const btn = document.querySelector('.btn');

btn.addEventListener('click',()=>{

  // 0xffffff와 toString(16)을 이해해야 함. 즉,
  // 자바스크립트 다른 언어들과는 다르게 숫자형은 number 하나임.
  // 그럼에도 여러가지 표현이 가능한데 그 중 하나가 16진수인 hexadecimal임.
  // 16진수는 어렵지 않음, 숫자나 문자앞에 0x 란 표시만 붙여주면 된다.
  // 포토샵의 숫자표기 형식 중 0xffffff
  // toString() 메서드는 문자열을 만드는 것이지만 10진수를 16진수 또는 8진수로 표기하도록 할 수 있다.

  let colorIndex ='#'+ Math.floor(Math.random() * 0xffffff).toString(16);

  box.style.backgroundColor = `${colorIndex}`;

})
