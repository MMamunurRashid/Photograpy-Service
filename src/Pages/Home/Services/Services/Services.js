import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServicesCardHome from "../ServicesCardHome/ServicesCardHome";
import { PhotoProvider } from "react-photo-view";
import { useContext } from "react";
import { AuthContext } from "../../../../Contexts/AuthProvider/AuthProvider";
import Loading from "../../../../Shared/Loading/Loading";

const Services = () => {
  const { loading } = useContext(AuthContext);
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetch("https://assignment-11-server-lime.vercel.app/services-limit")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="my-5">
      <h1 className=" text-5xl text-center font-serif font-semibold mt-10 mb-5">
        My Services & Packages
      </h1>
      <p className="text-xl text-center ">
        I'm providing the best Budget Photography & Cinematography service in
        the town.
      </p>
      <PhotoProvider>
        <div className="grid sm:grid-cols-3 gap-5 sm:mx-40 my-5">
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
