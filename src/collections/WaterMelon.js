import React from 'react'
import Viewer from "../components/Viewer";
import ProductsList from "./ProductsList";

const WaterMelon = () => {
  return (
    <React.Fragment>
      <Viewer heading="You press the products we do the rest" />
      <ProductsList
        heading="Watermelon Collection"
        nameOne="Watermelon 1"
        imgOne="/images/Watermelon.jpg"
        nameTwo="Watermelon 2"
        imgTwo="/images/Watermelon.jpg"
        nameThree="Watermelon 3"
        imgThree="/images/Watermelon.jpg"
        nameFour="Watermelon 4"
        imgFour="/images/Watermelon.jpg"
        nameFive="Watermelon 5"
        imgFive="/images/Watermelon.jpg"
        nameSix="Watermelon 6"
        imgSix="/images/Watermelon.jpg"
        nameSeven="Watermelon 7"
        imgSeven="/images/Watermelon.jpg"
        nameEight="Watermelon 8"
        imgEight="/images/Watermelon.jpg"
      />
    </React.Fragment>
  )
}

export default WaterMelon