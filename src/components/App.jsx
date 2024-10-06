import React, { useState, useEffect } from "react";

function App() {
    const [time, updateTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateTime(new Date().toLocaleTimeString());
        }, 1000);

        // Clear the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="container">
            <h1>{time}</h1>
        </div>
    );
}

export default App;
