import React from "react";
import styled from "styled-components";
import Viewer from "../components/Viewer";
import { Link, Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const About = () => {
  return (
    <React.Fragment>
      <Viewer heading="About Us" />
      <ViewerContainer>
        <Wrapper>
          <Data>
            <Tab>
              <Link to="our-company-profile">
                <span>Company Profile</span>
              </Link>
              <Link to="a-word-from-our-ceo">
                <span>A word from our CEO</span>
              </Link>
              <Link to="our-team">
                <span>Our Team</span>
              </Link>
              <Link to="our-mission">
                <span>Our Mission</span>
              </Link>

              <Link to="our-history">
                <span>Our History</span>
              </Link>
            </Tab>
          </Data>
        </Wrapper>
        <Outlet />
      </ViewerContainer>
      <Footer />
    </React.Fragment>
  );
};

export default About;

const ViewerContainer = styled.div`
  background: #3c3b3f;
  background: -webkit-linear-gradient(to left, #605c3c, #3c3b3f);
  background: linear-gradient(to left, #605c3c, #3c3b3f);
`;

const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  // margin-top: -200px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  z-index: 1;

  border-radius: 20px;

  // height: 300px;

  // background-image: url(/images/bg-img-1.jpg),
  //   -webkit-linear-gradient(left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  // background-blend-mode: color;
  // background-position: center;
  // background-repeat: no-repeat;
  // background-size: cover;

  // position: relative;

  img {
    // position: absolute;
    // top: -70px;
    // right: 50px;

    width: 200px;
  }
`;

const Data = styled.div`
  padding: 0 40px;
`;

const Tab = styled.div`
  // margin-top: -30px;

  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  // background-color: red;
  a {
    margin-right: 30px;
    cursor: pointer;
    text-decoration: none;

    span {
      font-size: 18px;
      font-weight: bold;
      color: var(--heading);
      text-transform: uppercase;
      letter-spacing: 0.8px;
      position: relative;

      &:after {
        content: "";
        position: absolute;
        height: 3px;
        background-color: var(--heading);
        left: 0;
        right: 0;
        bottom: -11px;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        opacity: 0;
        transform: scaleX(0);
      }
    }

    span.active:after {
      opacity: 1;
      transform: scaleX(1);
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;
