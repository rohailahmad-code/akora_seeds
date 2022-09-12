import React from "react";
import Viewer from "../components/Viewer";
import ProductsList from "./ProductsList";

const Melon = () => {
  return (
    <React.Fragment>
      <Viewer heading="You press the products we do the rest" />
      <ProductsList
        heading="Melon Collection"
        nameOne="Melon 1"
        imgOne="/images/Melon.jpg"
        nameTwo="Melon 2"
        imgTwo="/images/Melon.jpg"
        nameThree="Melon 3"
        imgThree="/images/Melon.jpg"
        nameFour="Melon 4"
        imgFour="/images/Melon.jpg"
        nameFive="Melon 5"
        imgFive="/images/Melon.jpg"
        nameSix="Melon 6"
        imgSix="/images/Melon.jpg"
        nameSeven="Melon 7"
        imgSeven="/images/Melon.jpg"
        nameEight="Melon 8"
        imgEight="/images/Melon.jpg"
      />
    </React.Fragment>
  );
};

export default Melon;
