import generateGrid from "../generateGrid";

function squareLogic(event, square, array, firstClick, mines) {
    const rowInd = square.rowInd;
    const colInd = square.colInd;
    let finalArr = [...array];

    if (!firstClick) {
        while (finalArr[rowInd][colInd] !== 0) {
            finalArr = generateGrid(array.length, array[0].length, mines);
        }
    }

    if (!square.isRevealed) {
        if (event.type === "click") {
            square.isRevealed = !square.isRevealed;
        }
    }

    console.log(array.length, array[0].length);

    finalArr[rowInd][colInd] = square;
    return finalArr;
}

export default squareLogic;
