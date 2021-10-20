import { useEffect, useState } from 'react';

const Counter = () => {
    const [clickedTimes, setClickedTimes] = useState(0);

    console.log('Counter rendered');

    useEffect(() => console.log('Counter useEffect'), [clickedTimes]);

    return (
        <div>
            <h2>I was clicked {clickedTimes}</h2>
            <button onClick={() => setClickedTimes((prev) => prev + 1)}>Click me</button>
            <button onClick={() => setClickedTimes(0)}>Reset</button>
        </div>
    )
};

export default Counter;
