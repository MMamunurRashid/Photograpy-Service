import React from "react";
import { Link } from "react-router-dom";
import { PhotoView } from "react-photo-view";

const ServicesCardHome = ({ pack }) => {
  const { name, picture, _id, price, details } = pack;
  //   console.log(name);
  return (
    <div className="">
      <div className="card  bg-base-100 shadow-xl">
        <figure className="px-10 pt-10 rounded-xl w-full sm:h-64 h-32 overflow-hidden">
          <PhotoView src={picture}>
            <img
              className="rounded-xl w-full sm:h-64 h-32  hover:cursor-pointer  transition ease-in-out delay-100 hover:-translate-y-[784px, 1446px] hover:scale-125  duration-500 hover:opacity-30 "
              src={picture}
              alt=""
            />
          </PhotoView>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>
            Package Details:{" "}
            {details.length !== 100 ? details.slice(0, 100) + "...." : details}
          </p>
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

export default ServicesCardHome;
