import React, { useState } from 'react';
import './Expenses.css'
import ExpensesList from './ExpensesList';
import ExpensesFilter from '../ExpenseFilter/ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import Card from '../Templates/Card';

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState('2020');
    const onChangeYearHandler = (year) => {
        setSelectedYear(year);
    }

    // FILTER EXPENSES
    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === selectedYear;
    });

    // key - enables react to identify which element to update
    // - if we do not add key, the whole iterated elements will
    // be recreated since react doesn't know which is which.
    // - without key, react will just add the newly created item
    // to the end of the iterated items, then updates vale of all
    // the iterated elements so that it would match to the order
    // of the state we have
    // - if we add key, react add only specific element to the 
    // current existing elements

    // THIS IS JUST A TEST TO UNDERSTAND JSX
    // CONDITIONAL STATEMENT
    // const expenseElementsItems = (
    //     <div>
    //         {filteredExpenses.length === 0 && <p>No expenses found.</p>}
    //         {filteredExpenses.length > 0 && filteredExpenses.map(expense => (
    //             <ExpenseItem 
    //                 key={expense.id}
    //                 title={expense.title} 
    //                 amount={expense.amount}
    //                 date={expense.date}
    //             />
    //         ))}
    //     </div>
    // )

    const expenseElements = (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={selectedYear} onChangeYear={onChangeYearHandler}/>
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    )
    return expenseElements
}

export default Expenses;