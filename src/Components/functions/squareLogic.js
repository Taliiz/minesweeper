function squareLogic(event, square, array) {
    const rowInd = square.rowInd;
    const colInd = square.colInd;

    if (event.type === "click") {
        square.isRevealed = !square.isRevealed;
    }

    square.value++;
    console.log(square.value);

    array[rowInd][colInd] = square;
    return array;
}

export default squareLogic;
