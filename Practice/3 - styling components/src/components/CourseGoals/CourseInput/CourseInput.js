import React, { useState } from 'react';
//import styled from 'styled-components';

import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';

// STYLE COMPONENT ALLOWS US TO WRITE STYLE FOR SPECIFIC COMPONENT
// THAT MAKES UNIQUE TO OTHER COMPONENTS STYLE

//const FormControl =  styled.div`
//  margin: 0.5rem 0;
//
//  & label {
//    font-weight: bold;
//    display: block;
//    margin-bottom: 0.5rem;
//  }
//
//  & input {
//    display: block;
//    width: 100%;
//    border: 1px solid ${props => (props.invalid ? 'red' : '#ccc')};
//    background-color: ${props => (props.invalid ? '#ffd7d7' : 'transparent')}
//    font: inherit;
//    line-height: 1.5rem;
//    padding: 0 0.25rem;
//  }
//
//  & input:focus {
//    outline: none;
//    background: #fad0ec;
//    border-color: #8b005d;
//  }
//
//  &.invalid input {
//    border-color: red;
//    background-color:  rgb(211, 154, 154);
//  }
//
//  &.invalid label {
//    color: red;
//  }
//`;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length === 0) {
      setIsValid(false);
      return
    }
    props.onAddGoal(enteredValue);
  };


  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );

  // USING STYLE COMPONENT WITH PROPS
  //return (
  //  <form onSubmit={formSubmitHandler}>
  //    <FormControl invalid={!isValid}>
  //      <label>Course Goal</label>
  //      <input type="text" onChange={goalInputChangeHandler} />
  //    </FormControl>
  //    <Button type="submit">Add Goal</Button>
  //  </form>
  //);
  
  // STYLED COMPONENT PACKAGE WITH DYNAMIC CLASS
  // STYLED COMPONENT PACKAGE ALLOWS US CREATE ISOLATED STYLE FOR SPECIFIC
  // COMPONENT
  // return (
  //   <form onSubmit={formSubmitHandler}>
  //     <FormControl className={!isValid && 'invalid'}>
  //       <label>Course Goal</label>
  //       <input type="text" onChange={goalInputChangeHandler} />
  //     </FormControl>
  //     <Button type="submit">Add Goal</Button>
  //   </form>
  // );

  // DYNAMIC CLASS CSS
  // return (
  //   <form onSubmit={formSubmitHandler}>
  //     <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
  //       <label>Course Goal</label>
  //       <input type="text" onChange={goalInputChangeHandler} />
  //     </div>
  //     <Button type="submit">Add Goal</Button>
  //   </form>
  // );

  // DYNAMIC INLINE CSS
  // return (
  //   <form onSubmit={formSubmitHandler}>
  //     <div className="form-control invalid">
  //       <label style={{color: !isValid ? 'red' : 'black'}}>Course Goal</label>
  //       <input style={{
  //         borderColor: !isValid ? 'red' : '#ccc',
  //         background: !isValid ? 'salmon' : 'transparent'
  //         }} type="text" onChange={goalInputChangeHandler} />
  //     </div>
  //     <Button type="submit">Add Goal</Button>
  //   </form>
  // );
};

export default CourseInput;
