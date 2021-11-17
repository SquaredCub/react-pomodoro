import React, {useState, useEffect} from "react";
import {formatTime} from "../modules/time-formatter";
export function App() {
    const DEFAULT_TIME = 1500;
    const PAUSE_TIME = 300;
    const STATES = ["idle", "work", "rest"];

    const [state, setState] = useState(STATES[0]);
    const [lastState, setLastState] = useState(STATES[1]);
    const [timer, setTimer] = useState(DEFAULT_TIME);
    const [time, setTime] = useState(`25:00`);
    const [isRunning, setIsRunning] = useState(false);
    const [intervalID, setIntervalID] = useState(0);

    const decrement = () => {
        setTimer((timer) => timer - 1);
    };
    const increment = () => {
        setTimer((timer) => timer + 1);
    };
    const toggleRunning = () => {
        if (isRunning) {
            setIsRunning(false);
            setState(STATES[0]);
        } else {
            setIsRunning(true);
            setState(lastState);
        }
    };
    const resetTimer = () => {
        setIsRunning(false);
        setTimer(1500);
        clearInterval(intervalID);
    };

    useEffect(() => {
        setTime(formatTime(timer));
        if (timer !== 0) return;

        if (lastState === STATES[1]) {
            setState(STATES[2]);
            setLastState(STATES[2]);
            setTimer(PAUSE_TIME);
        } else {
            setState(STATES[1]);
            setLastState(STATES[1]);
            setTimer(DEFAULT_TIME);
        }
    }, [timer]);
    useEffect(() => {
        if (isRunning) {
            setIntervalID(
                setInterval(() => {
                    setTimer((timer) => timer - 1);
                }, 1000),
            );
        } else {
            clearInterval(intervalID);
        }
    }, [isRunning]);

    return (
        <React.Fragment>
            <h1 className={"text-center"}>{"React-Pomodoro"}</h1>
            <p className={"text-center description"}>
                {"Work for 25 minutes, take a 5 minutes break"}
            </p>
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
                <button
                    className={"btn"}
                    type={"button"}
                    onClick={toggleRunning}>
                    {isRunning ? "PAUSE" : "START"}
                </button>
                <button className={"btn"} type={"button"} onClick={resetTimer}>
                    {"RESET"}
                </button>
            </div>
            {state === STATES[1] && (
                <div className={"sign work"}>
                    <p>{"It's working time !"}</p>
                </div>
            )}
            {state === STATES[2] && (
                <div className={"sign break"}>
                    <p>{"It's break time !"}</p>
                </div>
            )}
        </React.Fragment>
    );
}
