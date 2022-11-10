import React from "react";
import { HiOutlineTrash, HiPencil } from "react-icons/hi";
const MyReviewCard = ({ review, handleDeleteReview, handleUpdateReview }) => {
  const { _id, reviewMessage, packageName } = review;

  const handleSubmit = (event) => {
    event.preventDefault();
    const editReviewMessage = event.target.editReviewMessage.value;
    handleUpdateReview(_id, editReviewMessage);
    // console.log(editReviewMessage);
  };

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
        <label htmlFor="my-modal-6" className="btn btn-ghost hover:btn-error">
          <HiPencil title="Edit Review" className="w-6 h-6" />
        </label>
        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Edit your review</h3>
            <form onSubmit={handleSubmit}>
              <textarea
                className="textarea textarea-bordered w-full"
                placeholder="Type your review"
                name="editReviewMessage"
              ></textarea>
              <div className="modal-action">
                <label htmlFor="my-modal-6" className="btn">
                  Done
                </label>
                {/* <input
                  htmlFor="my-modal-6"
                  type="submit"
                  className="btn"
                  value="Done"
                /> */}
              </div>
            </form>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default MyReviewCard;
