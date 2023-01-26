const todoInput =  document.querySelector(".todo-input");
const todoButton =  document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list")
todoButton.addEventListener("click",addTodo);

function addTodo(event){
  event.preventDefault();
  const todoDiv =document.createElement("div");
  todoDiv.classList.add("todo");
  const todoLi=document.createElement("li");
  todoLi.innerText=todoInput.value;
  todoLi.classList.add("todo-item"); 
  todoDiv.appendChild(todoLi);
  todoInput.value="";
  console.log(todoLi);
  const compleatButton = document.createElement("button");
  compleatButton.innerHTML="<li class='fas fa-check'></li>";
  compleatButton.classList.add("complete-btn")
  todoDiv.appendChild(compleatButton);
  const trashButton = document.createElement("button");
  trashButton.innerHTML="<li class='fas fa-trash'></li>";
  trashButton.classList.add("complete-btn")
  todoDiv.appendChild(trashButton);
  todoList.appendChild(todoDiv)


}