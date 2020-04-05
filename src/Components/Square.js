import React, { useState } from "react";

function Square(props) {
    const [isClicked, changeSquare] = useState(false);

    function handleClick() {
        changeSquare(prevState => !prevState);
    }

    const color = isClicked ? "redButton" : "blueButton";

    return (
        <button className={color} onClick={handleClick}>
            aha
        </button>
    );
}

export default Square;
