import React from "react";
import styled from "styled-components";

const Viewer = () => {
  return (
    <React.Fragment>
      <ViewerContainer>
        <Image>
          <h1>About Us</h1>
        </Image>
      </ViewerContainer>
    </React.Fragment>
  );
};

export default Viewer;

const ViewerContainer = styled.div``;

const Image = styled.div`
  background-image: url(/images/bg-img-3.jpg),
    -webkit-linear-gradient(left, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
  background-blend-mode: color;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  z-index: -10;

  height: 350px;
  position: relative;
  h1 {
    color: var(--lightGreen);
    font-size: 70px;
    font-family: GilroyBold;
    letter-spacing: 15px;
    text-transform: uppercase;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -100%);
  }
`;
