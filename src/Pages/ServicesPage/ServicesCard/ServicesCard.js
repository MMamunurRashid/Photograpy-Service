import React from "react";
import { Link } from "react-router-dom";
import { PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const ServicesCard = ({ pack }) => {
  const { name, picture, _id, price, details } = pack;
  //   console.log(name);
  return (
    <div className="">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <PhotoView src={picture}>
            <img className="rounded-xl" src={picture} alt="" />
          </PhotoView>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>Package Details: {details}</p>
          <h2>Charges: {price} BDT</h2>
          <div className="card-actions">
            <Link to={`/service/${_id}`} className="btn btn-secondary">
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
