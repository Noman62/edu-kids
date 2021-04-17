import React, { useEffect, useState } from "react";
import ReviewDetail from "../ReviewDetail/ReviewDetail";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section style={{backgroundColor:'#F4F7FC'}} className="mt-5">
      <div  className="text-center ">
        <h1 style={{color:'#434A54'}}>TESTIMONIAL</h1>
      </div>
    <div className="d-flex justify-content-center">
    <div className="w-75 row mt-2 pt-5">
        {reviews.map((review) => (
          <ReviewDetail review={review}></ReviewDetail>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Review;
