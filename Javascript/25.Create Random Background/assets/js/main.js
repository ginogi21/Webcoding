const container = document.querySelector('.container');
const generateBtn = document.querySelector('.generateBtn');
const circleBtn = document.querySelector('.circleBtn')

// . div Tag를 80개 만든다.
for(let i = 0; i<=80; i++){
  let blocks = document.createElement('div');
  blocks.classList.add('block');
  container.appendChild(blocks);
}

// 2. 구글에서 animejs cdn을 검색하고
//   https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js를 복사해서 HTML문서 Head에 붙여 넣는다.


// 3. 아래 함수로 Random 박스를 만들고 Generate버튼을 클릭하면 실행되게 한다. 

generateBtn.addEventListener('click',generate);

function generate(){
  anime({
    targets : '.block',
    translateX : function(){
      return anime.random(-700, 700);
    },
    translateY : function(){
      return anime.random(-500, 500);
    },
    scale : function(){
      return anime.random(1,5)
    }
  })
}
generate();


// 4. Circle버튼을 클릭하면, 원이되도록하는 함수

circleBtn.addEventListener('click',circle)

function circle(){
  container.classList.toggle('circle');
}
circle();