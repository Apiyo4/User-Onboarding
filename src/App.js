import React, {useState} from 'react';

import './App.css';
import UserForm from "./components/Form"

function App() {
  const [users, setUsers] = useState([]);
  return (
    <div className="App">
      <h1>Hello world</h1>
      <UserForm users= {users} setUsers = {setUsers} />
    </div>
  );
}

export default App;
