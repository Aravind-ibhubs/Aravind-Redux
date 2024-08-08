import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { decrement,increment,incrementByValue, incrementByAsync,decrementByValue } from '../reducer/counter';
import { useState } from 'react';

const H = function() {
    const count = useSelector((state) => state.counter.value);
    const  dispatch = useDispatch();
    const [amount, setAmount] = useState(2);

    return (
        <div>
            <h4>Counter - {count}</h4>
            <button 
                onClick={() => dispatch(increment())}>
                    Increment
            </button><br />
            <button 
                onClick={() => dispatch(decrement())}>
                    Decrement
            </button><br />
            <input 
                type='number'
                onChange={(e) => setAmount(e.target.value)}
            /><br />
            <button
             onClick={() => 
                dispatch(incrementByValue(Number(amount) || 0))}>
                Add amount
            </button><br />
            <button
                onClick={() => dispatch(incrementByAsync(Number(amount) || 0))}>
                Add Async
            </button><br />
            <button
                onClick={() => dispatch(decrementByValue(Number(amount) || 0))}>
                Decrement by amount
            </button>
        </div>
    )
}

export default H;
