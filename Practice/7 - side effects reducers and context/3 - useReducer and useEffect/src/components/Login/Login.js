import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const emailReducer = (prevState, action) => {
    // STORES NEW STATE VALUE
    if(action.type === 'USER_INPUT') {
      return { value: action.val, isValid: action.val.includes('@') }
    }
    // VALIDATES STATE VALUE ON BLUR
    if(action.type === 'INPUT_BLUR') {
      return { value: prevState.value, isValid: prevState.value.includes('@') }
    }
    // this is the default state
    return { value: '', isValid: false}
  }

  const passwordReducer = (prevState, action) => {
    if(action.type === 'USER_INPUT') {
      return { value: action.val, isValid: action.val.trim().length > 6 }
    }
    if(action.type === 'INPUT_BLUR') {
      return { value: prevState.value, isValid: prevState.value.trim().length > 6 }
    }
    return { value: '', isValid: false}
  }

  // REDUCERS
  const [emailState, dispatchEmail] = useReducer(emailReducer, { value: '', isValid: null });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, { value: '', isValid: null });

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  // EFFECT
  // this runs if the the validity changed
  // avoid passing an entire object to the dependencies
  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(emailIsValid && passwordIsValid);
    },500);
    return () => { clearTimeout(identifier); }
  }, [emailIsValid,passwordIsValid])

  const emailChangeHandler = (event) => {
    dispatchEmail({type: 'USER_INPUT', val: event.target.value})
    // setFormIsValid(event.target.value.includes('@') && passwordState.isValid);
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type: 'USER_INPUT', val: event.target.value})
    // setFormIsValid(emailState.isValid && event.target.value.trim().length > 6);
  };

  // ON BLUR VALIDATIONS
  const validateEmailHandler = () => { dispatchEmail({type: 'INPUT_BLUR'}) };
  const validatePasswordHandler = () => { dispatchPassword({type: 'INPUT_BLUR'}) };

  // LOGIN USER
  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.IsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
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
