import React, { useState, Fragment } from 'react';
// import { Fragment } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
import './App.css';

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList, 
        {name: uName, age: uAge, id:Math.random().toString()}
      ]
    })
  };

  return (
    // <div>
    // <>                 // Syntax for react fragment, not always valid
    // <React.Fragment>   // Always valid
    <Fragment>            // Always valid if React Fragment is imported
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={userList} />
    </Fragment>
    // </React.Fragment>
    // </>
    // </div>
  );
}

export default App;
