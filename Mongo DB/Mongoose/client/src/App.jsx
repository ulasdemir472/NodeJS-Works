import { useState,useEffect } from 'react'
import axios from "axios"

function App() {
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:3001/getUsers")
    .then((res)=>{
      setUsers(res.data);
    })
  },[])

  return (
    <div className="App" >
      {users.map((user)=>{
        return (
        <div key={user._id}>
          <h3>Name : {user.name}</h3>
          <h3>Age : {user.age}</h3>
          <h3>Username : {user.username}</h3> 
        </div>
        ) 
      })}
    </div>
  )
}

export default App
