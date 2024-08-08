import { useContext,useState } from "react";
import {UserName} from "../App";
import { useDispatch,useSelector } from "react-redux";
import { incrementByValue,decrementByValue } from "../reducer/counter";

const D = function({info}) {
    const name = useContext(UserName);
    const dispatch = useDispatch();
    const [enteredValue, changeValue] = useState(0);
    const count = useSelector((state) => state.counter.value);    

    return (
        <div>
            <h1>This is D component - {name}</h1>
            <p>User count is {count}</p>
            <div>
                <input 
                    type="Number" 
                    onChange={(e) => changeValue(e.target.value)} 
                /><br />
                <button
                    onClick={() => dispatch(incrementByValue(Number(enteredValue)))}
                >
                    Add
                </button><br />
                <button
                    onClick={() => dispatch(decrementByValue(Number(enteredValue)))}
                >
                    Minus
                </button>
            </div>
        </div>
    )
}

export default D;
