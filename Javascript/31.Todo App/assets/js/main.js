// 변수지정
const todoForm = document.querySelector('#todo-form');
const todoList = document.querySelector('.todos');
const totalTasks = document.querySelector('#total-tasks');
const completedTasks = document.querySelector('#completed-tasks');
const remainingTasks = document.querySelector('#remaining-tasks');
const mainInput = document.querySelector('#todo-form input');

// 1번째로 작성
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// 4번째로 작성
if(localStorage.getItem('tasks')){
  tasks.map((task)=>{
    createTask(task);
  })
}

// 2번째로 작성
todoForm.addEventListener("submit",(e)=>{
  e.preventDefault();
  
  const inputValue = mainInput.value;

  if(inputValue ===""){
    return;
  }
  const task = {
    id:new Date().getTime(),
    name:inputValue,
    isCompleted:false
  }
  
  tasks.push(task)
  localStorage.setItem('tasks',JSON.stringify(tasks))
  
  createTask(task);

  // 5번째로 작성
  todoForm.reset();
  mainInput.focus();
})

// 8번째로 작성
todoList.addEventListener('click',(e)=>{
  if(e.target.classList.contains('remove-task') || e.target.parentElement.classList.contains('remove-task') || e.target.parentElement.parentElement.classList.contains('remove-task')){
    const taskId = e.target.closest('li').id;

    removeTask(taskId);
  }
})

// 10번째로 작성
todoList.addEventListener('input',(e)=>{
  const taskId = e.target.closest('li').id;

  updateTask(taskId, e.target);
})



// 3번째로 작성
function createTask(task){
  const taskEl = document.createElement("li");

  taskEl.setAttribute('id', task.id);

  if(task.isCompleted){
    taskEl.classList.add('complete');
  }

  const taskElMarkup = `
        <div>
          <input type="checkbox" name="tasks" id="${task.id}" ${task.isCompleted ? "checked" : ""}>
          <span ${!task.isCompleted ? 'contents' : ""}>${task.name}</span>
        </div>
          <button title="Remove "${task.name}"task" class="remove-task">
          <i class="fa-solid fa-trash"></i>
        </button>
  `;

  taskEl.innerHTML = taskElMarkup;
  todoList.appendChild(taskEl);

  // 7번째로 작성
  countTasks()
}

// 6번째로 작성
function countTasks(){
  const completedTasksArray = tasks.filter((task)=>{
    task.isCompleted === true;
  })
  console.log(completedTasksArray)
  totalTasks.textContent = tasks.length;
  completedTasks.textContent = completedTasksArray.length;
  remainingTasks.textContent = tasks.length - completedTasksArray.length;
}

// 9번째로 작성
function removeTask(taskId){
  tasks = tasks.filter((task) =>{
    task.id !== parseInt(taskId);
  })

  localStorage.setItem('tasks', JSON.stringify(tasks));
  document.getElementById(taskId).remove();

  countTasks()
}

// 11번째로 작성
function updateTask(taskId, el){
  const task = tasks.find((task) => task.id === parseInt(taskId));

  if(el.hasAttribute('contents')){
    task.name = el.textContent;
  }else{
    const span = el.nextElementSibling;
    const parent = el.closest('li');

    task.isCompleted = !task.isCompleted;

    if(task.isCompleted){
      span.removeAttribute('contents');
      parent.classList.add('complete');
    }else{
      span.setAttribute('contents','true')
      parent.classList.remove('complete')
    }  
  }

  localStorage.setItem('tasks',JSON.stringify(tasks))

  countTasks();
}