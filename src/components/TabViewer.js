import React from "react";
import styled from "styled-components";

const TabViewer = (props) => {
  return <React.Fragment>
    <BackgroundImg>
        <h1>{props.title}</h1>
    </BackgroundImg>
  </React.Fragment>;
};

export default TabViewer;


const BackgroundImg = styled.div`
  background-image: url(/images/bg-img-5.jpg),
  -webkit-linear-gradient(left, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
  background-blend-mode: color;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 350px;
  position: relative;

  h1 {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -100%);

    width: 100%;
    text-align: center;
    font-size: 70px;
    font-family: GilroyBold;
    color: var(--heading);
    text-transform: uppercase;
    letter-spacing: 20px;
  }
`