// import { useState } from "react";

// export const Todo=()=>{
//     const [input,setInput]=useState("");
//     const [tasks,setTasks]=useState([]);
//     const [edit,setEdit]=useState(false);
//     const [editId,setEditId]=useState("");

//     const handler=(event)=>{
//         console.log("1");
//         const{name,value}=event.target;
//         if(name=="task"){
//             setInput(value);
//         }
//     };
//     const addTaskhandler=()=>{
//         if(!edit){
//             else{
//         if(input === ""){
//             alert("please enter a task!");
//         }
//         else{
//             const data={
//            id:Date.now(),
//            text:input
//             };
//             setTasks((prev)=>[...prev,data]);
//             setInput("");
//         }
//         else{
//             if(input===""){
//                 alert("PLease enter a task!");
//             }
//             else{
//                 const data=tasks.filter((task)=>{
//                     if(task.id === editId){
//                         task.text=input;
//                     }
//                     return task;
//                 });
//                 console.log(data);
//                 setTasks(data);
//                 setInput("");
//                 setEditId("");
//                 setEdit(false);
//             }
//         }
//     };
//         const deleteTask=(id)=>{
//             const data=tasks.filter((task)=>task.id!==id);
//             setTasks(data);
//         };
//         const editTask=(data)=>{
//             console.log(data);
//             setInput(data.text);
//             setEdit(true);
//              setEditId(data.id);
//         };
//     return(
//         <>
//         <h1 style={{color:"white",backgroundColor:"navy",textAlign:"center"}}>Todo App</h1>
//         <textarea
//         style={{padding:"10px",margin:"10px",borderRadius:"5px",border:"1px solid #ccc"}}
//         rows={10}
//         cols={40}
//         name="taskbox"
//         value={input}
//         onChange={handler}
//         placeholder="Enter a task"
//         maxLength={60}/>
//         <br></br>
//         <button style={{backgroundColor:"navy",alignItems:"center",padding:"8px",marginTop:"10px",borderRadius:"5px",color:"white",font:"30px",height:"30px",width:"330px"}}onClick={addTaskhandler}>
//             {
//                 edit ? "Click here to save your edit":"Click here to add task"
//            }
//         </button>
//        {console.log(tasks)}
//         {
//         tasks&& tasks.length>0
//         ?(tasks.map((task)=>{
//             return(
//                 <div key={task.id } style={{border:"2px solid #ccc" ,marginTop:"20px", padding:"10px",overflow:"auto"}}>
//                 <p style={{color:"navy"}}>{task.text}</p>
//                 <button onClick={()=>editTask(task)} style={{color:"white",backgroundColor:"navy",}}>Edit</button>&nbsp;
//                 <button onClick={()=>deleteTask(task.id)} style={{color:"white",backgroundColor:"red",}}>Delete</button>
//                 </div>
//                 );
//             })
//     ):null
//     }
//      </>
//     );
// }

import { useState } from "react";

export const Todo = () => {
    const [input, setInput] = useState("");
    const [tasks, setTasks] = useState([]);
    const [edit, setEdit] = useState(false);
    const [editId, setEditId] = useState("");

    const handler = (event) => {
        const { name, value } = event.target;
        if (name === "task") {
            setInput(value);
        }
    };

    const addTaskhandler = () => {
        if (!edit) {
            if (input === "") {
                alert("Please enter a task!");
            } else {
                const data = {
                    id: Date.now(),
                    text: input
                };
                setTasks((prev) => [...prev, data]);
                setInput("");
            }
        }
        // EDIT TASK
        else {
            if (input === "") {
                alert("Please enter a task!");
            } else {
                const updatedTasks = tasks.map((task) => {
                    if (task.id === editId) {
                        return { ...task, text: input };
                    }
                    return task;
                });

                setTasks(updatedTasks);
                setInput("");
                setEdit(false);
                setEditId("");
            }
        }
    };

    const deleteTask = (id) => {
        const data = tasks.filter((task) => task.id !== id);
        setTasks(data);
    };

    const editTask = (task) => {
        setInput(task.text);
        setEdit(true);
        setEditId(task.id);
    };

    return (
        <>
            <h1 style={{
                color: "white",
                backgroundColor: "navy",
                textAlign: "center"
            }}>
                Todo App
            </h1>

            <textarea
                style={{
                    padding: "10px",
                    margin: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ccc"
                }}
                rows={5}
                cols={40}
                name="task"   // ✅ FIXED
                value={input}
                onChange={handler}
                placeholder="Enter a task"
                maxLength={60}
            />

            <br />

            <button
                style={{
                    backgroundColor: "navy",
                    padding: "8px",
                    marginTop: "10px",
                    borderRadius: "5px",
                    color: "white",
                    width: "330px"
                }}
                onClick={addTaskhandler}
            >
                {edit ? "Save Edit" : "Add Task"}
            </button>

            {
                tasks.length > 0 &&
                tasks.map((task) => (
                    <div
                        key={task.id}
                        style={{
                            border: "2px solid #ccc",
                            marginTop: "20px",
                            padding: "10px"
                        }}
                    >
                        <p style={{ color: "navy" }}>{task.text}</p>

                        <button
                            onClick={() => editTask(task)}
                            style={{
                                color: "white",
                                backgroundColor: "navy"
                            }}
                        >
                            Edit
                        </button>

                        &nbsp;

                        <button
                            onClick={() => deleteTask(task.id)}
                            style={{
                                color: "white",
                                backgroundColor: "red"
                            }}
                        >
                            Delete
                        </button>
                    </div>
                ))
            }
        </>
    );
};