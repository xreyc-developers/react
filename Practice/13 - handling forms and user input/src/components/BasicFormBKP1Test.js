import useInputTest from "../hooks/use-input-test";

const BasicFormTest = (props) => {
  const {
    enteredValue: firstName,
    valueIsValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName
  } = useInputTest(value => value !== '');

  const {
    enteredValue: lastName,
    valueIsValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName
  } = useInputTest(value => value !== '');


  const {
    enteredValue: email,
    valueIsValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail
  } = useInputTest(value => value.includes('@'));

  let formIsValid = false;
  if(firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const sumbitHandler = (event) => {
    event.preventDefault();
    if(!formIsValid) return
    console.log(firstName, lastName, email);
    resetFirstName();
    resetLastName();
    resetEmail();
  }

  const firstNameInputClasses = firstNameHasError ? 'form-control invalid' : 'form-control';
  const lastNameInputClasses = lastNameHasError ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={sumbitHandler}>
      <div className='control-group'>

        <div className={firstNameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input 
            type='text'
            id='name'
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={firstName}
          />
          {firstNameHasError && <p className="error-text">Enter a valid first name</p>}
        </div>

        <div className={lastNameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input
            type='text'
            id='name'
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={lastName}
          />
          {firstNameHasError && <p className="error-text">Enter a valid last name</p>}
        </div>
      </div>

      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input
          type='email'
          id='name'
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={email}
        />
        {firstNameHasError && <p className="error-text">Enter a valid email</p>}
      </div>

      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicFormTest;
