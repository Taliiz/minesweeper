import React from "react";

function Square(props) {
    const data = props.data;
    console.log(data.isRevealed);

    return (
        <button className="revealed" onClick={(e) => props.function(e, data)}>
            {data.value}
        </button>
    );
}

export default Square;
