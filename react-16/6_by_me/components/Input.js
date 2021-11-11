import { Fragment } from 'react';

const Input = (props) => {
  return (
    <Fragment>
      <div className={props.className}>
        <label htmlFor='name'>{props.label}</label>
        <input 
          type='text' 
          id='name'
          value={props.value}
          onChange={props.onChange}
          onBlur={props.onBlur}
        />
        {props.isValid && (
          <p className='error-text'>{props.text}</p>
        )}
      </div>
    </Fragment>
  );
};

export default Input;