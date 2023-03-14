import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Newuser = () => {

  const navigate=useNavigate();
  const [name, setName] = useState()
  const [phone_no, setPhone_no] = useState()
  const handleSubmit=async(e)=>{
      e.preventDefault();
     const response= await fetch('https://apicars.prisms.in/user/create',{
          method: 'POST',
          headers:{ "Content-Type": "application/json" },
          body: JSON.stringify({name,phone_no})
      })
      const json = await response.json();
      if(json.error=='0'){
            navigate('/newaccount');
      }
      console.log(json);
     
    }

  return (
    <div> <div className="container mt-3">
    <div className="row justify-content-center">
      <div className="col-md-5">
       
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label"
            
            >
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id=""
              name=""
              aria-describedby=""
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleInputPassword1"
              className="form-label"
             
            >
              Phone Number
            </label>
            <input
              type="text"
              className="form-control"
              id=""
              name=""
              value={phone_no}
              onChange={(e) => {
                setPhone_no(e.target.value);
              }}
            />
          </div>

          <button type="submit" className="btn btn-primary form-control">
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</div>
)
}

export default Newuser
