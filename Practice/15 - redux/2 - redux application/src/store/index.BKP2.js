import { createSlice, configureStore } from '@reduxjs/toolkit';

// ########### COUNTER ###########
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


// ########### AUTHENTICATION ###########
const initialAuthState = { isAuthenticated: false }
const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    }
})

// STORE
// const store = createStore(counterSlice.reducer);
const store = configureStore({
    // SINGLE SLICE
    // reducer: counterSlice.reducer
    // access store: state.counter 

    // MULTIPLE SLICE
    // access store: state.counter.counter
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }
});

// ACTIONS
// IDENTIFIER ARE CREATED BEHIND THE SCENE
// ACTION MUST MATCH THE NAME OF METHOD ON THE REDUCER
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

// counterActions.increment()
// THIS WILL GENEREATE THE RANDOM GENERATED KEY ALREADY EXISTING CREATED
// BY THE TOOLKIT
// RESULT: { type: 'random_generated_key' }

export default store;