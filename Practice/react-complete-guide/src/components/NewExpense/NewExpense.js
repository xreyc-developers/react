import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
    const [isShowForm, setIsShowForm] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onSaveExpenseData(expenseData)
    }

    const showForm = () => {
        setIsShowForm(true);
    }

    const hideForm = () => {
        setIsShowForm(false);
    }

    return (
        <div className="new-expense">
            {!isShowForm && <button onClick={showForm}>Add New Expense</button>}
            {isShowForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onHideForm={hideForm}/>}
        </div>
    )
};

export default NewExpense;