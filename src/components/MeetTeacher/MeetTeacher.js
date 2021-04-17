import userEvent from "@testing-library/user-event";
import React, { useContext, useState } from "react";
import { useParams } from "react-router";
import { UserContext } from "../../App";
import { serviceData } from "../Home/Services/Services";
import ProcessPayment from "../ProcessPayment/ProcessPayment";


const MeetTeacher = () => {
    const [service,setService]=useState([]);
    
  const { name } = useParams();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    fetch(`/serviceData/${name}`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        setService(data)
    })
  return (
    <div>
      <div>
        <form action="">
          <input id="name" type="text" value={loggedInUser.displayName} />
          <br />
          <input id="name" type="text" value={loggedInUser.email} />
          <br />
          <input id="name" type="text" value={service.name} />
          <div>
            <ProcessPayment></ProcessPayment>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MeetTeacher;
