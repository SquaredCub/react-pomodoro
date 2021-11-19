import React from "react";
export const Sign = ({type, text}) => {
    const name = `sign ${type}`;
    return (
        <div className={name}>
            <p>{text}</p>
        </div>
    );
};
