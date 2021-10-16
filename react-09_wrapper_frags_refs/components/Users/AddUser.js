import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      // As js will treat the enteredAge as a string '+' sign will ensure it as an integer
      setError({
        title: "Invalid Age",
        message: "Enter age greater than 0.",
      });
      return;
    }
    props.onAddUser(enteredName, enteredUserAge);

    // Rarely use below method to reset the form , rather state methods are better to reset the form
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>

    // [                            // We can use aray too
    // error && (
    //   <ErrorModal
    //     key='error-modal'
    //     title={error.title}
    //     message={error.message}
    //     onConfirm={errorHandler}
    //   />
    // ),
    // <Card key='add-user-card' className={classes.input}>
    //   <form onSubmit={addUserHandler}>
    //     <label htmlFor="username">Username</label>
    //     <input
    //       id="username"
    //       type="text"
    //       value={enteredUsername}
    //       onChange={usernameChangeHandler}
    //     />
    //     <label htmlFor="age">Age (Years)</label>
    //     <input
    //       id="age"
    //       type="number"
    //       value={enteredAge}
    //       onChange={ageChangeHandler}
    //     />
    //     <Button type="submit">Add User</Button>
    //   </form>
    // </Card>
    // ]
  );
};

export default AddUser;
