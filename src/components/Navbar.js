import React, {useState} from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


const Navbar = () => {

    const [navbar, setNavbar] = useState(false);
    const [active, setActive] = useState(false);

    // Changing Navbar Background Color on Scroll

    const changeBackground = () => {
        if (window.scrollY >= 500) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground);



  return (
    <NavContainer >
        <Nav className={navbar ? 'navbar active' : 'navbar'}>
            <NavWrapper className='NavWrapper'>
                <Logo className='Logo' src="/images/akora-seeds-logo.png" />
                <NavMenu className='NavMenu' show={active}>
                    <CloseWrapper>
                        <CustomClose sx={{ display: {md: 'none'} }} className='CloseMenu' onClick={() => setActive(false)}/>
                    </CloseWrapper>
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
                <CustomMenu sx={{ display: {md: 'none'} }} onClick={() => setActive(true)} />
            </NavWrapper>
        </Nav>
    </NavContainer>
  )
}

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
    
    .navbar.active{
        background: #3C3B3F;  
        background: -webkit-linear-gradient(to left, #605C3C, #3C3B3F);  
        background: linear-gradient(to left, #605C3C, #3C3B3F); 
    }

    .navbar.active .NavWrapper{
        height: 50px;
    }

    .navbar.active .NavWrapper .Logo{
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

    

    // @media screen and (max-width: 1024px){
    //     .navbar{
    //         position: absolute;
    //     }
    // }

    @media screen and (max-width: 900px){
        height: 100%;

        .navbar.active .NavMenu a {
            border-bottom: 3px solid var(--heading);
        }
    }
    
`

const Nav = styled.nav`

    
`

const NavWrapper = styled.div`
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width: 1440px;
    width: 100%;
    margin: 0 auto;

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

    @media screen and (max-width: 900px){
        display: flex;
        flex-direction: column;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        transform: ${ props => props.show ? "translateX(0)" : "translateX(100%)"};
        transition: transform 0.3s ease-in;
        width: 50%;

        background: #3C3B3F; 
        background: -webkit-linear-gradient(to left, #605C3C, #3C3B3F);  
        background: linear-gradient(to left, #605C3C, #3C3B3F); 

        z-index: 1;

        a{
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

`


const CustomMenu = styled(MenuIcon)`
    color: var(--lightGreen);
    margin-right: 20px;
    cursor: pointer;
    transform: scale(1.3);

    display: none;
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;

`

const CustomClose = styled(CloseIcon)`
    margin: 40px 20px 20px 0px;
    color: var(--lightGreen);
    transform: scale(1.3);
    cursor: pointer;

    display: none;
`