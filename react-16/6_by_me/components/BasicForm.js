import useInput from "../hooks/use-input";
import Input from "./Input";

const BasicForm = () => {
  const {
    value: enteredFname,
    hasError: fnameIsInvalid,
    valueChangeHandler: fnameChangeHandler,
    valueBlurHandler: fnameBlurHandler,
    reset: resetFname,
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredLname,
    hasError: lnameIsInvalid,
    valueChangeHandler: lnameChangeHandler,
    valueBlurHandler: lnameBlurHandler,
    reset: resetLname,
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredEmail,
    hasError: emailIsInvalid,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(value => value.includes('@'));

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
    console.log(enteredEmail, ', ', enteredFname, ', ', enteredLname);

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
        <Input
          className={fnameInputClasses} 
          label='First Name'
          value={enteredFname}
          onChange={fnameChangeHandler}
          onBlur={fnameBlurHandler}
          isValid={fnameIsInvalid}
          text='first name must not be empty.'
        />
        <Input
          className={lnameInputClasses} 
          label='Last Name'
          value={enteredLname}
          onChange={lnameChangeHandler}
          onBlur={lnameBlurHandler}
          isValid={lnameIsInvalid}
          text='last name must not be empty.'
        />
        <Input
          className={emailInputClasses} 
          label='E-Mail Adress'
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          isValid={emailIsInvalid}
          text='Please enter an valid email.'
        />
        <div className='form-actions'>
          <button disabled={!formIsValid}>Submit</button>
        </div>
      </div>
    </form>
  );
}

export default BasicForm;