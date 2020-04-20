import reveal from "./reveal";
import handleMark from "./handleMark";

function clear(finalArr) {
    finalArr.map((row) =>
        row.map((square) => {
            if (square.isMarked) {
                square = handleMark(square);
            }
            square = reveal(square);
            return square;
        })
    );
    return finalArr;
}

export default clear;
