import { useEffect, useState } from "react";
import "./ToDo.css"
import { MdDeleteForever } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import ToDoDateTime from "./ToDoDateTime";

export function ToDo(){

    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);

    function handleFormSubmit(inputvalue){
        if(inputvalue==="" || tasks.includes(inputvalue)){
            return;
        }
        const newTasks = [...tasks, inputvalue]
        setTasks(newTasks);
        localStorage.setItem("tasks", JSON.stringify(newTasks));
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
            <ToDoDateTime />
            <ToDoForm onToDoSubmit={handleFormSubmit} />
            <section className="task-container">
                <div className="task-items">
                    {tasks.length!==0 && tasks.map((value, index)=>{
                        return (
                            <ToDoList key={index} data={value} onDeleteTask={deleteTask}/>
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