import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Contexts/AuthProvider/AuthProvider";
import ReviewCard from "./ReviewCard/ReviewCard";

const ReviewSection = ({ name }) => {
  const { loading } = useContext(AuthContext);
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
    <div className="sm:w-2/3 m-auto">
      <h1 className="text-2xl text-white text-center my-6">
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
              {reviews?.length === 0 ? (
                <></>
              ) : (
                reviews.map((review) => (
                  <ReviewCard key={review._id} review={review}></ReviewCard>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
