import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../../Hooks/useTitle";

const UpdateMyReview = () => {
  useTitle("Update My Review");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/my-reviews";

  const review = useLoaderData();
  const { user, logOut } = useContext(AuthContext);
  const [reviews, setReviews] = useState(review);

  useEffect(() => {
    fetch(
      `https://assignment-11-server-lime.vercel.app/my-review?email=${user?.email} `,
      {
        // token verification for the user
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
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
    fetch(
      `https://assignment-11-server-lime.vercel.app/my-review/${review._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(reviews),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully Update your Review",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
        console.log(data);
      });
  };

  const handleUpdateChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newReview = { ...reviews };
    newReview[field] = value;
    setReviews(newReview);
  };

  return (
    <div className="sm:w-1/2  sm:m-auto mx-4">
      <h1 className="sm:text-4xl text-xl font-serif sm:my-10 my-5">
        Update Review for {review.packageName}
      </h1>
      <form onSubmit={handleUpdateReview}>
        <textarea
          onChange={handleUpdateChange}
          defaultValue={review.reviewMessage}
          name="reviewMessage"
          className="textarea textarea-bordered h-40 w-full"
          placeholder="Type here your updated review"
          required
        ></textarea>
        <br />
        <div className="text-center my-5">
          <input
            type="submit"
            value="Submit"
            className="btn btn-success hover:btn-secondary"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateMyReview;
