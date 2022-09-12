import React from "react";
import styled from "styled-components";

const ProductsList = (props) => {
  return (
    <React.Fragment>
      <Container>
        <Heading>
          <h1>{props.heading}</h1>
        </Heading>
        <ListWrapper>
          <Card>
            <img src={props.imgOne} alt="" />
            <h1>{props.nameOne}</h1>
          </Card>
          <Card>
            <img src={props.imgTwo} alt="" />
            <h1>{props.nameTwo}</h1>
          </Card>
          <Card>
            <img src={props.imgThree} alt="" />
            <h1>{props.nameThree}</h1>
          </Card>
          <Card>
            <img src={props.imgFour} alt="" />
            <h1>{props.nameFour}</h1>
          </Card>
          <Card>
            <img src={props.imgFive} alt="" />
            <h1>{props.nameFive}</h1>
          </Card>
          <Card>
            <img src={props.imgSix} alt="" />
            <h1>{props.nameSix}</h1>
          </Card>
          <Card>
            <img src={props.imgSeven} alt="" />
            <h1>{props.nameSeven}</h1>
          </Card>
          <Card>
            <img src={props.imgEight} alt="" />
            <h1>{props.nameEight}</h1>
          </Card>
        </ListWrapper>
      </Container>
    </React.Fragment>
  );
};

export default ProductsList;

const Container = styled.div`
  max-width: 1440px;
  width: 80%;
  margin: 0 auto;

  @media screen and (max-width: 1024px) {
    width: 90%;
  }
`;
const Heading = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  h1 {
    text-align: center;
    font-size: 50px;
    font-weight: bold;
    color: var(--heading);
    text-transform: uppercase;
    letter-spacing: 10px;
    position: relative;

    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 5px;
      background: var(--heading);
      border-radius: 50%;
      left: 0;
      bottom: -5px;
    }
  }
  @media screen and (max-width: 768px) {
    h1 {
      margin: 0 70px;
      font-size: 40px;
    }
  }
  @media screen and (max-width: 550px) {
    h1 {
      font-size: 35px;
    }
  }
`;

const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  padding: 50px 0;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
   
  @media screen and (max-width: 550px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Card = styled.div`
  text-align: center;
  border: 2px solid var(--heading);
  overflow: hidden;

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }
  }

  h1 {
    color: var(--heading);
  }
`;
