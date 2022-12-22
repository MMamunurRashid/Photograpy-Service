import React from "react";

import "./Header.css";

const Header = () => {
  return (
    <div className="sm:w-5/6 mx-auto mt-5 ">
      <div className="hero  bg-images">
        <div className="hero-overlay bg-title"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md sm:bg-slate-700 opacity-60 sm:p-10 rounded-full">
            <h1 className="mb-5 text-5xl font-bold font-serif ">
              Smile Photography
            </h1>
            <p className="mb-5 sm:text-2xl  font-serif">
              Premium Class Wedding Photography & Cinematography Service.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
