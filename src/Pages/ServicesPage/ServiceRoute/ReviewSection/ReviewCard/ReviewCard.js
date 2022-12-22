import { format } from "date-fns/esm";
import React from "react";

const ReviewCard = ({ review }) => {
  //   console.log(review);
  const { customerName, photoURL, reviewMessage, date } = review;
  // const reviewDate = date.slice(0, 10);
  const reviewDate = format(new Date(date), "pp P");
  console.log(reviewDate);

  return (
    <div>
      <div className="flex gap-5 items-center  my-5">
        <div className="avatar">
          <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={photoURL} alt="" />
          </div>
        </div>
        <div className="border px-5 py-2 rounded-3xl">
          <div className="flex justify-between ">
            <h1 className="sm:mr-10">{customerName}</h1>
            <p>{reviewDate}</p>
          </div>
          <p>{reviewMessage}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
