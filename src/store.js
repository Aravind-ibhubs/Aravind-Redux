import { legacy_createStore as createStore } from "redux";
import rootReducer from './reducer';
import { configureStore } from "@reduxjs/toolkit";
import countSlice from '../src/reducer/counter';

// const store = createStore(rootReducer);
const store = configureStore({
    reducer: {
        counter: countSlice,
    },
})

export default store;

