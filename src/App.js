import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import "./App.css";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (username, userage) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { name: username, age: userage, id: Math.random().toString() }];
    });
  };

  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
