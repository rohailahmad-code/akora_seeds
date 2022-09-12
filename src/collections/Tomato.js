import React from 'react'
import Viewer from "../components/Viewer";
import ProductsList from "./ProductsList";

const Tomato = () => {
  return (
    <React.Fragment>
      <Viewer heading="You press the products we do the rest" />
      <ProductsList
        heading="Tomato Collection"
        nameOne="Tomato 1"
        imgOne="/images/Determinate Tomato.jpg"
        nameTwo="Tomato 2"
        imgTwo="/images/Determinate Tomato.jpg"
        nameThree="Tomato 3"
        imgThree="/images/Determinate Tomato.jpg"
        nameFour="Tomato 4"
        imgFour="/images/Determinate Tomato.jpg"
        nameFive="Tomato 5"
        imgFive="/images/Determinate Tomato.jpg"
        nameSix="Tomato 6"
        imgSix="/images/Determinate Tomato.jpg"
        nameSeven="Tomato 7"
        imgSeven="/images/Determinate Tomato.jpg"
        nameEight="Tomato 8"
        imgEight="/images/Determinate Tomato.jpg"
      />
    </React.Fragment>
  )
}

export default Tomato