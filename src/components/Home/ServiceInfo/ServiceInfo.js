import React from "react";
import { useHistory } from "react-router";
import { serviceData } from "../Services/Services";

const ServiceInfo = (props) => {
  const {name,imageURL}=props.service;
  console.log(imageURL);
  let history = useHistory();
  const handleMeeting=(name)=>{
    history.push(`/shipment/${name}`)
  }
  
  return (
   
      <div className="col-md-4">
        <div class="card" style={{ width: "18rem" }}>
          <img src={imageURL} alt="" />
          <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">Math</p>
            <button  onClick={()=>handleMeeting(name)} className="btn btn-warning">Hire..</button>
          </div>
        </div>
      </div>
  );
};

export default ServiceInfo;
