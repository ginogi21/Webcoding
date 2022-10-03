const bgColor = document.querySelector('.box');
const button = document.querySelector('.btn')


let colorIndex = ["#FF74B1","#002E94","#F96666","#829460","#EADEDE"];
let borderIndex = ["10px","20px","30px","40px","50px"]


let i = 0 ;
let j = 0 ;
button.addEventListener('click',()=>{
  if(i >= colorIndex.length && borderIndex.length){
    i = 0;
    j = 0;
  }
  //CSS variable를 변경하는 공식
  // bgColor.style.cssText = `--bg-color:${colorIndex[i++]}`;

  bgColor.style.setProperty('--bg-color',colorIndex[i++])
  bgColor.style.setProperty('--br-radius',borderIndex[j++])
})

