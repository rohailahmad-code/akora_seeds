import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <NavContainer>
        <Nav>
            <Logo src="/images/akora-seeds-logo.png" />
            <NavMenu>
                <a>
                    <span>HOME</span>
                </a>
                <a>
                    <span>ABOUT US</span>
                </a>
                <a>
                    <span>PRODUCTS</span>
                </a>
                <a>
                    <span>EVENTS</span>
                </a>
                <a>
                    <span>CONTACT</span>
                </a>
            </NavMenu>
        </Nav>
    </NavContainer>
  )
}

export default Navbar;

const NavContainer = styled.main`

    z-index: 100;
`

const Nav = styled.nav`

// @media screen and (max-width: 1024px){
//     position: absolute;
// }
    height: 100px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    
    position: fixed;
    left: 0;
    top: 0;
    right: 0;

    z-index: 10;
`

const Logo = styled.img`
    width: 200px;
    object-fit: contain;
    cursor: pointer;
`

const NavMenu = styled.div`
    a {
        padding: 0 16px;
        cursor: pointer;
        
        span {
            font-size: 18px;
            font-weight: bold;
            color: var(--lightGreen);
    
            letter-spacing: .5px;
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
                opacity: 1 ;
            }
        }
    }

`