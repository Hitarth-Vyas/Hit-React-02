import useInputs from "../hooks/use-inputs";

const BasicForm = () => {
  const {
    value: enteredFname,
    hasError: fnameIsInvalid,
    valueChangeHandler: fnameChangeHandler,
    valueBlurHandler: fnameBlurHandler,
    reset: resetFname,
  } = useInputs(value => value.trim() !== '');

  const {
    value: enteredLname,
    hasError: lnameIsInvalid,
    valueChangeHandler: lnameChangeHandler,
    valueBlurHandler: lnameBlurHandler,
    reset: resetLname,
  } = useInputs(value => value.trim() !== '');

  const {
    value: enteredEmail,
    hasError: emailIsInvalid,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInputs(value => value.includes('@'));

  let formIsValid = false;

  if(!fnameIsInvalid && !lnameIsInvalid && !emailIsInvalid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log('Submitted');
    console.log(enteredEmail, enteredFname, enteredLname);

    resetFname();
    resetLname();
    resetEmail();
  };

  const fnameInputClasses = fnameIsInvalid
  ? 'form-control invalid'
  : 'form-control';

  const lnameInputClasses = lnameIsInvalid
  ? 'form-control invalid'
  : 'form-control';
  
  const emailInputClasses = emailIsInvalid
  ? 'form-control invalid'
  : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className={fnameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input 
            type='text' 
            id='name'
            value={enteredFname}
            onChange={fnameChangeHandler}
            onBlur={fnameBlurHandler}
          />
          {fnameIsInvalid && (
            <p className='error-text'>First name must not be empty.</p>
          )}
        </div>
        <div className={lnameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input 
            type='text' 
            id='name' 
            value={enteredLname}
            onChange={lnameChangeHandler}
            onBlur={lnameBlurHandler}
          />
          {lnameIsInvalid && (
            <p className='error-text'>Last name must not be empty.</p>
          )}
        </div>
        <div className={emailInputClasses}>
          <label htmlFor='name'>E-mail Adress</label>
          <input 
            type='text' 
            id='name'
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
          {emailIsInvalid && (
            <p className='error-text'>Please enter an valid email.</p>
          )}
        </div>
        <div className='form-actions'>
          <button disabled={!formIsValid}>Submit</button>
        </div>
      </div>
    </form>
  );
}

export default BasicForm;