function squareLogic(event, square, array) {
    const rowInd = square.rowInd;
    const colInd = square.colInd;
    const finalArr = [...array];

    if (!square.isRevealed) {
        if (event.type === "click") {
            square.isRevealed = !square.isRevealed;
        }
    }

    finalArr[rowInd][colInd] = square;
    return finalArr;
}

export default squareLogic;
