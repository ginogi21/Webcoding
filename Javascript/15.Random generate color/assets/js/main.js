const box = document.querySelector('.box');
const btn = document.querySelector('.btn');

btn.addEventListener('click',()=>{

/*  0xffffff와 toString(16)을 이해해야 함. 즉,
    자바스크립트는 다른 언어들과는 다르게 숫자형은 number의 하나임.
    그럼에도 여러가지 표현이 가능한데 그 중 하나가 16진수인 hexadecimal임.
    <hexadecimal></hexadecimal>
    There are 16 Hexadecimal digits. They are the same as the decimal digits up to 9, but then there are the letters A, B, C, D, E and F in place of the decimal numbers 10 to 15:
    Hexadecimal:	0	1	2	3	4	5	6	7	8	9	A  B	 C	 D	 E	F
    Decimal:    	0	1	2	3	4	5	6	7	8	9	10 11	12	13	14	15

    16진수는 어렵지 않음, 숫자나 문자앞에 0x 란 표시만 붙여주면 된다.
    포토샵의 숫자표기 형식 중 0xffffff
    toString() 메서드는 문자열을 만드는 것이지만 10진수를 16진수 또는 8진수로 표기하도록 할 수 있다. */

  let colorIndex ='#'+ Math.floor(Math.random() * 0xffffff).toString(16);
  console.log(colorIndex)
  box.style.backgroundColor = `${colorIndex}`;

})
