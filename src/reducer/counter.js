import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0};

// const counterReducer = (state = initialScore,action) => {
//     switch (action.key) {
//         case "INCREMENT":
//             return { ...state, value: state.value + 1};
//         case "DECREMENT":
//             return {...state, value: state.value - 1};
//         default:
//             return state;
//     }
// };

// export default counterReducer;

export const countSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByValue: (state, action) => {
            state.value += action.payload
        },
        decrementByValue: (state, action) => {
            state.value -= action.payload
        },
    },
})

export const incrementByAsync = (amount) => (dispatch) => {
    setTimeout(() => {
        dispatch(incrementByValue(amount))
    },1000)
}

export const selectCount = (state) => state.counter.value;
export const {increment, decrement, incrementByValue, decrementByValue} = countSlice.actions
export default countSlice.reducer

