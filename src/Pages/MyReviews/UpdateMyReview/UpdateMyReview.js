import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const UpdateMyReview = () => {
  const { user, logOut } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  console.log(reviews);

  useEffect(() => {
    fetch(`http://localhost:5000/my-review?email=${user?.email} `, {
      // token verification for the user
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        if (res.status === 401) {
          logOut();
        }
        return res.json();
      })
      .then((data) => setReviews(data))
      .catch((err) => console.error(err));
  }, [user, logOut]);

  const handleUpdateReview = (event) => {
    event.preventDefault();
    const form = event.target;

    const reviewMessage = form.reviewMessage.value;
    // fetch(`http://localhost:5000/my-review/${id}}`, {
    //   method: "PATCH",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify({ reviewMessage: reviewMessage }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     if (data.modifiedCount > 0) {
    //       const remaining = reviews.filter((review) => review._id !== id);
    //       const editing = reviews.find((review) => review._id === id);
    //       editing.reviewMessage = reviewMessage;
    //       const newReviews = [...remaining, editing];
    //       setReviews(newReviews);
    //     }
    //   });
  };

  return (
    <div>
      <h1>Update your Review</h1>
      <form onSubmit={handleUpdateReview}>
        <textarea
          name="reviewMessage"
          className="textarea textarea-bordered"
          placeholder="Type here your updated review"
          required
        ></textarea>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default UpdateMyReview;
