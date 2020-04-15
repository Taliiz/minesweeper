import React from "react";

function Square(props) {
    const data = props.data;
    const classname = data.isRevealed ? "revealed" : "notRevealed";

    return (
        <button className={classname} onClick={(e) => props.function(e, data)}>
            {data.value}
        </button>
    );
}

export default Square;
