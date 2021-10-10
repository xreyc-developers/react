import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../Templates/Card';

// props can be named to anything
const ExpenseItem = (props) => {
    //const [title, setTitle] = useState(props.title)
    //const clickHandler = () => {
    //    setTitle("Updated");
    //}
    //<button onClick={clickHandler}>Change Title</button>
    return (
        <Card className="expense-item">
            <ExpenseDate title={props.title} amount={props.amount} date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
        </Card>
    )
}

export default ExpenseItem;