import { MdDeleteForever } from "react-icons/md";
import { TiTick } from "react-icons/ti";

export default function ToDoList({data, onDeleteTask, onCheckTask}){
    const checkedClass = data.checked ? 'checked' : '';
    return (
        <div className={`task-item ${checkedClass}`}>
            <p>{data.value}</p>
            <div className="action-btns">
                <div className="action complete">
                    <TiTick onClick={()=>onCheckTask(data.id)} />
                </div>
                <div className="action delete">
                    <MdDeleteForever onClick={()=> onDeleteTask(data.id)} />
                </div>
            </div>
        </div>
    );
}