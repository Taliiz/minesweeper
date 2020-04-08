import React from "react";
import Emoji from "./Emoji";

function generateGrid(height, width, mines) {
    let minesToPlace = mines;

    let grid = new Array(height + 2);
    for (let i = 0; i < grid.length; i++) {
        grid[i] = new Array(width + 2);
    }

    for (let i = 0; i < height + 2; i++) {
        for (let j = 0; j < width + 2; j++) {
            grid[i][j] = {
                value: 0,
                isMine: false
            };
        }
    }

    while (minesToPlace > 0) {
        let randomHeight = Math.floor(Math.random() * height) + 1;
        let randomWidth = Math.floor(Math.random() * width) + 1;
        if (!grid[randomHeight][randomWidth].isMine) {
            grid[randomHeight][randomWidth].isMine = true;
            grid[randomHeight][randomWidth].value = <Emoji symbol="💣" />;
        }
        minesToPlace--;
    }

    for (let i = 1; i < height + 1; i++) {
        for (let j = 1; j < width + 1; j++) {
            if (!grid[i][j].isMine) {
                let squares = [];
                let count = 0;

                squares.push(grid[i + 1][j - 1]);
                squares.push(grid[i + 1][j]);
                squares.push(grid[i + 1][j + 1]);
                squares.push(grid[i][j - 1]);
                squares.push(grid[i][j + 1]);
                squares.push(grid[i - 1][j - 1]);
                squares.push(grid[i - 1][j]);
                squares.push(grid[i - 1][j + 1]);

                for (let i = 0; i < squares.length; i++) {
                    if (squares[i].isMine) {
                        count++;
                    }
                }
                grid[i][j].value = count;
            }
        }
    }

    grid.shift();
    grid.pop();
    let finalgrid = grid.map(row => {
        row.shift();
        row.pop();
        return row;
    });

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            finalgrid[i][j] = {
                ...finalgrid[i][j],
                rowInd: i,
                colInd: j
            };
        }
    }

    return finalgrid;
}

export default generateGrid;
