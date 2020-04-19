import React from "react";

function Square(props) {
    const data = props.data;

    return (
        <button
            className={props.data.cssClass}
            onClick={(e) => props.function(e, data)}
        >
            {data.value}
        </button>
    );
}

export default Square;
