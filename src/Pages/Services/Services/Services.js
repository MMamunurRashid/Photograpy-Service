import React, { useEffect, useState } from "react";
import ServicesCardHome from "../ServicesCardHome/ServicesCardHome";

const Services = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);

  return (
    <div className="my-5">
      <h1 className="text-white text-5xl text-center font-serif font-semibold ">
        My Services & Packages
      </h1>
      <p className="text-xl text-center ">
        I'm providing the best Budget Photography & Cinematography service in
        the town.
      </p>
      <div className="grid grid-cols-3 gap-3 mx-40 my-5">
        {packages.map((pack) => (
          <ServicesCardHome key={pack._id} pack={pack}></ServicesCardHome>
        ))}
      </div>
      <div className="text-center">
        <button className="btn btn-error">See More</button>
      </div>
    </div>
  );
};

export default Services;
