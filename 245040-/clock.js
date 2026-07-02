document.body.style.backgroundColor="orange";
let div11=document.createElement("div");
div11.id="div1";
document.body.appendChild(div11);
let div1=creatediv();
function creatediv(){
    const div1=document.getElementById("div1");
    div1.style.height="350px";
    div1.style.width="1000px";
    div1.style.background="white";
    div1.style.border="5px solid white";
    div1.style.marginTop="17%";
    div1.style.marginLeft="30%";
    div1.style.fontSize="70px";
    div1.style.textAlign="center";
    div1.style.borderRadius="60px";
    div1.style.borderRadius="60px";
    div1.style.fontFamily="Arial";
    div1.style.color="orange";
    div1.style.textShadow="3px 3px 5px orange";
    div1.style.letterSpacing="4px";
    return div1;
}

setInterval(()=>{
    let date=new Date();
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours=hours<10?'0' + hours : hours;
    minutes=minutes<10?'0' + minutes : minutes;
    seconds=seconds<10?'0' + seconds : seconds;
    div1.innerHTML=`<h1>${hours}:${minutes}:${seconds} ${ampm}</h1>`,1000});
