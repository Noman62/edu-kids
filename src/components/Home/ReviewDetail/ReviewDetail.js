import React from "react";

const ReviewDetail = ({ review }) => {
  return (
    <div className="col-md-4">
      <div class="card" style={{ width: "18rem" }}>
        <div class="card-body">
          <h5 class="card-title">{review.name}</h5>
          <p class="card-text">{review.description}</p>
          <span class="fa fa-star checked"></span>
          <span style={{ color: "orange" }} className="fa fa-star"></span>
          <span
            style={{ color: "orange" }}
            className="fa fa-star checked"
          ></span>
          <span style={{ color: "orange" }} className="fa fa-star"></span>
          <span style={{ color: "orange" }} className="fa fa-star"></span>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetail;
