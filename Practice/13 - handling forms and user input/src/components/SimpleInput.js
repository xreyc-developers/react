import useInputReducer from "../hooks/use-input-reducer";

const SimpleInputTest = (props) => {
  const nameValidation = (value) => value.trim() !== '';
  const { 
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInputReducer(nameValidation);

  const emailValidation = (value) => value.includes('@')
  const { 
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInputReducer(emailValidation);
  
  let formIsValid = false;
  if(enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  // USER SUBMIT
  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if(!enteredNameIsValid) return;
    console.log(enteredName, enteredEmail);
    resetNameInput();
    resetEmailInput();
  }

  const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          type='text'
          id='name'
          onBlur={nameBlurHandler}
          onChange={nameChangedHandler}
        />
        {nameInputHasError && <p className="error-text">Name must not be empty.</p>}
      </div>

      <div className={emailInputClasses}>
        <label htmlFor='name'>Your Email</label>
        <input 
          type='email'
          id='email'
          onBlur={emailBlurHandler}
          onChange={emailChangedHandler}
        />
        {emailInputHasError && <p className="error-text">Please enter a valid email.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInputTest;