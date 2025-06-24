import { useState } from "react";

export default function ToDoForm({onToDoSubmit}){

    const [inputvalue, setInputvalue] = useState("");
    
    function handleTask(event){
        setInputvalue(event.target.value);
    }
    function handleFormSubmit(event){
        event.preventDefault();
        onToDoSubmit(inputvalue);
        setInputvalue("");
    }

    return (
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
    );
}