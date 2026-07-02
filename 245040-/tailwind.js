let mainDiv = createMainDiv();
document.body.appendChild(mainDiv);

function createMainDiv() {
  let maindiv = document.createElement("div");
  maindiv.id = "maindiv";
  maindiv.className = "w-[900px] h-[550px] border-4 border-black flex rounded-[30px] bg-blue-300";
  return maindiv;
}

function createLeftDiv() {
  let leftdiv = document.createElement("div");
  leftdiv.id = "leftdiv";
  leftdiv.className = "w-[500px] h-[500px] border-2 border-black rounded-[20px] pr-[10px] m-[10px] bg-yellow-300";
  return leftdiv;
}

let leftdiv = createLeftDiv();
maindiv.appendChild(leftdiv);

function createRightDiv() {
  let rightdiv = document.createElement("div");
  rightdiv.id = "rightdiv";
  rightdiv.className = "w-[500px] h-[500px] border-2 border-black m-[10px] overflow-scroll rounded-[20px] bg-pink-300";
  return rightdiv;
}

let rightdiv = createRightDiv();
maindiv.appendChild(rightdiv);

function createAddButton() {
  let button = document.createElement("button");
  button.id = "button";
  button.innerText = "Add Task";
  button.className = "h-[50px] w-[100px] border-2 border-black rounded-[10px] mt-[5px] ml-[3px] bg-red-300";
  return button;
}

let button = createAddButton();
leftdiv.appendChild(button);

button.onclick = function () {
  form.style.display = "block";
  title.value = "";
 description.value = "";
};

function createForm() {
  let form = document.createElement("div");
  form.id = "form";
  form.className = "h-[300px] w-[400px] border-2 border-black p-[7px] m-[15px] rounded-[8px]";
  return form;
}

let form = createForm();
leftdiv.appendChild(form);
form.style.display = "none";

function createtitle() {
  let title = document.createElement("input");
  title.id = "input-box";
   title.placeholder = "Enter your Title";
  title.className = "h-[120px] w-[300px] border-2 border-black ml-[5px] mt-[5px] rounded-[10px]";
  return title;
}

let title = createtitle();
form.appendChild(title);

function createDescription() {
  let description = document.createElement("input");
  description.id = "desc-box";
  description.placeholder = "Enter your Description";
  description.className = "h-[140px] w-[300px] border-2 border-black ml-[5px] mt-[5px] rounded-[10px]";
  return description;
}
let description = createDescription();
form.appendChild(description);

function createTask() {
  let task = document.createElement("div");
  task.id = "task";
  task.className = "h-[220px] w-[320px] border-4 border-black mt-[20px] ml-[50px] rounded-[15px] task";
  return task;
}

function createEdit() {
  let edit = document.createElement("button");
  edit.id = "edit";
  edit.innerHTML = "✏";
  edit.className = "h-[30px] w-[30px] border-2 border-black m-[2px]";
  return edit;
  }

function createRemove() {
  let remove = document.createElement("button");
  remove.id = "delete";
  remove.innerHTML = "❌";
  remove.className = "h-[30px] w-[30px] border-2 border-black m-[2px]";
  return remove;
}

function createSubmit() {
  let submit = document.createElement("button");
  submit.id = "submit";
  submit.innerText = "Submit";
  submit.className = "h-[50px] w-[100px] border-4 border-black rounded-full mt-[40px] ml-[50px]";
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
        <h1 class="text-xl font-semibold text-gray-800 mb-2">${taskData.title}</h1>
  <p class="text-gray-600 mb-1">${taskData.description}</p>
  <p class="text-sm text-gray-500">${getRelativeTime(taskData.timestamp)}</p>`;

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