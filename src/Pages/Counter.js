import React, { useState, useEffect } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    const increase = () => {
        setCount(count + 1)
    };

    const inputChange = (e) => {
        setName(e.target.value);
    }

    useEffect(() => {
        console.log('와! 랜더링!')
    },);

    return (
        <div className='plus'>
            <div>{count}</div>
            <button onClick={increase}>plus</button>
            <div>
                <input type='text' value={name} onChange={inputChange} />
            </div>
            <div>{name}</div>
        </div>
    );
}

export default Counter;


