import { useEffect, useState } from "react";
import "./ToDo.css"
import { MdDeleteForever } from "react-icons/md";
import { TiTick } from "react-icons/ti";

export function ToDo(){

    const [inputvalue, setInputvalue] = useState("");
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);
    const [date, setTime] = useState("");

    function handleTime(){
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth()+1;
        const year = date.getFullYear();
        const minutes = date.getMinutes();
        const hours = date.getHours();
        const seconds = date.getSeconds();
        const today = `${month}/${day}/${year} - ${hours}:${minutes}:${seconds}`;
        setTime(today);
    }

    useEffect(()=>{
        handleTime();
        const interval = setInterval(() => {
            handleTime();
        }, 1000);

        return ()=> clearInterval(interval);
    }, []);



    function handleFormSubmit(event){
        event.preventDefault();
        if(inputvalue===""){
            return;
        }
        if(tasks.includes(inputvalue)){
            return;
        }
        const newTasks = [...tasks, inputvalue]
        setTasks(newTasks);
        localStorage.setItem("tasks", JSON.stringify(newTasks));
        setInputvalue("");
    }

    function handleTask(event){
        setInputvalue(event.target.value);
    }

    function clearTasks(){
        setTasks([]);
        localStorage.removeItem("tasks");
    }

    function deleteTask(taskToDelete){
        const updatedTasks = tasks.filter((task)=> task !== taskToDelete);
        setTasks(updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }

    return (
        <section className="todo-container">
            <header>
                <h1>To Do List</h1>
            </header>
            <section className="digital-clock">
                <h2><span>{date}</span></h2>
            </section>
            <section className="form-container">
                <form onSubmit={handleFormSubmit}>
                    <div className="form-input">
                        <input type="text" value={inputvalue} onChange={handleTask}></input>
                    </div>
                    <div className="form-btn">
                        <button type="submit">Add Task</button>
                    </div>
                </form>
            </section>
            <section className="task-container">
                <div className="task-items">
                    {tasks.length!==0 && tasks.map((value, index)=>{
                        return (
                            <div className="task-item" key={index}>
                                <p>{value}</p>
                                <div className="action-btns">
                                    <div className="action complete">
                                        <TiTick  />
                                    </div>
                                    <div className="action delete">
                                        <MdDeleteForever onClick={()=> deleteTask(value)} />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
               {tasks.length===0 && (<div>
                    <p style={{color:'#fff'}}>No Task Added</p>
                </div>)}
            </section>
            <section>
                <button className="clear-all" onClick={clearTasks}>Clear All</button>
            </section>
        </section>
    );
}