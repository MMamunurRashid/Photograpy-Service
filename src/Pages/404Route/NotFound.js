import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <div className="sm:w-4/5 pt-10  m-auto">
        <div className=" w-full p-2">
          <img
            className="sm:rounded-3xl rounded-lg"
            src="https://www.lifewire.com/thmb/auk-givypeTY383aFHJnpl6fQSU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/404-not-found-error-explained-2622936-Final-fde7be1b7e2e499c9f039d97183e7f52.jpg"
            alt=""
          />
        </div>
        <h1 className="sm:text-5xl text-2xl font-serif pt-10  text-center">
          This route not found Status : 404
        </h1>
        <div className="text-center mt-5 pb-40">
          <Link to={`/home`}>
            <small className="text-xl  border-0 bg-indigo-600 hover:bg-indigo-300 text-white font-semibold rounded-xl px-12 py-1">
              Go To Home
            </small>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
