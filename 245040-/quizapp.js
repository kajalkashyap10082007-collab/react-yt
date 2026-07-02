let form=createForm();
document.body.appendChild(form);


function createForm(){
  let form=document.createElement("div");
  form.style.height="400px";
  form.style.width="400px";
  form.style.border="2px solid black";
  form.innerHTML="LOGIN FORM";
  form.style.fontSize="40px";
  form.style.borderRadius="5px";
  return form;
}

function createName(){
  let name=document.createElement("input");
  name.style.height="50px";
  name.style.width="350px";
  name.style.border="1px solid black";
  name.style.marginTop="15px";
  name.style.marginLeft="5px";
  name.placeholder="Enter your name";
  return name;
}
let name=createName();
form.appendChild(name);

function createEmail(){
  let email=document.createElement("input");
  email.style.height="50px";
  email.style.width="350px";
  email.style.border="1px solid black";
  email.style.marginTop="7px";
  email.style.marginLeft="5px";
  email.placeholder="Enter your email";
  return email;
}
let email=createEmail();
form.appendChild(email);

function createGender(){
  let gender=document.createElement("input");
  gender.style.height="50px";
  gender.style.width="350px";
  gender.style.border="1px solid black";
  gender.style.marginTop="7px";
  gender.style.marginLeft="5px";
  gender.placeholder="Enter your gender";
  return gender;
}
let gender=createGender();
form.appendChild(gender);

function createDOB(){
  let dob=document.createElement("input");
  dob.style.height="50px";
  dob.style.width="350px";
  dob.style.border="1px solid black";
  dob.style.marginTop="7px";
  dob.style.marginLeft="5px";
  dob.placeholder="Enter your dob";
  return dob;
}
let dob=createDOB();
form.appendChild(dob);

function createSubmit(){
  let submit=document.createElement("button");
  submit.innerHTML="Start Test";
  submit.style.border="3px solid black";
  submit.style.marginLeft="80px";
  submit.style.height="40px";
  submit.style.width="100px";
  return submit;
}
let submit=createSubmit();
form.appendChild(submit);

//question list
function createDiv2(){
  let div2=document.createElement("div");
  div2.style.height="400px";
  div2.style.width="400px";
  div2.style.border="2px solid black";
  div2.style.marginTop="20px";
  return div2;
}
let div2=createDiv2();
document.body.appendChild(div2);

function createTestFile(){
  let testfile=document.createElement("div");
  testfile.style.height="100px";
  testfile.style.width="150px";
  testfile.style.border="2px solid black";
  return testfile;
}
let testfile=createTestFile();
div2.appendChild(testfile);
