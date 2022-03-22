
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import UsersForm from './components/UsersForm';
import UsersList from './components/UsersList';

function App() {

  const[users, setUsers] = useState([])
  const[userSelected, setUserSelected] = useState(null)
  const[isShowing, setIsShowing] = useState(false) 
  

 useEffect(() => {
  getUsers()
 },[])

 const changeShow = () =>{
   setIsShowing(!isShowing)
 }
  

const getUsers = () =>{
  axios.get("https://users-crud1.herokuapp.com/users/")
  .then(res => setUsers(res.data))
}

const eliminateUser= id => {
  axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
  .then(() => getUsers())
}

  return (
    <div className="App">
      {isShowing ? <button  onClick={changeShow}>close</button> : <button onClick={changeShow}>create new user</button>}
      {isShowing && <UsersForm  getUsers={getUsers} userSelected={userSelected} setUserSelected={setUserSelected} /> }
      
      <UsersList  users={users} setUserSelected={setUserSelected} eliminateUser= {eliminateUser}/>
    </div>
  );
}

export default App;
