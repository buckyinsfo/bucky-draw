import React, { useLayoutEffect, useState } from 'react'
//import rough from 'roughjs'

const App = () => {

    const [count, setCount] = useState(0);

    // During first render
    // function Counter() {
    //     const count = 0; // Returned by useState()
    // }

    function handleAlertClick() {
        setTimeout(() => {
            alert('You clicked on: ' + count);
        }, 3000);
    }

    // check to see if this is the hook you use to manipulate dom elements?
    useLayoutEffect(() => {
        const canvas = document.getElementById("canvas")
        const ctx = canvas.getContext("2d")

        ctx.fillStyle = "blue"
        ctx.fillRect(0, 0, 550, 550)

        //const roughCanvas = rough.canvas(document.getElementById("canvas"))
        //roughCanvas.rectangle(100, 100, 400, 400)
    })

    return (
        <dev>
            <canvas id="canvas" width={window.innerWidth} height={window.innerHeight / 2}>Canvas</canvas>
            <button onClick={() => setCount(count + 1)}>Click Me! {count}</button>
            <button onClick={handleAlertClick}>Show Alert</button>
    </dev >)
          
};

export default App;    

// {/* <button onClick={() => setCount(count + 1)}>
//             Click me
//          </button> */}