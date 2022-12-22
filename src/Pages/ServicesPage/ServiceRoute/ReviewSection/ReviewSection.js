import React, { useEffect, useState } from "react";

import ReviewCard from "./ReviewCard/ReviewCard";

const ReviewSection = ({ name }) => {
  console.log(name);
  const [reviews, setReviews] = useState([]);

  console.log(reviews);
  useEffect(() => {
    fetch(
      `https://assignment-11-server-lime.vercel.app/reviews?packageName=${name}`
    )
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error(err));
  }, [name]);
  return (
    <div className="sm:w-1/2 m-auto">
      <h1 className="text-2xl text-white text-center my-6">
        Package {name} have {reviews.length} reviews
      </h1>

      {reviews?.length === 0 ? (
        <></>
      ) : (
        reviews.map((review) => (
          <ReviewCard key={review._id} review={review}></ReviewCard>
        ))
      )}
    </div>
  );
};

export default ReviewSection;
