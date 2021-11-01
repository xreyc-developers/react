// ########### FOR SINGLE SLICE STORE (REDUX TOOLKIT) ###########
import { useSelector, useDispatch } from 'react-redux';

import { counterActions } from '../store/index';

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  // SUBSCRIBE TO REDUX STORE
  // ON UNMOUNT THE SUBSCRIPTION IS AUTOMATICALLY REMOVED
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter);

  const incrementHandler = () => {
    // dispatch({ type: 'increment' });
    dispatch(counterActions.increment()); // { type: SOME UNIQUE IDENTIFIER}
  }

  const decrementHandler = () => {
    // dispatch({ type: 'decrement' });
    dispatch(counterActions.decrement());
  }

  const increaseHandler = () => {
    // dispatch({ type: 'increase', amount: 5 });
    dispatch(counterActions.increase(10)); // { type: SOME UNIQUE IDENTIFIER, payload: THE INPUT }
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase By 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;


// ######## REDUX ON CLASS BASED COMPONENT
// import { Component } from 'react';
// import { connect } from 'react-redux';
//
// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }
// 
//   decrementHandler() {
//     this.props.decrement();
//   }
// 
//   toggleCounterHandler() {}
// 
//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }
// 
// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   }
// }
// 
// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     decrement: () => dispatch({ type: 'decrement' })
//   }
// }
// 
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
