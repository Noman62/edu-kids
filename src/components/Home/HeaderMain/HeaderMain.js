import React from 'react';
import './Headermain.css';
import banner from '../../../Image/banner.jpg'
const HeaderMain = () => {
    return (
       <section className="row">
          <div style={{marginLeft:'20%',marginTop:'5%'}} className="col-md-6  p-5">
            <h3 style={{color:'#FE6602'}}>Friendly Atmosphere</h3>
            <h1 style={{color:'#5852A0'}}>Welcoming Place</h1>
            <h2 style={{color:'#FE6602'}}>For Every Child</h2>
            <button className="btn btn-warning pr-5 ps-5">Details..</button>
          </div>
           
       </section>
    );
};

export default HeaderMain;