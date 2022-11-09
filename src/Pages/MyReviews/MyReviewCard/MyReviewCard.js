import React from "react";
import { HiOutlineTrash, HiPencil } from "react-icons/hi";
const MyReviewCard = ({ review, handleDeleteReview }) => {
  //   console.log(review, handleDeleteReview);
  const { _id, reviewMessage, packageName } = review;

  return (
    <tr>
      <td>
        <label>
          <button
            onClick={() => handleDeleteReview(_id)}
            className="btn btn-ghost hover:btn-error"
          >
            <HiOutlineTrash title="Delete Review" className="w-6 h-6" />
          </button>
        </label>
      </td>
      <td>
        <h1>{packageName}</h1>
      </td>

      <td>
        <h1 className="">{reviewMessage}</h1>
      </td>
      <td>
        <label>
          <button className="btn btn-ghost hover:btn-error">
            <HiPencil title="Edit Review" className="w-6 h-6" />
          </button>
        </label>
      </td>
    </tr>
  );
};

export default MyReviewCard;
