// dot 100개 만들기

let container = document.querySelector('.container');
for(i = 1; i <= 100; i++){
  let dot = document.createElement('div');
  dot.classList.add('element');
  container.appendChild(dot)
}


// dot 애니메이션 말들기(www.animejs.com)

let dotAll = document.querySelectorAll('.element');
let animation = anime.timeline({
  targets:dotAll,
  easing:'easeInOutSine',
  loop:true,
  delay:anime.stagger(100,{grid:[10,10], from:'center'})
})
animation
.add({
  rotateZ:180,
  translateY:anime.stagger(-20,{grid:[10,10], from:'center', axis:'y'}),
  translateX:anime.stagger(-20,{grid:[10,10], from:'center', axis:'x'}),
  opacity:1,
})
.add({
  borderRadius:50,
})
.add({
  scale:0.2,
  opacity:0.2,
})
.add({
  rotateZ:180,
  translateY:anime.stagger(0,{grid:[10,10], from:'center', axis:'y'}),
  translateX:anime.stagger(0,{grid:[10,10], from:'center', axis:'x'}),
  opacity:1,
})
.add({
  scale:1,
  borderRadius:0,
})
.add({
  rotateZ:-90,
})