// import { legacy_createStore as createStore } from "redux"; //this is for redux
// import rootReducer from './reducer'; // This is for redux
import { configureStore } from "@reduxjs/toolkit";
import countSlice from '../src/reducer/counter';

// const store = createStore(rootReducer);
const store = configureStore({
    reducer: {
        counter: countSlice,
    },
})

export default store;

