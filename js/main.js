var task = document.querySelector('#task'),

  taskBtn = document.querySelector('#addTaskBtn'),

  toDolist = document.querySelector('#toDoList');

/*console.log(task);
console.log(taskBtn);
console.log(toDoList);*/

var createNewTask = function(taskEntered) {
  var listItem = document.createElement('li');
  var checkBox = document.createElement('input');
  var span = document.createElement('span');

  span.innerText = taskEntered;
  checkBox.type = "checkbox";

  listItem.appendChild(checkBox);
  listItem.appendChild(span);

  return listItem;

};

/*console.log(createNewTask("something else"));*/

var addToTaskList = function() {
  var taskItem = createNewTask(task.value);

  toDoList.appendChild(taskItem);

  task.value = "";

  bindTaskList(taskItem, deleteTask);

}

taskBtn.addEventListener('click', addToTaskList);

var bindTaskList = function(taskItem, checkBoxClick) {

  var checkBox = taskItem.querySelector('input[type=checkbox]');

  checkBox.onchange = checkBoxClick;

}

var deleteTask = function() {

  var listItem = this.parentNode;

  listItem.remove(listItem);
}

for (var i = 0; i < toDoList.children.length; i++) {

  bindTaskList(toDoList.children[i], deleteTask);

}
