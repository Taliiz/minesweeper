import surroundingSquares from "./surroundingSquares";
import reveal from "./reveal";

function clearZeros(square, data) {
    /* the clearlist contains the squares it needs to iterate over,
    the grid is just the 2D data array the grid is generated from */
    square.cssClass = "revealed";
    square.style = null;
    let clearList = [square];
    let grid = data;
    let count = 1;

    /* i use ri and ci as a shorthand for the row and column index
    of the current square it's iterating over,
    the squares to check function just puts all the surrounding
    squares in a list  */
    while (clearList.length > 0) {
        const ri = clearList[0].rowInd;
        const ci = clearList[0].colInd;
        const squaresToCheck = surroundingSquares(ri, ci, grid);

        /* here i iterate over the surrounding squares and use
        ri and ci as shorthand again */
        for (let i = 0; i < squaresToCheck.length; i++) {
            let curSquare = squaresToCheck[i];
            const ri = curSquare.rowInd;
            const ci = curSquare.colInd;

            /* if the square isn't already revealed i change
            its isRevealed value to true */
            if (!curSquare.isRevealed && curSquare.value === 0) {
                clearList.push(grid[ri][ci]);
                grid[ri][ci] = reveal(grid[ri][ci]);
                count++;

                /*  if it's not revealed and its value is 0
                i add it to the clear list to be iterated
                over at the next instance of the while loop */
            }
            if (!curSquare.isRevealed) {
                grid[ri][ci] = reveal(grid[ri][ci]);
                count++;
            }
        }
        //here i just remove it from the list ready to start over again
        clearList.shift();
    }
    return [grid, count];
}

export default clearZeros;
