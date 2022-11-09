import React, { useContext } from "react";
import { AuthContext } from "../../../../Contexts/AuthProvider/AuthProvider";

const AddReview = ({ name, price, _id }) => {
  //   console.log(name);
  const { user } = useContext(AuthContext);

  const handleReviewSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = user?.email;
    const photoURL = user?.photoURL;
    const displayName = user?.displayName;
    const reviewMessage = form.review.value;

    console.log(email, photoURL, displayName, reviewMessage);

    const review = {
      packageID: _id,
      packageName: name,
      price,
      photoURL,
      customerName: displayName,
      email,
      reviewMessage,
    };
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Reviews successfully");
          form.reset();
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="w-1/2 m-auto my-5">
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
      <form onSubmit={handleReviewSubmit}>
        <textarea
          name="review"
          className="textarea textarea-bordered w-full"
          placeholder={`Type your review for ${name}`}
          required
        ></textarea>
        <br />
        <input
          className="btn btn-primary"
          type="submit"
          value="Submit Your Review"
        />
      </form>
    </div>
  );
};

export default AddReview;
