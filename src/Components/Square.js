import React from "react";

function Square(props) {
    const data = props.data;

    return (
        <button
            className={data.isRevealed ? "revealed" : "notRevealed"}
            onClick={props.function}
        >
            {data.isRevealed ? data.value : null}
        </button>
    );
}

export default Square;
