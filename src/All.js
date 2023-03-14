import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const All = () => {
  const navigate=useNavigate();
  let [user, setUser] = useState([]);
  const [name, setName] = useState();
  const [phone_no, setPhone_no] = useState();
  const [message, setMessage] = useState();
  useEffect(() => {
    fetch("https://apicars.prisms.in/user/getall")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        //console.log(data.Users)
        setUser(data.Users);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const Loginuser = user.filter((res) => { return (
      res.name === name && res.phone_no === phone_no)});
    //  console.log(Loginuser);
    if(Loginuser.length=='0'){
      console.log("Invalid Username or Phone Number");
      setMessage('Invalid Username or Phone Number');
    }else{
      console.log("sucess");
      navigate ('/form1')
    }
  };

  return (
    <div>
      <div className="container mt-3">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <form onSubmit={handleSubmit}>
              <span>{message}</span>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
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
                <label htmlFor="exampleInputPassword1" className="form-label">
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
  );
};

export default All;