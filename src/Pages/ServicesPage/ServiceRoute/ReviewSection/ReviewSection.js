import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard/ReviewCard";

const ReviewSection = ({ name }) => {
  console.log(name);
  const [reviews, setReviews] = useState([]);

  console.log(reviews);
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?packageName=${name}`)
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error(err));
  }, [name]);
  return (
    <div className="w-2/3 m-auto">
      <h1>
        Packages: {name} have {reviews.length} reviews
      </h1>
      <div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead className="">
              <tr className=" ">
                <th>Customer</th>
                <th>Review</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review) => (
                <ReviewCard key={review._id} review={review}></ReviewCard>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
