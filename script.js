const todoInput =  document.querySelector(".todo-input");
const todoButton =  document.querySelector(".todo-button");

todoButton.addEventListener("click",addTodo);

function addTodo(event){
  event.preventDefault();
  const todoDiv =document.createElement("div");
  todoDiv.classList.add(".todo");
  const todoLi=document.createElement("li");
  todoLi.innerText=todoInput.value;
  console.log(todoLi)

}