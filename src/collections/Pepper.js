import React from 'react'
import Viewer from "../components/Viewer";
import ProductsList from "./ProductsList";

const Pepper = () => {
  return (
    <React.Fragment>
      <Viewer heading="You press the products we do the rest" />
      <ProductsList
        heading="Hot Pepper Collection"
        nameOne="Hot Pepper 1"
        imgOne="/images/Hot Pepper 2.jpg"
        nameTwo="Hot Pepper 2"
        imgTwo="/images/Hot Pepper 2.jpg"
        nameThree="Hot Pepper 3"
        imgThree="/images/Hot Pepper 2.jpg"
        nameFour="Hot Pepper 4"
        imgFour="/images/Hot Pepper 2.jpg"
        nameFive="Hot Pepper 5"
        imgFive="/images/Hot Pepper 2.jpg"
        nameSix="Hot Pepper 6"
        imgSix="/images/Hot Pepper 2.jpg"
        nameSeven="Hot Pepper 7"
        imgSeven="/images/Hot Pepper 2.jpg"
        nameEight="Hot Pepper 8"
        imgEight="/images/Hot Pepper 2.jpg"
      />
    </React.Fragment>
  )
}

export default Pepper