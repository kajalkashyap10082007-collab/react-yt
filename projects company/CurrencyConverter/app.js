const Base_URL="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns=document.querySelectorAll(".dropdown select");
const btn=document.querySelector("form button");
const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select");


for(let select of dropdowns){
    for (currcode in countryList){
      let newoptn=document.createElement("option");
      newoptn.innerText=currcode;
      newoptn.value=currcode;
      if(select.name==="from" && currcode==="USD"){
        newoptn.selected="selected";
      }else if(select.name==="to" && currcode==="INR"){
        newoptn.selected="selected";
      }
      select.append(newoptn);
}
  select.addEventListener("change",(evt)=>{
    updateFlag(evt.target);
  });
}
const updateFlag=(element)=>{
  let currcode=element.value;
  let countryCode=countryList[currcode];
  let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`
  let img=element.parentElement.querySelector('img');
  img.src=newSrc;
};
btn.addEventListener("click", async (evt)=>{
  evt.preventDefault();
  let amount=document.querySelector(".amount input");
  let amtValue=amount.value;
  // console.log(amtValue);
  if(amtValue==="" || amtValue<1){
    amtValue=1;
    amount.value="1";
  }

  // console.log(fromCurr.value,toCurr.value);
const URL= `${Base_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
let response=await fetch(URL);
console.log(response);
let data=await response.json();
let rate=data[toCurr.value.toLowerCase()];
console.log(rate);
});
