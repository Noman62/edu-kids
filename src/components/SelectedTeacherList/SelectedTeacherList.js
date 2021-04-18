import React, { useEffect, useState } from 'react';
import SelectedTeacher from '../selectedTeacher/SelectedTeacher';

const SelectedTeacherList = () => {
const [selectedTeacher,setSelectedTeacher]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:8080/bookings')
        .then(res=>res.json())
        .then(data=>setSelectedTeacher(data));
    
      },[])
    return (
        <div>
            {
                selectedTeacher.map(teacher=><SelectedTeacher teacher={teacher}></SelectedTeacher>)
            }
        </div>
    );
};

export default SelectedTeacherList;