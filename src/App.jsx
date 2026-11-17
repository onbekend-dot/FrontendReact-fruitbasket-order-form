import './App.css';
import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>

            <button onClick={() => setCount(count + 1)}>
                Voeg fruit toe
            </button>

            <p>Aantal stuks fruit: {count}</p>
            <p>Aantal: {count}</p>
        </>
    );
}

function App() {
    return <Counter />;
}

export default App;