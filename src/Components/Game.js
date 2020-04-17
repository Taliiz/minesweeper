import React, { useState } from "react";
import difficulties from "./constantVariables/difficulty";
import Grid from "./Grid";
import generateGrid from "./generateGrid";
import squareLogic from "./functions/squareLogic";

function Game() {
    const [difficulty, setDiff] = useState("0");
    const [customWidth, setCustomWidth] = useState(null);
    const [customHeight, setCustomHeight] = useState(null);
    const [customMines, setCustomMines] = useState(null);
    const [dataArr, setData] = useState(generateGrid(9, 9, 10));

    let isCustom = difficulty === "3" ? null : "none";
    let diffArray = difficulties;

    function handleSelect(event) {
        setDiff(event.target.value);
        const value = parseInt(event.target.value);
        console.log(typeof difficulty);
        if (value < 3) {
            setData(
                generateGrid(
                    diffArray[value].height,
                    diffArray[value].width,
                    diffArray[value].mines
                )
            );
        }
    }

    function handleGen(event) {
        event.preventDefault();
        setData(generateGrid(customHeight, customWidth, customMines));
    }

    function handleSquare(e, data) {
        setData(squareLogic(e, data, dataArr));
    }

    function reset(e) {
        e.preventDefault();
        if (difficulty === "0") {
            setData(generateGrid(9, 9, 10));
        } else if (difficulty === "1") {
            setData(generateGrid(16, 16, 40));
        } else if (difficulty === "2") {
            setData(generateGrid(16, 30, 99));
        } else {
            if (customHeight && customWidth && customMines) {
                setData(generateGrid(customHeight, customWidth, customMines));
            }
        }
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
            <Grid data={dataArr} function={handleSquare} />
        </div>
    );
}

export default Game;
