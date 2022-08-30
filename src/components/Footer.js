import React from "react";
import styled from "styled-components";

import SpaIcon from "@mui/icons-material/Spa";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <React.Fragment>
      <FooterContainer>
        <FooterWrap>
          <LogoWrap>
            <Logo src="/images/akora-seeds-logo.png" />
            <p>
              Our Evolution Starts With You.
            </p>
          </LogoWrap>

          <LinksWrap>
            <h3>Explore</h3>
            <Links>
              <Link to="/about/our-company-profile">
                <CustomSpaIcon className="SpaIcon" />
                <span>About</span>
              </Link>
              <Link to="/about/a-word-from-our-ceo">
                <CustomSpaIcon className="SpaIcon" />
                <span>A word from our CEO</span>
              </Link>
              <Link to="/about/our-team">
                <CustomSpaIcon className="SpaIcon" />
                <span>Our Team</span>
              </Link>
              <Link to="/about/our-mission">
                <CustomSpaIcon className="SpaIcon" />
                <span>Our Mission</span>
              </Link>
              <Link to="/about/our-history">
                <CustomSpaIcon className="SpaIcon" />
                <span>Our History</span>
              </Link>
              <Link to="/events">
                <CustomSpaIcon className="SpaIcon" />
                <span>News and Events</span>
              </Link>
            </Links>
          </LinksWrap>

          <LinksWrap>
            <h3>Products</h3>
            <Links>
              <a>
                <CustomSpaIcon className="SpaIcon" />
                <span>Watermelon Collection</span>
              </a>
              <a>
                <CustomSpaIcon className="SpaIcon" />
                <span>Squash Collection</span>
              </a>
              <a>
                <CustomSpaIcon className="SpaIcon" />
                <span>Melon Collection</span>
              </a>
              <a>
                <CustomSpaIcon className="SpaIcon" />
                <span>Onion Collection</span>
              </a>
              <a>
                <CustomSpaIcon className="SpaIcon" />
                <span>Tomato Collection</span>
              </a>
              <a>
                <CustomSpaIcon className="SpaIcon" />
                <span>Cucumber Collection</span>
              </a>
            </Links>
          </LinksWrap>

          <LinksWrap>
            <h3>Contact</h3>
            <Links>
              <a>
                <CustomPhoneIcon />
                <span> 0923 633265</span>
              </a>
              <a>
                <CustomEmailIcon />
                <span>akora.seeds@gmail.com</span>
              </a>
              <a>
                <CustomLocationIcon />
                <span>
                  Qazi Mashood Plaza, G.T Road, Akora Khattak, KPK, Pakistan.
                </span>
              </a>
              <Contact>
                <span>
                  For further information and enquiries.
                  <a href="#">Contact US</a>
                </span>
              </Contact>
            </Links>
          </LinksWrap>
        </FooterWrap>
      </FooterContainer>
      <CopyrightContainer>
        <Copyright>
          <Left>
            <span>Copyright &copy; 2022 Akora Seeds. All Right Reserved.</span>
          </Left>
          <Middle>
            <span>
              Develop by <a href="#">Rohail Ahmad</a>
            </span>
          </Middle>
          <Right>
            <a>
              <span>Terms and Conditions</span>
            </a>
            <a>
              <span>Privacy Policy</span>
            </a>
          </Right>
        </Copyright>
      </CopyrightContainer>
    </React.Fragment>
  );
};

export default Footer;

const FooterContainer = styled.div`
  background-image: url(/images/bg-img-3.jpg),
    -webkit-linear-gradient(left, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8));
  background-blend-mode: color;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  padding: 0 20px;
  margin-top: 100px;
`;

const FooterWrap = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 100px 0;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 90px;
  align-content: center;

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 550px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 30px;
    padding: 40px 0px;
  }
`;

const LogoWrap = styled.div`
  p {
    margin-left: 5px;
    color: white;
    line-height: 1.7;
    letter-spacing: 1.2px;
  }
`;

const Logo = styled.img`
  width: 150px;
`;

const LinksWrap = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    margin-bottom: 40px;
    font-size: 24px;
    color: var(--heading);

    align-self: start;
    position: relative;

    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 5px;
      background: var(--heading);
      border-radius: 20px;
      left: 0;
      bottom: -18px;
    }
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-self: start;

  a {
    text-decoration: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 6px 0;
    cursor: pointer;

    span {
      color: white;
      font-size: 16px;
      letter-spacing: 1px;
    }

    &:hover {
      font-weight: 600;
      .SpaIcon {
        color: var(--lightGreen);
        transform: scale(1);
      }
    }
  }
`;

const CustomSpaIcon = styled(SpaIcon)`
  color: white;
  margin-right: 10px;
  transform: scale(0.8);
`;

const CustomPhoneIcon = styled(PhoneIcon)`
  color: var(--lightGreen);
  margin-right: 10px;
`;

const CustomEmailIcon = styled(EmailIcon)`
  color: var(--lightGreen);
  margin-right: 10px;
`;

const CustomLocationIcon = styled(LocationOnIcon)`
  color: var(--lightGreen);
  margin-right: 10px;
`;

const CopyrightContainer = styled.div`
  background: #3c3b3f;
  background: -webkit-linear-gradient(to left, #605c3c, #3c3b3f);
  background: linear-gradient(to left, #605c3c, #3c3b3f);

  padding: 0 20px;

  @media screen and (max-width: 550px) {
    padding: 0px;
  }
`;

const Copyright = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;

  padding: 20px 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media screen and (max-width: 768px) {
    align-items: row-reverse;
    flex-direction: column-reverse;
    gap: 10px;
  }
  @media screen and (max-width: 550px) {
    span {
      font-size: 14px;
    }
  }
`;

const Left = styled.div`
  span {
    color: var(--lightGreen);
  }
`;

const Middle = styled.div`
  span {
    color: var(--lightGreen);

    a {
      text-decoration: none;
      color: var(--lightGreen);
    }
  }
`;

const Right = styled.div`
  a {
    margin-left: 20px;
    cursor: pointer;
    span {
      color: var(--lightGreen);
    }
  }
`;

const Contact = styled.div`
  margin-top: 30px;
  span {
    color: white;
    a {
      text-decoration: none;
      color: var(--lightGreen);
      letter-spacing: 1.2px;
      font-weight: 600;
    }
  }
`;
