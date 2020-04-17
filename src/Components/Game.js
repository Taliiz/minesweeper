import React, { useState } from "react";
import difficulties from "./constantVariables/difficulty";
import Grid from "./Grid";
import generateGrid from "./generateGrid";

function Game() {
    const [difficulty, setDiff] = useState("0");
    const [customWidth, setCustomWidth] = useState(null);
    const [customHeight, setCustomHeight] = useState(null);
    const [customMines, setCustomMines] = useState(null);
    const [dataArr, setData] = useState(generateGrid(9, 9, 10));
    const [firstClicked, setClick] = useState(false);
    const [currentMines, setMines] = useState(10);

    let isCustom = difficulty === "3" ? null : "none";
    let diffArray = difficulties;

    function handleSelect(event) {
        setDiff(event.target.value);
        const value = parseInt(event.target.value);
        if (value < 3) {
            setData(
                generateGrid(
                    diffArray[value].height,
                    diffArray[value].width,
                    diffArray[value].mines
                )
            );
        }
        setClick(false);
        setMines(diffArray[value].mines);
    }

    function handleGen(event) {
        event.preventDefault();
        setData(generateGrid(customHeight, customWidth, customMines));
        setClick(false);
        setMines(customMines);
    }

    function handleSquare(e, data) {
        squareLogic(e, data);
        setClick(true);
    }

    function reset(e) {
        if (e) {
            e.preventDefault();
        }
        if (difficulty === "0") {
            setData(generateGrid(9, 9, 10));
            setMines(10);
        } else if (difficulty === "1") {
            setData(generateGrid(16, 16, 40));
            setMines(40);
        } else if (difficulty === "2") {
            setData(generateGrid(16, 30, 99));
            setMines(99);
        } else {
            if (customHeight && customWidth && customMines) {
                setData(generateGrid(customHeight, customWidth, customMines));
                setMines(customMines);
            }
        }
        setClick(false);
    }

    function squareLogic(event, square) {
        const rowInd = square.rowInd;
        const colInd = square.colInd;
        let finalArr = [...dataArr];
        let updateSquare = true;

        if (!firstClicked) {
            while (finalArr[rowInd][colInd].value !== 0) {
                finalArr = generateGrid(
                    dataArr.length,
                    dataArr[0].length,
                    currentMines
                );
                updateSquare = false;
            }
        }

        if (!square.isRevealed) {
            if (event.type === "click") {
                square.isRevealed = !square.isRevealed;
            }
        }

        if (updateSquare) {
            finalArr[rowInd][colInd] = square;
        }
        setData(finalArr);
    }

    return (
        <div style={{ textAlign: "center" }}>
            <label>Select Difficulty</label>
            <br />
            <select value={difficulty} onChange={handleSelect}>
                <option value="0">Beginner</option>
                <option value="1">Intermediate</option>
                <option value="2">Expert</option>
                <option value="3">Custom</option>
            </select>

            <form style={{ display: isCustom }}>
                <label>Grid Height: </label>
                <input
                    type="number"
                    value={customHeight}
                    onChange={(e) => setCustomHeight(parseInt(e.target.value))}
                ></input>

                <label> Grid Width: </label>
                <input
                    type="number"
                    value={customWidth}
                    onChange={(e) => setCustomWidth(parseInt(e.target.value))}
                ></input>

                <label> Mines: </label>
                <input
                    type="number"
                    value={customMines}
                    onChange={(e) => setCustomMines(parseInt(e.target.value))}
                ></input>

                <button onClick={handleGen} style={{ margin: "10px" }}>
                    Generate Grid
                </button>
            </form>
            <br />
            <button onClick={reset}>Reset</button>
            <h1>{currentMines}</h1>
            <Grid data={dataArr} function={handleSquare} />
        </div>
    );
}

export default Game;
