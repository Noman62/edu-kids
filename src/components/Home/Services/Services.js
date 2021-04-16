import React from "react";
import ServiceInfo from "../ServiceInfo/ServiceInfo";
import literacy from "../../../Image/literacy.jpg";
import jennifer from "../../../Image/jennifer.jpg";
import math from "../../../Image/math.jpg";

const serviceData = [
  {
    image: literacy,
    name: "Lily Carter",
    subject: "Literacy Teacher",
  },
  {
    image: jennifer,
    name: "Jennifer Lawrence",
    subject: "Mathematics Teacher",
  },
  {
    image: math,
    name: "Richard Hil",
    subject: "Art And Music Teacher",
  },
];

const Services = () => {
  return (
    <section className="services-container mt-5">
      <div className="text-center ">
        <h5 style={{ color: "#FE6602" }}>OUR SERVICES</h5>
        <h2 style={{color:'#434A54'}}>Meet Our Teacher</h2>
      </div>
      <div className="d-flex justify-content-center">
        <div className="w-75 row mt-2 pt-5">
          {serviceData.map((service) => (
            <ServiceInfo service={service} key={service.name}></ServiceInfo>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
