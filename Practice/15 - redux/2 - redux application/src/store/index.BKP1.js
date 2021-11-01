import { createStore } from 'redux';

export const INCREMENT = 'increment';

const initialState = { counter: 0, showCounter: true };

// REDUCER
const counterReducer = (state = initialState, action) => {
    if(action.type === INCREMENT) {
        // DO NOT MANUALLY MUTATE THE STATE
        // EXAMPLE: state.counter++;
        // ALWAYS RETURN A VALUE
        // REDUX SHOULD BE THE ONE TO DO THE UPDATING FOR US
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter
        }
    }

    if(action.type === 'decrement') {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        }
    }

    if(action.type === 'increase') {
        return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter
        }
    }

    if(action.type === 'toggle'){
        return {
            showCounter: !state.showCounter,
            counter: state.counter
        }
    }
    
    return state
}

// STORE
const store = createStore(counterReducer);

export default store;