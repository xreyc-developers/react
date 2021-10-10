import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    // STATE INITIALIZE WITH EMPTY VALUE
    // ########### MULTIPLE STATE APPROACH ########### 
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    
    // EVENT HANDLER FOR MULTIPLE STATE APPROACH
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    // ########### SINGLE STATE APPROACH ########### 
    // - BEST IF YOU WANT TO RUN SOME ACTIONS
    // - YOU MIGHT HAVE A USE CASE WHERE YOU WANT TO USE THIS
    // FOR EXAMPLE, YOU WANT TO ADD A COUNTER ON YOUR UPDATE
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    // EVENT HANDLER FOR SINGLE STATE APPROACH
    // const titleChangeHandler = (event) => {
        // - THIS AUTOMACALLY SETS THE PREVIOUS STATE AND UPDATE IT WITH A NEW ONE
        // - YOU MIGHT NOT GET THE LATEST STATE SOMETIMES BECAUSE THE REACT SCHEDULES
        // STATE UPDATE, BY USING A FUNCTION YOU WILL GET THE LATEST STATE
        // setUserInput({
        //    ...userInput,
        //    enteredTitle: event.target.value
        // })

        // - SETUSETINPUT PASSES THE LATEST PREVIOUS STATE TO THE FUNCTION
        // ON THIS SETUP YOU CAN PERFORM ADDITIONAL ACTION SICE IT LIES
        // UNDER A FUNCTION
        // - STATE RECEIVED ON THE FUNCTION ARE THE LATEST ON
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value }
        // })
    // }

    // const amountChangeHandler = (event) => {
        // setUserInput({
        //    ...userInput,
        //    enteredAmount: event.target.value
        // })
        // setUserInput((prevState) => {
        //    return { ...prevState, enteredAmount: event.target.value  }
        // })
    // }

    // const dateChangeHandler = (event) => {
        // setUserInput({
        //    ...userInput,
        //    enteredDate: event.target.value
        // })
        // setUserInput((prevState) => {
        //    return { ...prevState, enteredDate: event.target.value }
        // })
    //}

    const submitHandler = (event) => {
        event.preventDefault();
        // enteredTitle, enteredAmount, enteredDate points to the state variables
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;