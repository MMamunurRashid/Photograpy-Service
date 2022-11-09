import React from "react";

const ReviewCard = ({ review }) => {
  //   console.log(review);
  const { customerName, photoURL, email, reviewMessage } = review;
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="rounded w-24 h-24">
              <img src={photoURL} alt="" />
            </div>
          </div>
          <div>
            <div className="font-bold">{customerName}</div>
            <div className="text-sm opacity-50">{email}</div>
          </div>
        </div>
      </td>

      <td>
        <h1 className="">{reviewMessage}</h1>
      </td>
    </tr>
  );
};

export default ReviewCard;
