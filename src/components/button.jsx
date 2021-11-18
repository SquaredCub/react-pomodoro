import React from "react";
function Button({handleClick, text, classes}) {
    let classNames = `btn ${classes}`;
    return (
        <button type={"button"} className={classNames}>
            {text}
        </button>
    );
}

export default Button;
