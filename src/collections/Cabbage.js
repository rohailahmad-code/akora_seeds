import React from "react";
import Viewer from "../components/Viewer";
import ProductsList from "./ProductsList";

const Cabbage = () => {
  return (
    <React.Fragment>
      <Viewer heading="You press the products we do the rest" />
      <ProductsList
        heading="Cabbage Collection"
        nameOne="Cabbage 1"
        imgOne="/images/Cabbage.jpg"
        nameTwo="Cabbage 2"
        imgTwo="/images/Cabbage.jpg"
        nameThree="Cabbage 3"
        imgThree="/images/Cabbage.jpg"
        nameFour="Cabbage 4"
        imgFour="/images/Cabbage.jpg"
        nameFive="Cabbage 5"
        imgFive="/images/Cabbage.jpg"
        nameSix="Cabbage 6"
        imgSix="/images/Cabbage.jpg"
        nameSeven="Cabbage 7"
        imgSeven="/images/Cabbage.jpg"
        nameEight="Cabbage 8"
        imgEight="/images/Cabbage.jpg"
      />
    </React.Fragment>
  );
};

export default Cabbage;
