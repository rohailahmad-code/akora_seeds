import React from "react";
import Viewer from "../components/Viewer";
import ProductsList from "./ProductsList";

const Bitter = () => {
  return (
    <React.Fragment>
      <Viewer heading="You press the products we do the rest" />
      <ProductsList
        heading="Bitter Collection"
        nameOne="Bitter 1"
        imgOne="/images/Bitter Gourd.jpeg"
        nameTwo="Bitter 2"
        imgTwo="/images/Bitter Gourd.jpeg"
        nameThree="Bitter 3"
        imgThree="/images/Bitter Gourd.jpeg"
        nameFour="Bitter 4"
        imgFour="/images/Bitter Gourd.jpeg"
        nameFive="Bitter 5"
        imgFive="/images/Bitter Gourd.jpeg"
        nameSix="Bitter 6"
        imgSix="/images/Bitter Gourd.jpeg"
        nameSeven="Bitter 7"
        imgSeven="/images/Bitter Gourd.jpeg"
        nameEight="Bitter 8"
        imgEight="/images/Bitter Gourd.jpeg"
      />
    </React.Fragment>
  );
};

export default Bitter;
