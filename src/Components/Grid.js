import React from "react";
import generateGrid from "./generateGrid";
import Square from "./Square";

function Grid(props) {
    let dataArr = generateGrid(props.height, props.width, props.mines);
    const data = dataArr.map(row => {
        return (
            <div>
                {row.map(data => {
                    return <Square data={data} />;
                })}
            </div>
        );
    });
    return data;
}

export default Grid;
