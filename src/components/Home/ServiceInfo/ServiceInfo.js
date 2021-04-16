import React from "react";

const ServiceInfo = ({ service }) => {
  return (
   
      <div className="col-md-4">
        <div class="card" style={{ width: "18rem" }}>
          <img src={service.image} alt="" />
          <div class="card-body">
            <h5 class="card-title">{service.name}</h5>
            <p class="card-text">{service.subject}</p>
          </div>
        </div>
      </div>
  );
};

export default ServiceInfo;
