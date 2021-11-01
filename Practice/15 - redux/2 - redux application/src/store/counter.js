import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };
// REDUCERS VIA CREATE SLICE
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            // HERE WE ARE ABLE TO MUTATE STATE DIRECTLY
            // THIS LOOK LIKE WE ARE MUTATING THE STATE BUT REDUX TOOLKIT
            // IS DOING SOMETHING BEHIND THE SCENE
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

// ACTIONS
export const counterActions = counterSlice.actions;

// REDUCER
export default counterSlice.reducer;