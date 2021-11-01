import React, { useState, useEffect } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  // EFFECT WITHOUT DECLARED DEPENDENCIES
  // THIS RUNS ON EVERY KEYSTROKE
  // runs every time component is rerendered
  // useEffect(() => {
  //   console.log('EFFECT 1 RUNNING')
  // });

  // EFFECT WITH DECLARED DEPENDENCIES BUT EMPTY
  // THIS RUNS AT THE FIRST LOAD OF THE PAGE ONLY
  // useEffect(() => {
  //   console.log('EFFECT 2 RUNNING')
  // }, [])

  // EFFECT WITH DEPENDENCIES
  // - every time enteredEmail, enteredPassword changed, the function runs
  // - advantage, enables us to use one code instead of two
  // - if no dependency is declared, the use effect runs every reload
  // - if array only with no dependency, use effect runs only once
  // - if dependency is set, use effect runs everytime the dependency changed on value
  // - this could be a side effect, side effects runs in response of another action
  useEffect(() => {
    // DEBOUNCING
    // - will wait for the user to pause typing before validating the inputed value
    const identifier = setTimeout(() => {
      console.log('Check Validity');
      setFormIsValid(
        enteredEmail.includes('@') && enteredPassword.trim().length > 6
      );
    },500);
    // THIS RUNS BEFORE THE NEXT ONE
    // - this is a cleanup function before executing the next batch funtion run
    // - it does not run before the first execution (onload), it runs at the second execution
    // so that it will be able to handle the next
    return () => {
      console.log('CLEANUP');
      // this will clear the first timeout before the last timeout
      // thiw will clear the rest of the timer and run the last timer that runs
      clearTimeout(identifier);
    }
  }, [enteredEmail, enteredPassword])

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
