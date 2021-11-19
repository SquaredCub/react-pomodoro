import React from "react";
export const Button = ({handleClick, text, classes}) => {
    const classNames = `btn ${classes}`;
    return (
        <button type={"button"} className={classNames} onClick={handleClick}>
            {text}
        </button>
    );
};
