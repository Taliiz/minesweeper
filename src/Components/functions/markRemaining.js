import handleMark from "./handleMark";

function markRemaining(finalArr) {
    finalArr.map((row) =>
        row.map((square) => {
            if (!square.isMarked && square.isMine) {
                square = handleMark(square);
            }
            return square;
        })
    );
    return finalArr;
}

export default markRemaining;
