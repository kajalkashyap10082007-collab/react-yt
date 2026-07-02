// import { useState } from "react"
// function App() {
//   const [count , setCount]=useState(0);
//   const updatecount=(value)=>{
//     setCount(prev=>{const newValue=prev+value;
//       return newValue<0?0:newValue;
//     });
//   }
//   return (
//     <>
//      <h1>Count:{count}</h1>
//      <button onClick={()=>setCount((prev)=>prev+1)}>+1</button>
//      <button onClick={()=>setCount((prev)=>prev+2)}>+2</button>
//      <button onClick={()=>setCount((prev)=>prev+5)}>+5</button>
//      <button onClick={()=>updatecount(-1)}>-1</button>
//      <button onClick={()=>setCount((prev)=>prev*2)}>*2</button>
//      <button onClick={()=>setCount((prev)=>prev*0)}>Reset</button>
//     </>
//   )
// }
// export default App



// import { useState } from "react"
// import  Button  from "./component/Button"
// function App(){
//   const [count,setCount] = useState(0);

//   function increaseOne(){
//     setCount((prev)=> prev+1);
//   }

//   function increaseTwo(){
//     setCount((prev)=> prev+2);
//   }

//   function increaseFive(){
//     setCount((prev)=> prev+5);
//   }

//   function decreaseOne(){
//     setCount((prev)=> prev>0?prev-1:0);
//   }

//   function multiplyTwo(){
//     setCount((prev)=> prev*2);
//   }

//   function reset(){
//     setCount(0);
//   }
//   return(
//     <>
//      <h1>Count : {count}</h1>
//      <Button onClick={increaseOne} text="+1"></Button>&nbsp;&nbsp;
//      <Button onClick={increaseTwo} text="+2"></Button>&nbsp;&nbsp;
//      <Button onClick={increaseFive} text="+5"></Button>&nbsp;&nbsp;
//      <Button onClick={decreaseOne} text="-1"></Button>&nbsp;&nbsp;
//      <Button onClick={multiplyTwo} text="*2"></Button>&nbsp;&nbsp;
//       <Button onClick={reset} text="reset"></Button>&nbsp;&nbsp;
//     </>
// )
// }
// export default App
 
// import { useEffect } from "react";
// import { useState } from "react";
// function App(){
// const [username,setusername]=useState("");
// const [password,setpassword]=useState("");
// const [usernameError,setUsernameError]=useState("");

// const handler=(event)=>{
//     const {name,value}=event.target;
//     if(name===username){
//         if(value==="")
//         setUsernameError("Name cannot be blank");
//     }else{
//         setusername("");
//     }
//     setusername(event.target.username);
// }

// const handlepassword=(event)=>{
//     setpassword(event.target.userpassword);
// }

// return(
//     <>
//     <h1>Form</h1>

//     <p>Username:</p>
//     <input type="text"
//     name="username"
//     value={username}
//     onChange={handler}
//     maxLength={0}
//     placeholder="Enter your name"></input>
//     {
//         username?<p>{setUsernameError}</p>:null
//     }

//     <p>Password:</p>
//     <input type="password"
//     name="password"
//     value={password}
//     onChange={handlepassword}
//     placeholder="Enter your password"></input>
//     &nbsp; <button>Submit</button>
//     </>
// )
// }
// export default App


// import { Todo } from "./component/Todo/todo";
// function App(){
//     return(
// <>
// <Todo />
// </>
//     );
// }
// export default App;


import{ Col,Row} from "react-bootstrap";


function App(){
    return(
        <>
            <Row>
                <Col sm={12} m={6} lg={4}>This is heading1</Col>
                <Col sm={12} m={6} lg={4}>This is heading2</Col>
                <Col sm={12} m={6} lg={4}>This is heading3</Col>
            </Row>
        </>
    )
}

export default App;