import React, { useReducer, useState } from "react";
import "./App.css";

function ReducerEx() {

    // const [checked, setChecked] = useState(false);
    const [checked, toggle] = useReducer(
        (checked) => !checked,
        false // second argument is initial state
    );

    // function toggle() {
    //     setChecked(checked => !checked)
    // }

    // commented out useState stuff that was replaced with useReducer

    return (
        <>
            <input 
                type="checkbox" 
                value={checked} 
                onChange={toggle}
            />
            <p>{checked ? "checked" : "not checked"}</p>
        </>
    )

}

export default ReducerEx;