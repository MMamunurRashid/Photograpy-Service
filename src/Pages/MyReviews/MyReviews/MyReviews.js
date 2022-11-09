import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import MyReviewCard from "../MyReviewCard/MyReviewCard";

const MyReviews = () => {
  const { user } = useContext(AuthContext);

  const [reviews, setReviews] = useState([]);

  //   console.log(reviews);
  useEffect(() => {
    fetch(`http://localhost:5000/review?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error(err));
  }, [user]);
  return (
    <div>
      <div className="w-2/3 m-auto">
        <div className="flex gap-5 items-center justify-center my-5">
          <div className="avatar">
            <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={user?.photoURL} alt="" />
            </div>
          </div>
          <div>
            <h1>{user?.displayName}</h1>
            <h1>{user?.email}</h1>
          </div>
        </div>
        <div>
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              <thead className="">
                <tr className=" ">
                  <th>Delete</th>
                  <th>Packages</th>
                  <th>Review</th>
                  <th>Edit</th>
                </tr>
              </thead>
              <tbody>
                {reviews.map((review) => (
                  <MyReviewCard key={review._id} review={review}></MyReviewCard>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReviews;
