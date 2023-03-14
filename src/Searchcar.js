import React, { useState } from "react";

const Searchcar = () => {
  const [id, setId] = useState("");
  const [info, setInfo] = useState([]);
  

  const handlesearch = (e) => {
    e.preventDefault();
    fetch(`https://apicars.prisms.in/car/get/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        //console.log(data)
        //console.log(data.User.Cars);
         setInfo(data.Car);
      });
  };
  return (
    <div className="container">
      <h1>Search here </h1>
      <form onSubmit={handlesearch}>
        <div className="md-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Search
          </label>
          <input
            type="text"
            className="form-control"
            id=""
            aria-describedby=""
            value={id}
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
        </div>

        <button type="submit" className="btn btn-primary mt-2">
          Submit
        </button>
      </form>
     {info.map((result,index)=>(
      <div className="card mt-2" >
  
  <div className="card-body" key={index}>
    <h5 className="card-title">Car id : {result.id}</h5>
    <p className="card-text">Car Model : {result.model}</p>
    <p className="card-text">Car Color : {result.color}</p>
    <p className="card-text">Number Of Ownerss : {result.owner}</p>
    <p className="card-text">Purchase Date : {result.purchase_date}</p>
    
  </div>
</div>))}
    </div>
  );
};

export default Searchcar;