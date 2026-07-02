let mainDiv = createMainDiv();
document.body.appendChild(mainDiv);

function createMainDiv() {
  let maindiv = document.createElement("div");
  maindiv.id = "maindiv";
  maindiv.style.width = "900px";
  maindiv.style.height = "550px";
  maindiv.style.border = "3px solid black";
  maindiv.style.display = "flex";
  maindiv.style.borderRadius = "30px";
  maindiv.style.backgroundColor="pink";
  return maindiv;
}

function createLeftDiv() {
  let leftdiv = document.createElement("div");
  leftdiv.id = "leftdiv";
  leftdiv.style.width = "500px";
  leftdiv.style.height = "500px";
  leftdiv.style.border = "2px solid black";
  leftdiv.style.borderRadius = "20px";
  leftdiv.style.paddingRight = "10px";
  leftdiv.style.margin = "10px";
  return leftdiv;
}

let leftdiv = createLeftDiv();
maindiv.appendChild(leftdiv);

function createRightDiv() {
  let rightdiv = document.createElement("div");
  rightdiv.id = "rightdiv";
  rightdiv.style.width = "500px";
  rightdiv.style.height = "500px";
  rightdiv.style.border = "2px solid black";
  rightdiv.style.margin = "10px";
  rightdiv.style.overflow = "scroll";
  rightdiv.style.borderRadius="20px";
  return rightdiv;
}

let rightdiv = createRightDiv();
maindiv.appendChild(rightdiv);

function createAddButton() {
  let button = document.createElement("button");
  button.id = "button";
  button.style.height = "50px";
  button.style.width = "100px";
  button.innerText = "Add Task";
  button.style.border = "2px solid black";
  button.borderRadius = "10px";
  button.style.marginTop = "5px";
  button.style.marginLeft = "3px";
  return button;
}

let button = createAddButton();
leftdiv.appendChild(button);
button.onclick = function () {
  form.style.display = "block";
  input.value = "";
  description.value = "";
};

function createForm() {
  let form = document.createElement("div");
  form.id = "form";
  form.style.height = "300px";
  form.style.width = "400px";
  form.style.border = "2px solid black";
  form.style.Padding = "7px";
  form.style.margin = "15px";
  form.style.borderRadius="8px";
  return form;
}

let form = createForm();
leftdiv.appendChild(form);
form.style.display = "none";

function createtitle() {
  let title = document.createElement("input");
  title.id = "input-box";
  title.placeholder = "Enter your Title";
  title.style.height = "120px";
  title.style.width = "300px";
  title.style.border = "1px solid black";
  title.style.marginLeft = "5px";
  title.style.marginTop = "5px";
  return title;
}

let title = createtitle();
form.appendChild(title);

function createDescription() {
  let description = document.createElement("input");
  description.id = "desc-box";
  description.placeholder = "Enter your Description";
  description.style.height = "140px";
  description.style.width = "300px";
  description.style.border = "1px solid black";
  description.style.marginLeft = "5px";
  description.style.marginTop = "5px";
  return description;
}

let description = createDescription();
form.appendChild(description);

function createTask() {
  let task = document.createElement("div");
  task.id = "task";
  task.style.height = "220px";
  task.style.width = "320px";
  task.style.border = "3px solid black";
  task.borderRadius = "20px";
  task.style.marginTop = "20px";
  task.style.marginLeft = "50px";
  task.style.borderRadius="15px";
  task.classList.add("task");
  return task;
}

function createEdit() {
  let edit = document.createElement("button");
  edit.id = "edit";
  edit.style.height = "30px";
  edit.style.width = "30px";
  edit.style.border = "2px solid black";
  edit.style.margin = "2px";
  edit.innerHTML = "✏";
  return edit;
}

function createRemove() {
  let remove = document.createElement("button");
  remove.id = "delete";
  remove.style.height = "30px";
  remove.style.width = "30px";
  remove.style.border = "2px solid black";
  remove.style.margin = "2px";
  remove.innerHTML = "❌";
  return remove;
}

function createSubmit() {
  let submit = document.createElement("button");
  submit.id = "submit";
  submit.style.height = "50px";
  submit.style.width = "100px";
  submit.innerText = "Submit";
  submit.style.border = "3px solid black";
  submit.style.borderRadius = "40px";
  submit.style.marginTop = "40px";
  submit.style.marginLeft = "50px";
  return submit;
}

submit = createSubmit();
form.appendChild(submit);

let currentTaskId = null;

submit.onclick = function () {
  let titletext = title.value;
  let descriptiontext = description.value;

  let currentTimestamp = new Date().getTime(); 


  if (currentTaskId) {
    let task = document.getElementById(currentTaskId);
    task.querySelector(".task-title").innerText = titletext;
    task.querySelector(".task-description").innerText = descriptiontext;
    task.querySelector(".task-time").innerText = getRelativeTime(currentTimestamp);
    form.style.display = "none";
    currentTaskId = null; 
  } else {
    let task = createTask();
    task.id = "task-" + new Date().getTime();
    task.innerHTML = `
      <h1 class="task-title">${titletext}</h1>
      <p class="task-description">${descriptiontext}</p>
      <p class="task-time">${getRelativeTime(currentTimestamp)}</p>`;
    task.timestamp = currentTimestamp;

    let edit = createEdit();
    task.appendChild(edit);
    edit.onclick = () => {
      title.value = task.querySelector(".task-title").innerText;
      description.value = task.querySelector(".task-description").innerText;
      form.style.display = "block";
      currentTaskId = task.id;
    };

    let remove = createRemove();
    task.appendChild(remove);
    remove.onclick = () => {
      rightdiv.removeChild(task);
      updateLocalStorage();
    };

    rightdiv.appendChild(task);
    form.style.display = "none";
  }
  updateLocalStorage();
};

function getRelativeTime(timestamp) {
  const now = new Date().getTime();
  const difference = now - timestamp;

  const seconds = Math.floor(difference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (seconds < 60) {
    return `${seconds} seconds ago;`
  } else if (minutes < 60) {
    return `${minutes} minutes ago;`
  } else if (hours < 24) {
    return `${hours} hours ago;`
  } else {
    return `${days} days ago;`
  }
}

function updateLocalStorage() {
  let tasks = [];
  let taskElements = rightdiv.getElementsByClassName("task");
  for (let task of taskElements) {
    tasks.push({
      title: task.querySelector(".task-title").innerText,
      description: task.querySelector(".task-description").innerText,
      time: task.querySelector(".task-time").innerText,
      id: task.id,
      timestamp: task.timestamp,
    });
  }
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasksFromLocalStorage() {
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  if (tasks) {
    tasks.forEach((taskData) => {
      let taskElement = createTask();
      taskElement.id = taskData.id;
      taskElement.timestamp = taskData.timestamp;

      taskElement.innerHTML = `
        <h1 class="task-title">${taskData.title}</h1>
        <p class="task-description">${taskData.description}</p>
        <p class="task-time">${getRelativeTime(taskData.timestamp)}</p>
      `;
      
      let edit = createEdit();
      taskElement.appendChild(edit);
      edit.onclick = () => {
        title.value = taskElement.querySelector(".task-title").innerText;
        description.value = taskElement.querySelector(".task-description").innerText;
        form.style.display = "block";
        currentTaskId = taskElement.id;
      };

      let remove = createRemove();
      taskElement.appendChild(remove);
      remove.onclick = () => {
        rightdiv.removeChild(taskElement);
        updateLocalStorage();
      };

      rightdiv.appendChild(taskElement);
    });
  }
}

loadTasksFromLocalStorage();
