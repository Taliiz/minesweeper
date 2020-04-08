import React, { useState } from "react";
import difficulties from "./constantVariables/difficulty";
import Grid from "./Grid";

function Game() {
    const [difficulty, setDiff] = useState("0");

    let isCustom = difficulty === "3" ? true : "none";

    let height = difficulties[difficulty].height;
    let width = difficulties[difficulty].width;
    let mines = difficulties[difficulty].mines;

    function handleGen() {
        height = difficulties[difficulty].height;
        width = difficulties[difficulty].width;
        mines = difficulties[difficulty].mines;
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
                    value={difficulties[3].height}
                    onChange={e => (difficulties[3].height = e.target.value)}
                ></input>
                <label> Grid Width: </label>
                <input
                    type="text"
                    value={difficulties[3].width}
                    onChange={e => (difficulties[3].width = e.target.value)}
                ></input>
                <label> Mines: </label>
                <input
                    type="text"
                    value={difficulties[3].mines}
                    onChange={e => (difficulties[3].mines = e.target.value)}
                ></input>
                <button onClick={handleGen} style={{ margin: "10px" }}>
                    Generate Grid
                </button>
            </form>
            <Grid height={height} width={width} mines={mines} />
        </div>
    );
}

export default Game;
