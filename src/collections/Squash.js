import React from 'react'
import Viewer from "../components/Viewer";
import ProductsList from "./ProductsList";

const Squash = () => {
  return (
    <React.Fragment>
      <Viewer heading="You press the products we do the rest" />
      <ProductsList
        heading="Squash Collection"
        nameOne="Squash 1"
        imgOne="/images/Squash Long.jpg"
        nameTwo="Squash 2"
        imgTwo="/images/Squash Long.jpg"
        nameThree="Squash 3"
        imgThree="/images/Squash Long.jpg"
        nameFour="Squash 4"
        imgFour="/images/Squash Long.jpg"
        nameFive="Squash 5"
        imgFive="/images/Squash Long.jpg"
        nameSix="Squash 6"
        imgSix="/images/Squash Long.jpg"
        nameSeven="Squash 7"
        imgSeven="/images/Squash Long.jpg"
        nameEight="Squash 8"
        imgEight="/images/Squash Long.jpg"
      />
    </React.Fragment>
  )
}

export default Squash