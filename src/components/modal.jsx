import React from "react";
export const Modal = ({handleClose, handleContinue, lastState}) => (
    <div className={"modal"}>
        <h3 className={"text-center"}>
            {lastState === "work" ? "Take a break ?" : "Keep on working ?"}
        </h3>
        <div className={"controls"}>
            <button type={"button"} className={"btn"} onClick={handleContinue}>
                {"YES !"}
            </button>
            <button type={"button"} className={"btn"} onClick={handleClose}>
                {"close"}
            </button>
        </div>
    </div>
);
