import React from "react";

function Input(props) {
    const property = props.property;
    const dif = props.difficultyData;

    return (
        <div>
            <label>
                {property.charAt(0).toUpperCase() + property.slice(1)}
            </label>
            <input
                style={{ float: "left" }}
                type="text"
                value={dif[3].property}
                onChange={e => (dif[3].property = e.target.value)}
            ></input>
        </div>
    );
}

export default Input;
