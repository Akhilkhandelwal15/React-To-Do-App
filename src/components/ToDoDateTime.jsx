import { useEffect, useState } from "react";

export default function ToDoDateTime(){
    const [date, setTime] = useState("");

    function handleTime(){
        const date = new Date();
        const currDate = date.toLocaleDateString();
        const currTime = date.toLocaleTimeString();
        const today = `${currDate} - ${currTime}`;
        setTime(today);
    }

    useEffect(()=>{
        handleTime();
        const interval = setInterval(() => {
            handleTime();
        }, 1000);

        return ()=> clearInterval(interval);
    }, []);

    return (
        <section className="digital-clock">
            <h2><span>{date}</span></h2>
        </section>
    );
}