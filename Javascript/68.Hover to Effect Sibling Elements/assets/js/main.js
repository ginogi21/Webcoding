const boxes = document.querySelectorAll('.box');

boxes.forEach(box =>{
  box.addEventListener('mouseover',(event) => {
    const preSibling = event.target.previousElementSibling;
    const prevPrevSibling = preSibling?.previousElementSibling;

    const nextSibling = event.target.nextElementSibling;
    const nextNextSibling = nextSibling?.nextElementSibling;

    event.target.classList.add('hovered');

    if(prevPrevSibling){
      prevPrevSibling.classList.add('prev2');
    }
    if(preSibling){
      preSibling.classList.add('prev1');
    }
    if(nextNextSibling){
      nextNextSibling.classList.add('next2');
    }
    if(nextSibling){
      nextSibling.classList.add('next1');
    }
  })
  box.addEventListener('mouseout', (event) => {
    const parent = event.target.parentElement;
    const siblings = parent.querySelectorAll('.next1,.next2,.prev1,.prev2,.hovered');
    siblings.forEach(sibling => sibling.classList.remove('next1','next2','prev1','prev2','hovered'))
  })
})