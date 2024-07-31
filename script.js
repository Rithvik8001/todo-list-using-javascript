// selectors
const todoInput = document.querySelector(`.todo-input`);
const todoBtn = document.querySelector(`.todo-btn`);
const todoList = document.querySelector(`.todo-list`);

// functions

// function to click the btn to add a todo
const addTodo = (e) => {
  e.preventDefault();

  // todo Div
  const todoDiv = document.createElement(`div`);
  todoDiv.classList.add(`todo`);

  // create li
  const newTodo = document.createElement(`li`);
  newTodo.innerText = todoInput.value;
  newTodo.classList.add(`todo-item`);
  todoDiv.appendChild(newTodo);

  // checkmark btn
  const completedBtn = document.createElement(`button`);
  completedBtn.innerHTML = '<i class="bi bi-check-square"></i>';
  completedBtn.classList.add(`complete-btn`);
  todoDiv.appendChild(completedBtn);

  // delete Btn
  const trashBtn = document.createElement(`button`);
  trashBtn.innerHTML = '<i class="bi bi-trash"></i>';
  trashBtn.classList.add(`trash-btn`);
  todoDiv.appendChild(trashBtn);

  // Append to the ui list
  todoList.appendChild(todoDiv);

  // clear todoInput value
  todoInput.value = "";
};

// function delete the todoList
function deleteTodo(e) {
  // grab the element
  const item = e.target;

  // deleteTodo
  if (item.classList[0] === `trash-btn`) {
    const todo = item.parentElement;
    todo.remove();
  }

  // checkmark
  if (item.classList[0] === `complete-btn`) {
    const todo = item.parentElement;
    todo.classList.toggle(`completed`);
  }
}

// events

todoBtn.addEventListener(`click`, addTodo);
todoList.addEventListener(`click`, deleteTodo);
