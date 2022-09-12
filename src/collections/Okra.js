import React from 'react'
import Viewer from "../components/Viewer";
import ProductsList from "./ProductsList";

const Okra = () => {
  return (
    <React.Fragment>
      <Viewer heading="You press the products we do the rest" />
      <ProductsList
        heading="Okra Collection"
        nameOne="Okra 1"
        imgOne="/images/Okra.jpg"
        nameTwo="Okra 2"
        imgTwo="/images/Okra.jpg"
        nameThree="Okra 3"
        imgThree="/images/Okra.jpg"
        nameFour="Okra 4"
        imgFour="/images/Okra.jpg"
        nameFive="Okra 5"
        imgFive="/images/Okra.jpg"
        nameSix="Okra 6"
        imgSix="/images/Okra.jpg"
        nameSeven="Okra 7"
        imgSeven="/images/Okra.jpg"
        nameEight="Okra 8"
        imgEight="/images/Okra.jpg"
      />
    </React.Fragment>
  )
}

export default Okra