const div1 = document.getElementById("div1");
div1.style.width = "300px";
div1.style.height = "300px";
div1.style.backgroundColor = "pink";
div1.style.display = "inline-block";
div1.addEventListener("click",function (){
   if(div1.style.backgroundColor === "pink"){
    div1.style.backgroundColor = "purple";
   }
   else{
    div1.style.backgroundColor = "pink";
   }
});
console.log(div1);



const div2 = document.getElementById("div2");
div2.style.width = "300px";
div2.style.height = "300px";
div2.style.backgroundColor = "blue";
div2.style.display = "inline-block";
div2.addEventListener("click",function (){
   if(div2.style.backgroundColor === "blue"){
    div2.style.backgroundColor = "black";
   }
   else{
    div2.style.backgroundColor = "blue";
   }
});    
console.log(div2);


const div3 = document.getElementById("div3");
div3.style.width = "300px";
 div3.style.height = "300px";
div3.style.backgroundColor = "brown";
div3.style.display = "inline-block";
div3.addEventListener("click",function (){
   if(div3.style.backgroundColor === "brown"){
    div3.style.backgroundColor = "black";
   }
   else{
    div3.style.backgroundColor = "brown";
   }
});    
console.log(div3);

const div4 = document.getElementById("div4");
div4.style.width = "300px";
 div4.style.height = "300px";
div4.style.backgroundColor = "orange";
div4.style.display = "inline-block";
div4.addEventListener("click",function(){
if(div4.style.backgroundColor === "orange"){
 div4.style.backgroundColor = "olive";
   }
else{
    div4.style.backgroundColor = "orange";
  }
   });
console.log(div4);

