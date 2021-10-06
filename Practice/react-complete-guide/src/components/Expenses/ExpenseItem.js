import React, { useSate } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../Templates/Card';

// props can be named to anything
const ExpenseItem = (props) => {
    useState()
    let title = props.title;
    const clickHandler = () => {
        title = "Updated";
    }
    return (
        <Card className="expense-item">
            <ExpenseDate title={title} amount={props.amount} date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    )
}

export default ExpenseItem;