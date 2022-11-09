import React from "react";
import { useLoaderData } from "react-router-dom";
import AddReview from "../AddReview/AddReview";
import ReviewSection from "../ReviewSection/ReviewSection";

const Service = () => {
  const { name, details, _id, price, picture } = useLoaderData();
  console.log(name);
  return (
    <div>
      <div className="sm:w-2/5 m-auto my-10 ">
        <div className="card card-compact  bg-base-100 shadow-xl">
          <figure>
            <img className="w-full rounded-xl mx-2" src={picture} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className=" text-5xl text-white font-serif font-bold">
              {name}
            </h2>
            <p>Package Details: {details}</p>
            <h2 className=" text-2xl text-white font-serif font-bold">
              Charge: {price} BDT
            </h2>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <ReviewSection></ReviewSection>
      <AddReview name={name}></AddReview>
    </div>
  );
};

export default Service;