import React, { useState, useEffect } from "react";
import difficulties from "./constantVariables/difficulty";
import Grid from "./Grid";
import generateGrid from "./generateGrid";
import clearZeros from "./functions/clearZeros";
import reveal from "./functions/reveal";
import handleMarking from "./functions/handleMark";
import clear from "./functions/clear";
import markRemaining from "./functions/markRemaining";

function Game() {
    const [difficulty, setDiff] = useState("0");
    const [customWidth, setCustomWidth] = useState(null);
    const [customHeight, setCustomHeight] = useState(null);
    const [customMines, setCustomMines] = useState(null);
    const [dataArr, setData] = useState(generateGrid(9, 9, 10));
    const [firstClicked, setClick] = useState(false);
    const [currentMines, setMines] = useState(10);
    const [lost, setLoss] = useState(false);
    const [cellsToClear, setCells] = useState(71);

    let isCustom = difficulty === "3" ? null : "none";
    let diffArray = difficulties;
    let win = cellsToClear === 0 ? null : "none";
    let loss = lost ? null : "none";
    let def = lost || cellsToClear === 0 ? "none" : null;

    useEffect(() => {
        if (cellsToClear === 0) {
            setData((d) => markRemaining(d));
        }
    }, [cellsToClear]);

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
        setCells(customHeight * customWidth - customMines);
    }

    function handleSquare(e, data) {
        squareLogic(e, data);
    }

    function reset(e) {
        if (e) {
            e.preventDefault();
        }
        if (difficulty === "0") {
            setData(generateGrid(9, 9, 10));
            setMines(10);
            setCells(71);
        } else if (difficulty === "1") {
            setData(generateGrid(16, 16, 40));
            setMines(40);
            setCells(216);
        } else if (difficulty === "2") {
            setData(generateGrid(16, 30, 99));
            setMines(99);
            setCells(381);
        } else {
            if (customHeight && customWidth && customMines) {
                setData(generateGrid(customHeight, customWidth, customMines));
                setMines(customMines);
                setCells(customHeight * customWidth - customMines);
            }
        }
        setClick(false);
        setLoss(false);
    }

    function squareLogic(event, square) {
        const rowInd = square.rowInd;
        const colInd = square.colInd;
        let finalArr = [...dataArr];

        if (event.type === "contextmenu") {
            event.preventDefault();
        }

        if (!firstClicked && event.type === "click") {
            while (finalArr[rowInd][colInd].value !== 0) {
                finalArr = generateGrid(
                    dataArr.length,
                    dataArr[0].length,
                    currentMines
                );
            }
            finalArr[rowInd][colInd].isRevealed = true;
            let clearData = clearZeros(finalArr[rowInd][colInd], finalArr);
            finalArr = clearData[0];
            setCells((c) => c - clearData[1]);
            setData(finalArr);
            setClick(true);
            return;
        }

        if (!square.isRevealed && event.type === "contextmenu") {
            if (currentMines > 0 && !square.isMarked) {
                setMines((m) => m - 1);
                square = handleMarking(square);
            } else if (
                (currentMines > 0 && square.isMarked) ||
                square.isMarked
            ) {
                setMines((m) => m + 1);
                square = handleMarking(square);
            }
        }
        if (
            !square.isRevealed &&
            event.type === "click" &&
            square.isMine &&
            !square.isMarked
        ) {
            finalArr = clear(finalArr);
            setLoss(true);
        }

        if (!square.isRevealed && event.type === "click") {
            square = reveal(square);
            setCells((c) => c - 1);
        }

        setData(finalArr);
        setClick(true);
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
            <h1 style={{ display: def }}>Good luck!</h1>
            <h1 style={{ display: win }}>
                Wow you cleared it, didn't expect that, try to do it fast next
                time :PostDog:
            </h1>
            <h1 style={{ display: loss }}>
                You lost, you cretin, you absolute fool, you imbecile
            </h1>
            <h1>Mines left:{currentMines}</h1>
            <Grid data={dataArr} function={handleSquare} />
        </div>
    );
}

export default Game;
