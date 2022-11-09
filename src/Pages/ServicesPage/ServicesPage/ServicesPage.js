import React from "react";
import { useLoaderData } from "react-router-dom";
import ServicesCard from "../ServicesCard/ServicesCard";

const ServicesPage = () => {
  const packages = useLoaderData();

  return (
    <div>
      <h1 className="text-white text-5xl text-center font-serif font-semibold ">
        My Services & Packages
      </h1>
      <p className="text-xl text-center ">
        I'm providing the best Budget Photography & Cinematography service in
        the town.
      </p>
      <div className="grid grid-cols-3 gap-3 mx-40 my-5">
        {packages.map((pack) => (
          <ServicesCard key={pack._id} pack={pack}></ServicesCard>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;