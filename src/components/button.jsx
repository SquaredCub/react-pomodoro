import React from "react";
export const Button = ({handleClick, text, classes, sound}) => {
    const classNames = `btn ${classes}`;
    return (
        <button
            type={"button"}
            className={classNames}
            onClick={() => {
                handleClick(), sound();
            }}>
            {text}
        </button>
    );
};
