import React, { useEffect,useState } from 'react'

const Alluser = () => {
        let [user,setUser] = useState([])
        useEffect(()=>{
          fetch("https://apicars.prisms.in/user/getall")
          .then((res)=>{return res.json()}).then((data)=>{
            setUser(data.Users)
          })
        },[])


  return (
    <div className ='container'>
    

          <table className ="table">
          <thead>
          <tr className ="table-Success">
          <th scope="col">User Id</th>
          <th scope="col">Name</th><br></br><br></br>
          <th scope="col">Phone Number</th>
          </tr>
          </thead>
          {user.map((result)=>(
<tr className ="table-Success">
  <td className ="table-Success">{result.id}</td>
  <td className ="table-Success">{result.name}</td><br></br><br></br>
  <td className ="table-Success">{result.phone_no}</td>
</tr>
          
          ))}
          </table>
        
      
   
    
  
</div>

  )}
export default Alluser
