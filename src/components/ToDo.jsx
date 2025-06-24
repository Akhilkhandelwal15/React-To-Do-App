import { useState } from "react";
import "./ToDo.css"
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import ToDoDateTime from "./ToDoDateTime";

export function ToDo(){

    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);

    function handleFormSubmit(data){
        if(tasks.some(item => item.id === data.id)){
            return;
        }

        const newTasks = [...tasks, data];
        setTasks(newTasks);
        localStorage.setItem("tasks", JSON.stringify(newTasks));
    }

    function clearTasks(){
        setTasks([]);
        localStorage.removeItem("tasks");
    }

    function deleteTask(taskToDelete){
        const updatedTasks = tasks.filter((task)=> task.id !== taskToDelete);
        setTasks(updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }

    function checkTask(taskToCheck){
        const updatedTasks = tasks.map((task)=> {
            if(taskToCheck===task.id){
                return { ...task, checked: !task.checked };
            }
            return task;
        });
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
                    {tasks.length!==0 && tasks.map((object)=>{
                        return (
                            <ToDoList key={object.id} data={object} onDeleteTask={deleteTask} onCheckTask={checkTask} />
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