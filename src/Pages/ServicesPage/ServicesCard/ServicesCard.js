import React from "react";

const ServicesCard = ({ pack }) => {
  const { name, picture, _id, price, details } = pack;
  //   console.log(name);
  return (
    <div className="">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={picture} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>
            Package Details:{" "}
            {details ? details.slice(0, 100) + "...." : details}
          </p>
          <h2>Charges: {price} BDT</h2>
          <div className="card-actions">
            <button className="btn btn-secondary">Book A Date</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
