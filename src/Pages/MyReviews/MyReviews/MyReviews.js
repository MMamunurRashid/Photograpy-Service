import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import MyReviewCard from "../MyReviewCard/MyReviewCard";
import Swal from "sweetalert2";
import useTitle from "../../../Hooks/useTitle";

const MyReviews = () => {
  //dynamic title page
  useTitle("My Reviews");
  const { user, logOut } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

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

  // delete my review by id
  const handleDeleteReview = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to delete the review?"
    );
    if (proceed) {
      fetch(`https://assignment-11-server-lime.vercel.app/my-review/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Your review Deleted successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            const remaining = reviews.filter((review) => review._id !== id);
            setReviews(remaining);
          }
        })
        .catch((err) => console.error(err));
    }
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
                    ></MyReviewCard>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <>
            <h1 className="text-center text-3xl my-40">
              No reviews were added
            </h1>
          </>
        )}
      </div>
    </div>
  );
};

export default MyReviews;
