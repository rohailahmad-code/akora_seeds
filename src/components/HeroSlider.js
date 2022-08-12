import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const HeroSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...settings}>

      <Wrap>
        <img src="/images/bg-img-3.jpg" />
        <HeroText>
          <p>
            Doing <span>Agriculture</span> is not only a job, it is a passion
            too, because it is a source of food for humanity, and luckily we are
            been selected for this good cause.......
          </p>
          <CTA>
            <ContactButton>
              <span>Contact Us</span>
            </ContactButton>
            <ReadMoreButton>
              <span>Read More</span>
            </ReadMoreButton>
          </CTA>
        </HeroText>
      </Wrap>

      <Wrap>
        <img src="/images/bg-img-2.jpg" />
        <HeroText>
          <p>
            Doing <span>Agriculture</span> is not only a job, it is a passion
            too, because it is a source of food for humanity, and luckily we are
            been selected for this good cause.......
          </p>
          <CTA>
            <ContactButton>
              <span>Contact Us</span>
            </ContactButton>
            <ReadMoreButton>
              <span>Read More</span>
            </ReadMoreButton>
          </CTA>
        </HeroText>
      </Wrap>

      <Wrap>
        <img src="/images/bg-img-1.jpg" />
        <HeroText>
          <p>
            Doing <span>Agriculture</span> is not only a job, it is a passion
            too, because it is a source of food for humanity, and luckily we are
            been selected for this good cause.......
          </p>
          <CTA>
            <ContactButton>
              <span>Contact Us</span>
            </ContactButton>
            <ReadMoreButton>
              <span>Read More</span>
            </ReadMoreButton>
          </CTA>
        </HeroText>
      </Wrap>

      <Wrap>
        <img src="/images/bg-img-4.jpg" />
        <HeroText>
          <p>
            Doing <span>Agriculture</span> is not only a job, it is a passion
            too, because it is a source of food for humanity, and luckily we are
            been selected for this good cause.......
          </p>
          <CTA>
            <ContactButton>
              <span>Contact Us</span>
            </ContactButton>
            <ReadMoreButton>
              <span>Read More</span>
            </ReadMoreButton>
          </CTA>
        </HeroText>
      </Wrap>

      <Wrap>
      <img src="/images/bg-img-5.jpg" />
        <HeroText>
        <p>
          Doing <span>Agriculture</span> is not only a job, it is a passion
          too, because it is a source of food for humanity, and luckily we are
          been selected for this good cause.......
        </p>
        <CTA>
          <ContactButton>
            <span>Contact Us</span>
          </ContactButton>
          <ReadMoreButton>
            <span>Read More</span>
          </ReadMoreButton>
        </CTA>
        </HeroText>
      </Wrap>
    </Carousel>
  );
};

export default HeroSlider;

const Carousel = styled(Slider)`

  ul li button {
    &:before {
      font-size: 13px;
      color: var(--lightGreen);
      top: -30px;
      opacity: 0.6;
    }
  }

  li.slick-active button::before {
    font-size: 18px;
    top: -30px;
    color: var(--lightGreen);
    opacity: 1;
  }

  .slick-list {
    overflow: visible;
  }
  button {
    z-index: 1;
    transform: scale(1.5);
  }
  .slick-prev {
    left: 2% !important;
    z-index: 1;
  }
  .slick-prev:before {
    color: var(--lightGreen);
  }
  .slick-next {
    right: 2% !important;
    z-index: 1;
  }
  .slick-next:before {
    color: var(--lightGreen);
  }
`;

const Wrap = styled.div`
  position: relative;

  img {
    object-fit: cover;
    width: 100%;
    height: 100vh;
  }
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: linear-gradient(
      to bottom right,
      rgba(0, 0, 0, .5),
      rgba(0, 0, 0, .5)
    );
    // background-image: linear-gradient(
    //   to bottom right
    //   rgba(25, 111, 61, 0.2),
    //   rgba(253, 183, 19, 0.2)
    // );
  }
  
`;


const HeroText = styled.div`
  position: absolute;
  top: 35%;
  left: 10%;
  p {
    font-size: 30px;
    font-weight: 900;
    width: 50%;
    color: white;
    
    text-transform: uppercase;

    line-height: 1.7;
    letter-spacing: 1.2px;

    span {
      color: var(--lightGreen);
      font-size: 42px;
      font-weight: bold;
    }
  }

  @media screen and (max-width: 1024px){
    top: 30%;
    left: 10%;
    p {
      font-size: 26px;
      width: 70%;
  
      span {
        color: var(--lightGreen);
        font-size: 38px;
        font-weight: bold;
      }
    }
  }
`

const CTA = styled.div`
  display: flex;
  gap: 70px;
  margin-left: 30px;

  

`
const ContactButton = styled.button`
  padding: 6px 12px;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  color: var(--lightGreen);

  background: rgba(0,0,0,0.2);
  outline: none;
  border: 1px solid var(--lightGreen);
  border-radius: 6px;

  letter-spacing: 1.5px;

  cursor: pointer;
  z-index: -10;

  transition: all .3s ease-in-out;

  &:hover {
    background: var(--lightGreen);
    color: var(--darkGreen)
  }

  @media screen and (max-width: 1024px){
    padding: 5px 10px;
    font-size: 10px;
    letter-spacing: 1.2px;
  }

`

const ReadMoreButton = styled(ContactButton)`

`





