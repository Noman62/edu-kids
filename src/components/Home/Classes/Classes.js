import React from "react";
import art from '../../../Image/art.jpg';
import mathematics from '../../../Image/mathematics.jpg'
import active from '../../../Image/active.jpg';

const Classes = () => {
  return (
    <section className="row m-5">
      <div className="col-md-4">
        <div class="card" style={{width: '18rem'}}>
            <img src={art} alt=""/>
          <div class="card-body">
            <h5 class="card-title">Art Class</h5>
            <p class="card-text">Age Group:3-5 Years</p>
            <p>Class Size:12</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
      <div class="card" style={{width: '18rem'}}>
          <img src={active} alt=""/>
            <div class="card-body">
                <h5 class="card-title">Active Learning</h5>
                <p class="card-text">Age Group:2-5 Years</p>
              <p>Class Size:12</p>
            </div>
        </div>
      </div>
      <div className="col-md-4">
      <div class="card" style={{width: '18rem'}}>
          <img src={mathematics} alt=""/>
            <div class="card-body">
                <h5 class="card-title">Mathematics</h5>
                <p class="card-text">Age Group:3-5 Years</p>
              <p>Class Size:12</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Classes;
