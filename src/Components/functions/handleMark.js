import React from "react";
import Emoji from "../Emoji";

function handleMarking(cell) {
    const square = cell;

    if (!square.isMarked) {
        square.display = <Emoji symbol="🚩" />;
        square.style = square.style = {
            ...square.style,
            opacity: null,
        };
    }

    if (square.isMarked) {
        square.display = square.value;
        square.style = square.style = {
            ...square.style,
            opacity: 0,
        };
    }

    square.isMarked = !square.isMarked;

    return square;
}

export default handleMarking;
