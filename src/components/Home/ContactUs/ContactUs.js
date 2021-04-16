import React from 'react';
import child from '../../../Image/child.jpg'
import './ContactUs.css'

const ContactUs = () => {
    return (
        <div style={{backgroundColor:'#E1EFFB'}} className="row mt-5 pt-5">
            <div className="col-md-5">
                <img style={{width:'500px',marginLeft:'70px',height:'300px'}} src={child} alt=""/>
            </div>
            <div className="col-md-7 mt-5">
                <h1><span style={{color:'#FE6602'}}>GET ENROLL</span>,<span style={{color:'#1F94C8'}}>HOW TO ENROLL YOUR CHILD <br/> TO A CLASS</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo recusandae sit <br/> possimus praesentium nisi quas.</p>
                <button className="btn btn-warning pr-5 ps-5">CONTACT NOW</button>
            </div>
        </div>
    );
};

export default ContactUs;