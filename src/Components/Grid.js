import React from "react";
import Square from "./Square";

function Grid(props) {
    const squareFunction = props.function;
    let dataArr = props.data;
    const data = dataArr.map((row) => {
        return (
            <div>
                {row.map((data) => {
                    return <Square data={data} function={squareFunction} />;
                })}
            </div>
        );
    });
    return data;
}

export default Grid;
