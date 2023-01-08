const todolist = [
  "Belajar javascript",
  "Belajar nodejs",
  "Belajar python",
  "Belajar php",
  "Belajar golang",
  "Belajar mysql",
];

function clearTodoList() {
  const ul = document.getElementById("todolistBody");

  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
}

function removeTodoList(index) {
  todolist.splice(index, 1);
  displayTodolist();
}

function addTodoList(index, todo) {
  const ul = document.getElementById("todolistBody");

  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.type = "submit";
  button.onclick = function () {
    removeTodoList(index);
  };
  const icon = document.createElement("i");

  span.textContent = todo;
  icon.className = "bi";
  icon.className = "bi-trash-fill";
  button.className = "bIcon";
  button.appendChild(icon);

  li.appendChild(span);
  li.appendChild(button);
  ul.appendChild(li);
}

function displayTodolist() {
  clearTodoList();
  for (let i = 0; i < todolist.length; i++) {
    const todo = todolist[i];

    addTodoList(i, todo);
  }
}

document.forms["todo-form"].onsubmit = function (event) {
  event.preventDefault();

  const input = document.forms["todo-form"]["add"].value;
  todolist.push(input);

  displayTodolist();

  document.forms["todo-form"].reset();
};
displayTodolist();
