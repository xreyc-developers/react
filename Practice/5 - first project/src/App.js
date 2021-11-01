import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [users,setUsers] = useState([]);

  const onSaveUserHandler = (new_name,new_age) => {
    setUsers((prevUsersList) => {
      return [...prevUsersList, {id: Math.random().toString() ,name: new_name, age: new_age}]
    })
  }

  return (
    <div>
      <AddUser onSaveUser={onSaveUserHandler}/>
      <UsersList users={users}/>
    </div>
  );
}

export default App;
