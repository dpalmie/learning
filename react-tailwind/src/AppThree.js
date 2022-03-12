import React, { useState, useEffect } from "react";
import "./App.css";

function AppThree() {
    const [emotion, setEmotion] = useState("happy");
    const [secondary, setSecondary] = useState("tired")

    useEffect(() => {
        console.log(`It's ${emotion} around here`)
    }, [emotion]); // if emotion state changes it will call useEffect

    useEffect(() => {
        console.log(`Secondary emotion: ${secondary}`)
    }, [secondary]); // if secondary state changes it calls this useEffect

    return (
        <>
            <h1>Current emotion is {emotion}!</h1>
            <button onClick={() => setEmotion("frustrated")}>Frustrate</button>
            <button onClick={() => setEmotion("hungry")}>Hunger</button>
            <button onClick={() => setSecondary("crabby")}>Crabbify</button>
        </>
    )

}

export default AppThree;