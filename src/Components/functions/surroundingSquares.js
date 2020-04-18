function surroundingSquares(ri, ci, grid) {
    const squares = [];
    if (grid[ri + 1]) {
        if (grid[ri + 1][ci - 1]) {
            squares.push(grid[ri + 1][ci - 1]);
        }
    }

    if (grid[ri + 1]) {
        if (grid[ri + 1][ci]) {
            squares.push(grid[ri + 1][ci]);
        }
    }

    if (grid[ri + 1]) {
        if (grid[ri + 1][ci + 1]) {
            squares.push(grid[ri + 1][ci + 1]);
        }
    }

    if (grid[ri]) {
        if (grid[ri][ci - 1]) {
            squares.push(grid[ri][ci - 1]);
        }
    }

    if (grid[ri]) {
        if (grid[ri][ci + 1]) {
            squares.push(grid[ri][ci + 1]);
        }
    }

    if (grid[ri - 1]) {
        if (grid[ri - 1][ci - 1]) {
            squares.push(grid[ri - 1][ci - 1]);
        }
    }

    if (grid[ri - 1]) {
        if (grid[ri - 1][ci]) {
            squares.push(grid[ri - 1][ci]);
        }
    }

    if (grid[ri - 1]) {
        if (grid[ri - 1][ci + 1]) {
            squares.push(grid[ri - 1][ci + 1]);
        }
    }
    return squares;
}

export default surroundingSquares;
