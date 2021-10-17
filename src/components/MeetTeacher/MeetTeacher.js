import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import ProcessPayment from "../ProcessPayment/ProcessPayment";


import './MeatTeacher.css';

const MeetTeacher = () => {
  const [user, setUser] = useState([]);
  const { register, handleSubmit, errors } = useForm();
  const { id } = useParams();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const onSubmit = (data) => {
    console.log(data);
    data.price=user.price;

    const url = `https://hidden-peak-44578.herokuapp.com/addBooking`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res) {
        console.log("server side response");
        alert(" Submitted Successful");
      }
    });
  };

  useEffect(() => {
    fetch(`https://hidden-peak-44578.herokuapp.com/service/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
       
      });
  }, []);
  return (
   <div>
        <div class="sidenav">
                  <Link class="nav-link text-white" aria-current="page" to="/shipment">Meet Teacher</Link>
                  <Link class="nav-link text-white" aria-current="page" to="/selectedTutor">Selected Teacher</Link>
                  <Link class="nav-link text-white" aria-current="page" to="/review">Add Review</Link>
          </div>
        <div class="main border border-success shadow-sm p-3 mb-5 bg-body rounded" style={{marginLeft:'40%',marginTop:'10%',width:'600px'}}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            name="name"
            defaultValue={loggedInUser.displayName}
            ref={register}
          />
          <br />
          <input name="email" defaultValue={loggedInUser.email} ref={register} />
          <br />
          <input name="teacher" defaultValue={user.name} ref={register} />
          <br />
          <div>
            <ProcessPayment></ProcessPayment>
            <small>Your service Charge Will be {user.price}</small>
          </div>
          {errors.exampleRequired && <span>This field is required</span>}
          <input type="submit" />
        </form>
      </div>
   </div>
  );
};

export default MeetTeacher;
