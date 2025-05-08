import { useState } from "react";

function App() {
    let [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(++counter);
        console.log(counter);
    };

    const reset = () => {
        setCounter(0);
        console.log(counter);
    };

    return (
        <div>
            <p>Counter: {counter}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default App;
