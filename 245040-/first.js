
//square

const div1 = document.getElementById("div1");
console.log(document);
div1.style.border = "10px solid red";
div1.style.width = "300px";
div1.style.height = "300px";
div1.style.margin="40px";
 console.log(div1);


function Creatediv2(){
const div2 = document.getElementById("div2");
 div2.style.border="10px solid blue";
div2.style.width="200px";
div2.style.height="200px";
div2.style.margin="40px";
return div2;
 }
div1.append(Creatediv2());

function Creatediv3(){
const div2 = document.getElementById("div3");
div3.style.border="10px solid yellow";
div3.style.width="100px";
div3.style.height="100px";
div3.style.margin="40px";
return div3;
 }
div2.append(Creatediv3());



//circle
const div4 = document.getElementById("div4");
div4.style.border = "10px solid red";
div4.style.width = "300px";
div4.style.height = "300px";
div4.style.borderRadius = "50%";
div5.style.margin="40px";
console.log(div4);

function Creatediv5(){
const div2 = document.getElementById("div5");
 div5.style.border="10px solid blue";
div5.style.width="200px";
div5.style.height="200px";
div5.style.margin="40px";
div5.style.borderRadius = "50%";
return div5;
 }
div4.append(Creatediv5());


function Creatediv6(){
const div2 = document.getElementById("div6");
 div6.style.border="10px solid yellow";
div6.style.width="100px";
div6.style.height="100px";
div6.style.margin="40px";
div6.style.borderRadius = "50%";
return div6;
 }
div5.append(Creatediv6());



