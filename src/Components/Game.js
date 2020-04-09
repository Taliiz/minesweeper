import React, { useState } from "react";
import difficulties from "./constantVariables/difficulty";
import Grid from "./Grid";

function Game() {
    const [difficulty, setDiff] = useState("0");
    const [customWidth, setCustomWidth] = useState(null);
    const [customHeight, setCustomHeight] = useState(null);
    const [customMines, setCustomMines] = useState(null);
    const [height, setHeight] = useState(1);
    const [width, setWidth] = useState(1);
    const [mines, setMines] = useState(1);

    let isCustom = difficulty === "3" ? null : "none";

    if (difficulty < 3) {
        setHeight(difficulties[difficulty].height);
        setWidth(difficulties[difficulty].width);
        setMines(difficulties[difficulty].mines);
    }

    function handleGen(event) {
        event.preventDefault();
        setHeight(customHeight);
        setWidth(customWidth);
        setMines(customMines);
        console.log("does this shit button work?");
    }

    return (
        <div style={{ textAlign: "center" }}>
            <label>Select Difficulty</label>
            <br />
            <select
                value={difficulty}
                onChange={e => setDiff(e.currentTarget.value)}
            >
                <option value="0">Beginner</option>
                <option value="1">Intermediate</option>
                <option value="2">Expert</option>
                <option value="3">Custom</option>
            </select>
            <h1>{difficulties[difficulty].sentence}</h1>

            <form style={{ display: isCustom }}>
                <label>Grid Height: </label>
                <input
                    type="text"
                    value={customHeight}
                    onChange={e => setCustomHeight(e.target.value)}
                ></input>
                <label> Grid Width: </label>
                <input
                    type="text"
                    value={customWidth}
                    onChange={e => setCustomWidth(e.target.value)}
                ></input>
                <label> Mines: </label>
                <input
                    type="text"
                    value={customMines}
                    onChange={e => setCustomMines(e.target.value)}
                ></input>
                <button onClick={handleGen} style={{ margin: "10px" }}>
                    Generate Grid
                </button>
            </form>
            <Grid height={height} width={width} mines={mines} />
            <h1>
                Height: {height}, custom height: {customHeight}
            </h1>
        </div>
    );
}

export default Game;
