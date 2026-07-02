let mainDiv = createMainDiv();
let leftDiv = createLeftDiv();
let rightDiv = createRightDiv();
let addButton = createAddButton();
let task = createTask();
let hold= createHold();

taskCont.style.display = "none";

document.body.appendChild(mainDiv);
mainDiv.appendChild(leftDiv);
mainDiv.appendChild(rightDiv);
leftDiv.appendChild(addButton);
leftDiv.appendChild(task);
rightDiv.appendChild(Hold);

addButton.addEventListener("click", () => {
  task.style.display = "block";
});

function createMainDiv() {
  let maindiv = document.createElement("div");
  maindiv.style.width = "1000px";
  maindiv.style.height = "1000px";
  maindiv.style.border="1px solid black";
  maindiv.style.marginLeft = "20px";
  maindiv.style.display = "flex";
  maindiv.border.radius = "10px"
  return div;
}

function createLeftDiv() {
  let div = document.createElement("div");
  leftdiv.style.width = "480px";
  leftdiv.style.margin = "10px";
  leftdiv.style.display = "flex";
  leftdiv.style.flexDirection = "column";
  leftdiv.style.alignItems = "center";
  leftdiv.border.radius = "10px";
  return div;
}

function createRightDiv() {
  let rytdiv = document.createElement("div");
  rytdiv.style.width = "480px";
  rytdiv.style.margin = "10px";
  return div;
}

function createAddButton() {
  let b = document.createElement("button");
  b.innerText = "Add";
  b.style.width = "200px";
  b.style.height = "60px";
  b.style.margin = "20px";
  b.style.fontSize = "20px";
  b.style.color = "red";
  return b;
}

function createTask() {
  let div = document.createElement("div");
  div.style.width = "300px";
  div.style.padding = "10px";
  div.style.background = "blue";
  div.style.border = "1px solid black";
  div.style.display = "flex";
  div.style.flexDirection = "column";
  div.style.alignItems = "center";
  div.style.borderRadius = "10px";

  let title = document.createElement("input");
  title.placeholder = "Title";
  title.style.margin = "10px";
  title.style.width = "90%";

  let description = document.createElement("textarea");
  description.placeholder = "Description";
  description.style.margin = "10px";
  description.style.width = "90%";
  description.style.height = "100px";

  let b = document.createElement("button");
  b.innerText = "Add Task";
  b.style.margin = "10px";

  btn.addEventListener("click", () => {
    if (title.value === "") {
      alert("Please enter a title");
      return;
    }

    let task = document.createElement("div");
    task.style.margin = "10px";
    task.style.padding = "10px";
    task.style.background = "white";
    task.style.border = "1px solid pink";
    task.style.width = "90%";

    let Title = document.createElement("h4");
    Title.innerText = title.value;

    let tD = document.createElement("p");
    tD.innerText = desc.value;

    task.appendChild(Title);
    task.appendChild(tD);
    Hold.appendChild(task);

    title.value = "";
    descRIPTION.value = "";
    taskCont.style.display = "none";
  });

  div.appendChild(title);
  div.appendChild(desc);
  div.appendChild(btn);
  return div;
}

function createTaskHold() {
  let div = document.createElement("div");
  div.style.width = "440px";
  div.style.height = "900px";
  div.style.overflowY = "auto";
  div.style.padding = "10px";
  div.style.border="1px solid black";
  div.style.background ="blue";
  return div;
}
