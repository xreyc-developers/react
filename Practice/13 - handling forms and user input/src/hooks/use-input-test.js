import { useState } from 'react';

const useInputTest = (validateInput) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateInput(enteredValue);
    const hasError = !valueIsValid && isTouched;


    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    }
    
    const inputBlurHandler = () => {
        setIsTouched(true)
    }

    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    }

    return {
        enteredValue,
        valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset
    }
}

export default useInputTest;