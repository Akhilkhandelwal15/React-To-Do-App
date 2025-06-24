import { MdDeleteForever } from "react-icons/md";
import { TiTick } from "react-icons/ti";

export default function ToDoList({data, onDeleteTask}){
    return (
        <div className="task-item">
            <p>{data}</p>
            <div className="action-btns">
                <div className="action complete">
                    <TiTick  />
                </div>
                <div className="action delete">
                    <MdDeleteForever onClick={()=> onDeleteTask(data)} />
                </div>
            </div>
        </div>
    );
}