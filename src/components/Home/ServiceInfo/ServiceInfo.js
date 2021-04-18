import React from "react";
import { useHistory } from "react-router";
import './ServiceInfo.css';
const ServiceInfo = (props) => {
  const {name,imageURL,_id}=props.service;
  console.log(props.service);

  let history = useHistory();
  const handleMeeting=(id)=>{
    history.push(`/shipment/${id}`)
  }
  
  return (
   
      <div className="col-md-4">
        <div class="card shadow p-3 mb-5 bg-body rounded" style={{ width: "18rem" }}>
          <img src={imageURL} alt="" />
          <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">Math</p>
            <button  onClick={()=>handleMeeting(_id)} className="btn btn-warning">Hire..</button>
          </div>
        </div>
      </div>
  );
};

export default ServiceInfo;
