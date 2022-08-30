import React from "react";
import styled from "styled-components";

const Viewer = (props) => {
  return (
    <React.Fragment>
      <ViewerContainer>
        <Image>
          <h1>{props.heading}</h1>
        </Image>
      </ViewerContainer>
    </React.Fragment>
  );
};

export default Viewer;

const ViewerContainer = styled.div``;

const Image = styled.div`
  background-image: url(/images/bg-img-1.jpg),
    -webkit-linear-gradient(left, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
  background-blend-mode: color;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  z-index: -10;

  height: 350px;
  position: relative;
  h1 {
    width: 50%;
    text-align: center;
    color: var(--lightGreen);
    font-size: 50px;
    font-family: GilroyBold;
    letter-spacing: 5px;
    text-transform: uppercase;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  @media screen and (max-width: 768px) {
    h1 {
      width: 80%;
      font-size : 35px ;
    }
  }
  @media screen and (max-width: 550px) {
    height: 250px;
    h1 {
      width: 90%;
      font-size : 30px ;
    }
  }
`;
