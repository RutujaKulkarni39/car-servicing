import React from 'react'
import { Link } from 'react-router-dom'

      
const User = () => {
  return (
    <>
    <div>
  <center>
      
      <h1>Welcome !!!</h1>
      
      <Link class="nav-link active" aria-current="page" to="/all"><h3>Log in</h3></Link><br></br>
       <Link class="nav-link active" aria-current="page" to="/newuser"><h3>create new user</h3></Link><br></br>
        <button class="btn btn-outline-success">
        <Link class="nav-link active" aria-current="page" to="/record">Go to Record</Link>
        
        </button>
        </center>
    </div>
    </>
  )
}

export default User
