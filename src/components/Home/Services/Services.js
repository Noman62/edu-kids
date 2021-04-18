import React, { useEffect, useState } from "react";
import ServiceInfo from "../ServiceInfo/ServiceInfo";

const Services = () => {
  const [tutor, setTutor] = useState([]);
  useEffect(() => {
    fetch("https://fast-wildwood-45255.herokuapp.com/allService")
      .then((res) => res.json())
      .then((data) => setTutor(data));
  }, []);
  return (
    <section className="services-container mt-5">
      <div className="text-center ">
        <h5 style={{ color: "#FE6602" }}>OUR SERVICES</h5>
        <h2 style={{ color: "#434A54" }}>Meet Our Teacher</h2>
      </div>
      <div className="d-flex justify-content-center">
        <div className="w-75 row mt-2 pt-5">
          {tutor.map((service) => (
            <ServiceInfo service={service} key={service._id}></ServiceInfo>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
