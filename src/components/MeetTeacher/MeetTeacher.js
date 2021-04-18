import userEvent from "@testing-library/user-event";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { UserContext } from "../../App";
import ProcessPayment from "../ProcessPayment/ProcessPayment";


const MeetTeacher = () => {
    const [user,setUser]=useState([]);
    const { register, handleSubmit, watch, errors } = useForm();
     const { id } = useParams();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const onSubmit = data => {
    console.log(data);
  };
useEffect(()=>{
fetch(`http://localhost:8080/service/${id}`)
.then(res=>res.json())
.then(data=>{
  setUser(data);
  console.log(data);
})
},[])
  return (
    <div>
        {/* <div class="main border border-success shadow-sm p-3 mb-5 bg-body rounded" style={{marginLeft:'5%',marginTop:'3%',width:'800px'}}> */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input name="name" defaultValue={loggedInUser.displayName} ref={register} />
                    <br />
                    <input name="email" defaultValue={loggedInUser.email} ref={register} />
                    <br />
                    <input name="teacher" defaultValue={user.name} ref={register} />
                    <br />
                    <div >
                      <p>Your service Charge Will be ${user.price}</p>
                      <ProcessPayment></ProcessPayment>
                    </div>
                    {errors.exampleRequired && <span>This field is required</span>}
                    <input type="submit" />
                </form>
            
    </div>
  );
};

export default MeetTeacher;
