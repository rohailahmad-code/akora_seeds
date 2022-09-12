import React from 'react'
import Viewer from "../components/Viewer";
import ProductsList from "./ProductsList";

const Onion = () => {
  return (
    <React.Fragment>
      <Viewer heading="You press the products we do the rest" />
      <ProductsList
        heading="Onion Collection"
        nameOne="Onion 1"
        imgOne="/images/Onion-Red.jpg"
        nameTwo="Onion 2"
        imgTwo="/images/Onion-Red.jpg"
        nameThree="Onion 3"
        imgThree="/images/Onion-Red.jpg"
        nameFour="Onion 4"
        imgFour="/images/Onion-Red.jpg"
        nameFive="Onion 5"
        imgFive="/images/Onion-Red.jpg"
        nameSix="Onion 6"
        imgSix="/images/Onion-Red.jpg"
        nameSeven="Onion 7"
        imgSeven="/images/Onion-Red.jpg"
        nameEight="Onion 8"
        imgEight="/images/Onion-Red.jpg"
      />
    </React.Fragment>
  )
}

export default Onion