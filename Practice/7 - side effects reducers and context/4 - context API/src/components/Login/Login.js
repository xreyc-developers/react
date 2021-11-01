import React, { useState, useEffect, useReducer, useContext, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';
import Input from '../UI/Input/Input';

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
  return { value: '', isValid: false }
}

const passwordReducer = (prevState, action) => {
  if(action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 6 }
  }
  if(action.type === 'INPUT_BLUR') {
    return { value: prevState.value, isValid: prevState.value.trim().length > 6 }
  }
  return { value: '', isValid: false }
}

const Login = () => {
  const [formIsValid, setFormIsValid] = useState(false);
  // AUTHENTICATION CONTEXT
  const authCtx = useContext(AuthContext)
  
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  // REDUCERS
  const [emailState, dispatchEmail] = useReducer(emailReducer, { value: '', isValid: null });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, { value: '', isValid: null });

  // EFFECT
  // this runs if the the validity changed
  // avoid passing an entire object to the dependencies
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;
  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(emailIsValid && passwordIsValid);
    },500);
    return () => { clearTimeout(identifier); }
  }, [emailIsValid,passwordIsValid])


  // EVENT HANDLERS
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
    if(formIsValid) {
      authCtx.onLogin(emailState.value, passwordState.value);
    } else if(!emailIsValid) {
      emailInputRef.current.focus()
    } else {
      passwordInputRef.current.focus()
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          id="email"
          label="E-Mail"
          type="email"
          isValid={emailIsValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          ref={passwordInputRef}
          id="password"
          label="Password"
          type="password"
          isValid={passwordIsValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
