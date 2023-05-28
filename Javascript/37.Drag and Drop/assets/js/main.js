let lists = document.querySelectorAll('.list');
let leftBox = document.querySelector('#left');
let rightBox = document.querySelector('#right');

lists.forEach((list)=>{
  list.addEventListener('dragstart',(e)=>{
    let selected = e.target;

    rightBox.addEventListener('dragover',(e)=>{
      e.preventDefault();
    });

    rightBox.addEventListener('drop',(e)=>{
      rightBox.appendChild(selected);
      selected = undefined;
    })

    
    leftBox.addEventListener('dragover',(e)=>{
      e.preventDefault();
    });

    leftBox.addEventListener('drop',(e)=>{
      leftBox.appendChild(selected);
      selected = undefined;
    })
    
  })
})

/* 위 code에서 다음과 같은 Error발생함 : 
    Uncaught TypeError: Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'.
    at HTMLDivElement.<anonymous> */