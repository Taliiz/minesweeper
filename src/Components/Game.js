import React, { useState } from "react";
import Grid from "./generateGrid";

function Game() {
    const [width, setWidth] = useState(null);
    const [height, setHeight] = useState(null);
    const [mines, setMines] = useState(null);
    let generated = { display: "none" };

    function handleWidth(event) {
        setWidth(event.target.value);
    }

    function handleHeight(event) {
        setHeight(event.target.value);
    }

    function handleMines(event) {
        setMines(event.target.value);
    }

    function handleGen(event) {
        event.preventDefault();
        generated = null;
    }

    return (
        <div>
            <form style={{ textAlign: "center" }}>
                <label>Grid Height: </label>
                <input
                    type="text"
                    value={height}
                    onChange={handleHeight}
                ></input>
                <label> Grid Width: </label>
                <input type="text" value={width} onChange={handleWidth}></input>
                <label> Mine Amount: </label>
                <input type="text" value={mines} onChange={handleMines}></input>
                <button onClick={handleGen} style={{ margin: "10px" }}>
                    Generate Grid
                </button>
            </form>
            <Grid
                height={height}
                width={width}
                mines={mines}
                style={{ generated }}
            />
        </div>
    );
}

export default Game;
