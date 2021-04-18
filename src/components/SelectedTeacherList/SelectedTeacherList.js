import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import SelectedTeacher from '../selectedTeacher/SelectedTeacher';
import './SelectedTeacherList.css'
const SelectedTeacherList = () => {
const [selectedTeacher,setSelectedTeacher]=useState([]);
const [loggedInUser, setLoggedInUser]=useContext(UserContext);
    useEffect(()=>{
        fetch('https://fast-wildwood-45255.herokuapp.com/bookings?email='+loggedInUser.email)
        .then(res=>res.json())
        .then(data=>setSelectedTeacher(data));
    
      },[])
    return (
      <div>
             <div class="sidenav">
                <Link class="nav-link text-white" aria-current="page" to="/shipment">Meet Teacher</Link>
                <Link class="nav-link text-white" aria-current="page" to="/selectedTutor">Selected Teacher</Link>
                <Link class="nav-link text-white" aria-current="page" to="/review">Add Review</Link>
         </div>
         <div style={{marginLeft:'20%',marginTop:'10%',width:'300px'}}>
         <div className="row">
            {
                selectedTeacher.map(teacher=><SelectedTeacher teacher={teacher}></SelectedTeacher>)
            }
        </div>
         </div>
      </div>
    );
};

export default SelectedTeacherList;