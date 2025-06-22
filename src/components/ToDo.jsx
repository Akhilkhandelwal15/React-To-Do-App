import { useState } from "react";
import "./ToDo.css"
import { MdDeleteForever } from "react-icons/md";
import { TiTick } from "react-icons/ti";

export function ToDo(){

    const [inputvalue, setInputvalue] = useState("");
    const [tasks, setTasks] = useState([]);

    function handleFormSubmit(event){
        event.preventDefault();
        if(inputvalue===""){
            return;
        }
        if(tasks.includes(inputvalue)){
            return;
        }
        setTasks([...tasks, inputvalue]);
        setInputvalue("");
    }

    function handleTask(event){
        setInputvalue(event.target.value);
    }

    return (
        <section className="todo-container">
            <header>
                <h1>To Do List</h1>
            </header>
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
                    {tasks.map((value, index)=>{
                        return (
                            <div className="task-item" key={index}>
                                <p>{value}</p>
                                <div className="action-btns">
                                    <div className="action complete">
                                        <TiTick />
                                    </div>
                                    <div className="action delete">
                                        <MdDeleteForever />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                    {/* <div className="task-item">
                        <p>Item 2</p>
                        <div className="action-btns">
                            <div className="action complete">
                                <TiTick />
                            </div>
                            <div className="action delete">
                                <MdDeleteForever />
                            </div>
                        </div>
                    </div>
                    <div className="task-item">
                        <p>Item 3</p>
                        <div className="action-btns">
                             <div className="action complete">
                                <TiTick />
                            </div>
                            <div className="action delete">
                                <MdDeleteForever />
                            </div>
                        </div>
                    </div> */}
                </div>
               {tasks.length===0 && (<div>
                    <p style={{color:'#fff'}}>No Task Added</p>
                </div>)}
            </section>
            <section>
                <button className="clear-all">Clear All</button>
            </section>
        </section>
    );
}