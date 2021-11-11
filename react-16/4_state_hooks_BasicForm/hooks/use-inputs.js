import { useState } from 'react';

const useInputs = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const isValid = validateValue(enteredValue);
  const hasError = !isValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value)
  };

  const valueBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue('');
    setIsTouched(false);
  };

  return{
    value: enteredValue,
    isTouched,
    isValid,
    hasError,
    valueChangeHandler,
    valueBlurHandler,
    reset,
  }
}

export default useInputs;