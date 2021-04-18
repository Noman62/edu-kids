import React from "react";

const SelectedTeacher = ({ teacher }) => {

  return (
    <div className="col-md-6 m-2">
      <div class="card" style={{ width: "18rem" }}>
        <div class="card-body">
        <h5 class="card-title">{teacher.teacher}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Teacher</h6>
          <p class="card-text">${teacher.price}</p>
          
        </div>
      </div>
    </div>
  );
};

export default SelectedTeacher;
