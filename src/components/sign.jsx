import React from "react";
function Sign({type, text}) {
    const name = `sign ${type}`;
    return (
        <div className={name}>
            <p>{text}</p>
        </div>
    );
}

export default Sign;
