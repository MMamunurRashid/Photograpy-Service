import React from "react";
import useTitle from "../../../Hooks/useTitle";

import Header from "../Header/Header";
import MyAccessories from "../MyAccessories/MyAccessories";
import PreviousWork from "../PreviousWork/PreviousWork";
import Services from "../Services/Services/Services";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Header></Header>
      <Services></Services>
      <PreviousWork></PreviousWork>
      <MyAccessories></MyAccessories>
    </div>
  );
};

export default Home;
