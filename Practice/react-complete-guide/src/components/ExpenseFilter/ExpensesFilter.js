import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

  const onChangeYearHandler = (event) => {
    props.onChangeYear(event.target.value)
  }

  return (
    <form>
      <div className='expenses-filter'>
        <div className='expenses-filter__control'>
          <label>Filter by year</label>
          <select value={props.selected} onChange={onChangeYearHandler}>
            <option value='2022'>2022</option>
            <option value='2021'>2021</option>
            <option value='2020'>2020</option>
            <option value='2019'>2019</option>
          </select>
        </div>
      </div>
    </form>
  );
};

export default ExpensesFilter;