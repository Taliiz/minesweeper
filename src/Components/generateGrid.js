import React from "react";
import Emoji from "./Emoji";

function generateGrid(height, width, mines) {
    let minesToPlace = mines;
    if (height && width && mines) {
        //make an empty 2d array of height height and of width width + padding
        let grid = new Array(height + 2);
        for (let i = 0; i < grid.length; i++) {
            grid[i] = new Array(width + 2);
        }

        //populate the empty array with objects that have a value key and an isMine key
        for (let i = 0; i < height + 2; i++) {
            for (let j = 0; j < width + 2; j++) {
                grid[i][j] = {
                    value: 0,
                    isMine: false,
                };
            }
        }

        /* place mines across the grid randomly,
        change the value of the mine square to a bomb Emoji,
        change the isMine key to true */
        while (minesToPlace > 0) {
            let randomHeight = Math.floor(Math.random() * height) + 1;
            let randomWidth = Math.floor(Math.random() * width) + 1;
            if (!grid[randomHeight][randomWidth].isMine) {
                grid[randomHeight][randomWidth].isMine = true;
                grid[randomHeight][randomWidth].value = <Emoji symbol="💣" />;
            }
            minesToPlace--;
        }

        //count how many mines there are around each square that isn't a mine
        for (let i = 1; i < height + 1; i++) {
            for (let j = 1; j < width + 1; j++) {
                if (!grid[i][j].isMine) {
                    let squares = [];
                    let count = 0;

                    //add the surrounding squares to an array and iterate through it, adding one to the value for each square that is a mine
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

        //remove the padding
        grid.shift();
        grid.pop();
        let finalgrid = grid.map((row) => {
            row.shift();
            row.pop();
            return row;
        });

        //add the position of the square in the array and whether it's marked and whether it's revealed
        for (let i = 0; i < height; i++) {
            for (let j = 0; j < width; j++) {
                finalgrid[i][j] = {
                    ...finalgrid[i][j],
                    rowInd: i,
                    colInd: j,
                    isRevealed: false,
                    isMarked: false,
                    cssClass: "notRevealed",
                };
            }
        }

        return finalgrid;
    }
}

export default generateGrid;
