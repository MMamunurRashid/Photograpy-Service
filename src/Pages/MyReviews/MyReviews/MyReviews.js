import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import MyReviewCard from "../MyReviewCard/MyReviewCard";

const MyReviews = () => {
  const { user } = useContext(AuthContext);

  const [reviews, setReviews] = useState([]);

  //   console.log(reviews);
  useEffect(() => {
    fetch(`http://localhost:5000/my-review?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error(err));
  }, [user]);

  const handleDeleteReview = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to delete the review?"
    );
    if (proceed) {
      fetch(`http://localhost:5000/my-review/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Deleted Successful");
            const remaining = reviews.filter((review) => review._id !== id);
            setReviews(remaining);
          }
        })
        .catch((err) => console.error(err));
    }
  };

  const handleUpdateReview = (id, editReviewMessage) => {
    console.log(id);
    fetch(`http://localhost:5000/my-review/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ reviewMessage: editReviewMessage }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = reviews.filter((review) => review._id !== id);
          const editing = reviews.find((review) => review._id === id);
          editing.reviewMessage = editReviewMessage;
          const newReviews = [...remaining, editing];
          setReviews(newReviews);
        }
      });
  };

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
        {reviews?.length !== 0 ? (
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
                    <MyReviewCard
                      key={review._id}
                      review={review}
                      handleDeleteReview={handleDeleteReview}
                      handleUpdateReview={handleUpdateReview}
                    ></MyReviewCard>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <>You Don't have any reviews</>
        )}
      </div>
    </div>
  );
};

export default MyReviews;
