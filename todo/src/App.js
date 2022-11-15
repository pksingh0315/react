import React,{useState} from 'react'
import './App.css';
import AddUsers from './components/Users/AddUsers';
import UserList from './components/Users/UserList';
function App() {
  const [usersList,setUsersList]=useState([])

  const addUserHandler=(enterData)=>{
   let newList=[enterData,...usersList]
   setUsersList(newList)


  }
 
  return (
    <>
    <AddUsers onAddUser={addUserHandler}/>
    <UserList item={usersList}/>
    </>
  )
   
  
}

export default App;
