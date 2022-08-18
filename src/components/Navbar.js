import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [active, setActive] = useState(false);

  // Changing Navbar Background Color on Scroll

  const changeBackground = () => {
    if (window.scrollY >= 300) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <NavContainer>
      <Nav className={navbar ? "navbar active" : "navbar"}>
        <NavWrapper className="NavWrapper">
          <Link to="/">
            <Logo className="Logo" src="/images/akora-seeds-logo.png" />
          </Link>
          <NavMenu className="NavMenu" show={active}>
            <CloseWrapper>
              <CustomClose
                sx={{ display: { md: "none" } }}
                className="CloseMenu"
                onClick={() => setActive(false)}
              />
            </CloseWrapper>
            <Link to="/">
              <span>HOME</span>
            </Link>
            <Link to="/about/our-company-profile">
              <span>ABOUT US</span>
            </Link>
            <Link to="/products">
              <span>PRODUCTS</span>
            </Link>
            <Link to="/events">
              <span>EVENTS</span>
            </Link>
            <Link to="/contact">
              <span>CONTACT</span>
            </Link>
          </NavMenu>
          <CustomMenu
            sx={{ display: { md: "none" } }}
            onClick={() => setActive(true)}
          />
        </NavWrapper>
      </Nav>
    </NavContainer>
  );
};

export default Navbar;

const NavContainer = styled.main`
  .navbar {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 10;
    padding: 0 20px;
  }

  .navbar.active {
    background: #3c3b3f;
    background: -webkit-linear-gradient(to left, #605c3c, #3c3b3f);
    background: linear-gradient(to left, #605c3c, #3c3b3f);
  }

  .navbar.active .NavWrapper {
    height: 50px;
  }

  .navbar.active .NavWrapper .Logo {
    width: 140px;
  }

  .navbar.active .NavMenu span {
    color: var(--heading);

    &:after {
      bottom: -15.5px;
      background-color: var(--heading);
    }
  }

  .navbar.active .CloseMenu {
    color: var(--heading);
  }

  @media screen and (max-width: 900px) {
    height: 100%;

    .navbar.active .NavMenu a {
      border-bottom: 3px solid var(--heading);
    }
  }
`;

const Nav = styled.nav`
`;

const NavWrapper = styled.div`
z-index: 1001;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1440px;
  width: 100%;
  margin: 0 auto;

`;

const Logo = styled.img`
  width: 200px;
  object-fit: contain;
  cursor: pointer;
`;

const NavMenu = styled.div`
  a {
    padding: 0 16px;
    cursor: pointer;
    text-decoration: none;

    span {
      font-size: 18px;
      font-weight: bold;
      color: var(--lightGreen);

      letter-spacing: 0.5px;
      position: relative;

      &:after {
        content: "";
        position: absolute;
        height: 3px;
        background-color: var(--lightGreen);
        left: 0;
        right: 0;
        bottom: -6px;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        opacity: 0;
        transform: scaleX(0);
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }

  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    transform: ${(props) =>
      props.show ? "translateX(0)" : "translateX(100%)"};
    transition: transform 0.3s ease-in;
    width: 50%;

    background: #3c3b3f;
    background: -webkit-linear-gradient(to left, #605c3c, #3c3b3f);
    background: linear-gradient(to left, #605c3c, #3c3b3f);

    z-index: 1;

    .a {
      margin: 0 20px;
      padding: 30px 0;
      border-bottom: 3px solid var(--lightGreen);

      span {
        &:after {
          display: none;
        }
      }
    }
  }
`;

const CustomMenu = styled(MenuIcon)`
  color: var(--lightGreen);
  margin-right: 20px;
  cursor: pointer;
  transform: scale(1.3);

  display: none;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CustomClose = styled(CloseIcon)`
  margin: 40px 20px 20px 0px;
  color: var(--lightGreen);
  transform: scale(1.3);
  cursor: pointer;

  display: none;
`;
