import React, { useState } from "react";
import Grid from "./generateGrid";

function Game() {
    const [gridData, setData] = useState({
        height: 16,
        width: 30,
        mines: 99
    });

    function handleChange(event) {
        setData(event.target.value);
    }

    return (
        <div>
            <form style={{ textAlign: "center" }}>
                <label>Select Difficulty</label>
                <br />
                <select value={gridData} onChange={handleChange}>
                    <option
                        value={{
                            height: 9,
                            width: 9,
                            mines: 10
                        }}
                    >
                        Beginner
                    </option>
                    <option
                        value={{
                            height: 16,
                            width: 16,
                            mines: 40
                        }}
                    >
                        Intermediate
                    </option>
                    <option
                        value={{
                            height: 16,
                            width: 30,
                            mines: 99
                        }}
                    >
                        Expert
                    </option>
                </select>
            </form>
            <h1>{gridData.mines}</h1>
            <Grid
                height={gridData.height}
                width={gridData.width}
                mines={gridData.mines}
            />
        </div>
    );
}

export default Game;
