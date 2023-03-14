import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
   
    <br/><center>
    <h1><div class="bg-info p-2 text-white">Car Management System</div></h1></center>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
  
  
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
   
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      
        <li class="nav-item"><center>
         <Link class="nav-link active" aria-current="page" to="/user">User Management</Link></center>
        </li>
        <li class="nav-item">
       <center> <Link class="nav-link active" aria-current="page" to="/record">Go to Record</Link></center>
       
        </li>
        
        
      </ul>
      </div>
      
    </div>
    
  
</nav>
    </div>
  )
}

export default Navbar
