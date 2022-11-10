import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServicesCardHome from "../ServicesCardHome/ServicesCardHome";
import { PhotoProvider } from "react-photo-view";

const Services = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services-limit")
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
      <PhotoProvider>
        <div className="grid grid-cols-3 gap-3 mx-40 my-5">
          {packages.map((pack) => (
            <ServicesCardHome key={pack._id} pack={pack}></ServicesCardHome>
          ))}
        </div>
      </PhotoProvider>
      <div className="text-center">
        <Link to="/services" className="btn btn-error">
          See More
        </Link>
      </div>
    </div>
  );
};

export default Services;
