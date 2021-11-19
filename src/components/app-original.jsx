import React, {useState, useEffect} from "react";
import {formatTime} from "../modules/time-formatter";
import {Modal} from "./modal";
import {Sign} from "./sign";
import {Button} from "./button";

export function App() {
    const DEFAULT_TIME = 1500;
    const PAUSE_TIME = 300;
    const STATES = ["idle", "work", "rest"];

    const [state, setState] = useState(STATES[0]);
    const [lastState, setLastState] = useState(STATES[1]);
    const [timer, setTimer] = useState(DEFAULT_TIME);
    const [time, setTime] = useState(formatTime(DEFAULT_TIME));
    const [isRunning, setIsRunning] = useState(false);
    const [intervalID, setIntervalID] = useState(0);
    const [modal, setModal] = useState(false);

    const decrement = () => {
        setTimer((timer) => timer - 60);
    };
    const increment = () => {
        setTimer((timer) => timer + 60);
    };
    const closeModal = () => {
        setModal(false);
    };
    const handleContinue = () => {
        closeModal();
        if (lastState === STATES[1]) {
            setState(STATES[2]);
            setLastState(STATES[2]);
            setTimer(PAUSE_TIME);
        } else {
            setState(STATES[1]);
            setLastState(STATES[1]);
            setTimer(DEFAULT_TIME);
        }
        setIsRunning(true);
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
        setTimer(DEFAULT_TIME);
        clearInterval(intervalID);
    };
    const startTimer = () => {
        setIntervalID(
            setInterval(() => {
                setTimer((timer) => timer - 1);
            }, 1000),
        );
    };
    useEffect(() => {
        setTime(formatTime(timer));
        if (timer > 0) {
            return;
        }
        setTimer(0);
        setModal(true);
        setIsRunning(false);
    }, [timer]);
    useEffect(() => {
        if (isRunning) {
            startTimer();
        } else {
            clearInterval(intervalID);
            setState(STATES[0]);
        }
    }, [isRunning]);

    return (
        <React.Fragment>
            <h1 className={"text-center"}>{"React-Pomodoro"}</h1>
            <p className={"text-center description"}>
                {"Work for 25 minutes, take a 5 minutes break"}
            </p>
            <div className={"counter"}>
                {timer === 0 ? (
                    <Button classes={"square disabled"} text={"-"} />
                ) : (
                    <Button
                        classes={"square"}
                        text={"-"}
                        handleClick={decrement}
                    />
                )}
                <h2 className={"time"}>{time}</h2>
                <Button classes={"square"} text={"+"} handleClick={increment} />
            </div>
            <div className={"controls"}>
                {timer === 0 ? (
                    <Button
                        classes={"disabled"}
                        text={isRunning ? "PAUSE" : "START"}
                    />
                ) : (
                    <Button
                        text={isRunning ? "PAUSE" : "START"}
                        handleClick={toggleRunning}
                    />
                )}
                <Button handleClick={resetTimer} text={"RESET"} />
            </div>
            {state === STATES[1] && (
                <Sign type={"work"} text={"It's work time !"} />
            )}
            {state === STATES[2] && (
                <Sign type={"break"} text={"It's break time !"} />
            )}
            {modal === true && (
                <Modal
                    handleClose={closeModal}
                    handleContinue={handleContinue}
                    lastState={lastState}
                />
            )}
        </React.Fragment>
    );
}
