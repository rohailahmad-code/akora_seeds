import React from 'react'
import Viewer from "../components/Viewer";
import ProductsList from "./ProductsList";

const Cucumber = () => {
  return (
    <React.Fragment>
      <Viewer heading="You press the products we do the rest" />
      <ProductsList
        heading="Cucumber Collection"
        nameOne="Cucumber 1"
        imgOne="/images/Cucumber 1.jpg"
        nameTwo="Cucumber 2"
        imgTwo="/images/Cucumber 1.jpg"
        nameThree="Cucumber 3"
        imgThree="/images/Cucumber 1.jpg"
        nameFour="Cucumber 4"
        imgFour="/images/Cucumber 1.jpg"
        nameFive="Cucumber 5"
        imgFive="/images/Cucumber 1.jpg"
        nameSix="Cucumber 6"
        imgSix="/images/Cucumber 1.jpg"
        nameSeven="Cucumber 7"
        imgSeven="/images/Cucumber 1.jpg"
        nameEight="Cucumber 8"
        imgEight="/images/Cucumber 1.jpg"
      />
    </React.Fragment>
  )
}

export default Cucumber