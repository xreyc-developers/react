import { useState, useRef, useEffect } from "react";


const SimpleInput = (props) => {
  // USED ON SUBMIT (always updated, no need for an event listener)
  // USED FOR SUBMIT VALIDATION
  // NOT IDEA FOR RESETING THE VALUE BECAUSE IT DIRECTLY MANIPULATES THE DOM
  const nameInputRef = useRef('');
  // USED ON EVERY KEYSTROKE (always updated, needs an event listener)
  // USED FOR EVERY KEYSTROKE VALIDATION
  // BEST USED FOR RESETING THE VALUE BY BIND THE VALUE TO THE INPUT
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  // CHECK IF THE INPUT WAS TOUCHED OR NOT
  // TO BE ABLE TO GET THE INITIAL VALUE
  useEffect(() => {
    if(enteredNameIsValid) {
      console.log('Name Input is valid');
    }
  }, [enteredNameIsValid])

  // PER USER KEYSTROKES
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);

    if(event.target.value.trim() !== '') {
      setEnteredNameIsValid(true);
    }
  }

  // USER LEAVES THE INPUT
  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);

    if(enteredName.trim() === '') {
      setEnteredNameIsValid(false);
    }
  }

  // USER SUBMIT
  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if(enteredName.trim() === '') {
      setEnteredNameIsValid(false);
      return;
    }

    setEnteredNameIsValid(true);

    console.log(enteredName);
    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);
  }

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          type='text'
          id='name'
          ref={nameInputRef}
          onBlur={nameInputBlurHandler}
          onChange={nameInputChangeHandler}
        />
        {nameInputIsInvalid && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
