import React, {useState, useEffect} from "react";
import {formatTime} from "../modules/time-formatter";
export function App() {
    const [timer, setTimer] = useState(1500);
    const [time, setTime] = useState(`25:00`);
    useEffect(() => {
        setTime(formatTime(timer));
    }, [timer]);

    const decrement = () => {
        setTimer((timer) => timer - 1);
    };
    const increment = () => {
        setTimer((timer) => timer + 1);
    };
    return (
        <React.Fragment>
            <h1 className={"text-center"}>{"Hello World !"}</h1>
            <div className={"counter"}>
                <button
                    type={"button"}
                    className={"btn square"}
                    onClick={decrement}>
                    {"-"}
                </button>
                <h2 className={"time"}>{time}</h2>
                <button
                    type={"button"}
                    className={"btn square"}
                    onClick={increment}>
                    {"+"}
                </button>
            </div>
            <div className={"controls"}>
                <button className={"btn"} type={"button"}>
                    {"START"}
                </button>
                <button className={"btn"} type={"button"}>
                    {"RESET"}
                </button>
            </div>
        </React.Fragment>
    );
}
