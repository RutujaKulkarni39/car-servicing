import React from 'react'
import { Link } from 'react-router-dom'
const Record = () => {
  return (
    <div>

      
      <form class="d-flex">
      
        
       
       
        </form>
        
        <br></br><br></br><br></br>
        <center>  
        <button class="btn btn-outline-success">
        <Link class="nav-link active" aria-current="page" to="/alluser">Get All User</Link>
        </button> <br></br><br></br>


        <button class="btn btn-outline-success">
        <Link class="nav-link active" aria-current="page" to="/search">Search User By Id</Link>
        </button>
        <br></br><br></br>
        <button class="btn btn-outline-success">
        <Link class="nav-link active" aria-current="page" to="/searchcar">Search your car</Link>
        </button>
        

        <br></br><br></br>
        <button class="btn btn-outline-success">
        <Link class="nav-link active" aria-current="page" to="/user">User Management</Link>
        </button>
        </center>
        </div>
  )
}

export default Record
