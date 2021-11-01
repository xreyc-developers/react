import React, { useState, Fragment } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;

/**
 * FRAGMENTS
 * # EXAMPLE1:
 * import React from 'react';
 * <></>
 * or
 * <React.Fragment></React.Fragment>
 * 
 * # EXAMPLE2:
 * import React, { Fragment } from 'react';
 * <Fragment></Fragment>
 */