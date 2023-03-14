import React from 'react'
import { Link } from 'react-router-dom'
const Already = () => {
  return (
    <div><center>
      <table><br></br>
                    <tr><td>User Name</td>
                    <td><input type="text" name="un"/></td></tr><br></br>

                    <tr><td>password</td>
                    <td><input type="password" name="ps"/></td></tr><br></br>

                    <tr><td><button class="btn btn-outline-success">
                    <Link class="nav-link active" aria-current="page" to="/newuser">Log-in</Link>
                    </button></td></tr>

                    </table></center>
    </div>
  )
}

export default Already

