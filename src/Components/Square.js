import React from "react";

function Square(props) {
    const data = props.data;

    return (
        <button
            className={props.data.cssClass}
            onClick={(e) => props.function(e, data)}
            onContextMenu={(e) => props.function(e, data)}
        >
            <span style={data.style}>{data.display}</span>
        </button>
    );
}

export default Square;
