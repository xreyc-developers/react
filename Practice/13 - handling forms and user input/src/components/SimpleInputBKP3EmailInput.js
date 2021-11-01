import { useState } from "react";


const SimpleInputTest = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  // NAME VALIDATION
  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  // EMAIL VALIDATION
  const enteredEmailIsValid = enteredEmail.trim() !== '' && enteredEmail.includes('@');
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;
  
  let formIsValid = false;

  if(enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  // NAME INPUT KEYSTROKES
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  }
  // USER LEAVES THE NAME INPUT
  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  }

  // PER EMAIL KEYSTROKES
  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  }
  // USER LEAVES THE EMAIL INPUT
  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  }

  // USER SUBMIT
  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if(!enteredNameIsValid) return;

    console.log(enteredName);
    setEnteredName('');
    setEnteredNameTouched(false);

    setEnteredEmail('');
    setEnteredEmailTouched(false);
  }

  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          type='text'
          id='name'
          onBlur={nameInputBlurHandler}
          onChange={nameInputChangeHandler}
        />
        {nameInputIsInvalid && <p className="error-text">Name must not be empty.</p>}
      </div>

      <div className={emailInputClasses}>
        <label htmlFor='name'>Your Email</label>
        <input 
          type='email'
          id='email'
          onBlur={emailInputBlurHandler}
          onChange={emailInputChangeHandler}
        />
        {emailInputIsInvalid && <p className="error-text">Please enter a valid email.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInputTest;