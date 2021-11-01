const redux = require('redux');

// ################ REDUCER ################
// RECEIVES TWO INPUTS
// - old state
// - action
// RETURNS A NEW STATE OBJECT OR A STRING
// SHOULD ONLY RECEIVE DATA PRODUCED BY REDUX AND SAVE IT TO THE STORE
const counterReducer = (state = { counter: 0 }, action) => {
    if(action.type === 'increment') {
        return {
            counter: state.counter + 1
        }
    }
    if(action.type === 'decrement') {
        return {
            counter: state.counter -1
        }
    } 
    return state;
};
// THIS REGISTERES THE REDUCER
const store = redux.createStore(counterReducer);


// ################ SUBSCRIBER ################
// SUBSCRIBER GETS DATA FROM THE STATE
// THIS GETS THE LATEST STATE SNAPSHOT
const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
};
// MAKE REDUX AWARE OF THIS FUNCTION
// THIS MAKES THE SUBSCRIBE FUNCTION EXECUTED EVERYTIME THE GETS STATE UPDATED
store.subscribe(counterSubscriber);


// ################ ACTIONS ################
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });