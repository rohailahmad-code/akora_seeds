import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ProductsSection = () => {
  let main_settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <React.Fragment>
      <ProductsContainer>
        <ProductsBackground></ProductsBackground>
        <Products>
          <Heading>
            <h1>Products</h1>
          </Heading>
          <Carousel {...main_settings}>
            <Wrap>
              <Card>
                <img src="/images/Melon.jpg" alt="" />
                <CardText>
                  <h2>Melon Collection</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit, sed fuga! At neque dolores sint, quibusdam vitae
                    soluta vero adipisci quos. Repudiandae nulla dignissimos ex
                    aspernatur animi blanditiis hic reiciendis id nesciunt ab
                    nostrum est, eaque odio iure inventore eligendi nobis,
                    optio, amet nisi quas ratione ut! Tenetur, et cumque?
                  </p>
                </CardText>
                <ReadMore>
                  <CustomArrowIcon className="CustomArrowIcon" />
                </ReadMore>
              </Card>
            </Wrap>

            <Wrap>
              <Card>
                <img src="/images/Bitter Gourd.jpeg" alt="" />
                <CardText>
                  <h2>Bitter Collection</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit, sed fuga! At neque dolores sint, quibusdam vitae
                    soluta vero adipisci quos. Repudiandae nulla dignissimos ex
                    aspernatur animi blanditiis hic reiciendis id nesciunt ab
                    nostrum est, eaque odio iure inventore eligendi nobis,
                    optio, amet nisi quas ratione ut! Tenetur, et cumque?
                  </p>
                </CardText>
                <ReadMore>
                  <CustomArrowIcon className="CustomArrowIcon" />
                </ReadMore>
              </Card>
            </Wrap>

            <Wrap>
              <Card>
                <img src="/images/Cabbage.jpg" alt="" />
                <CardText>
                  <h2>Cabbage Collection</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit, sed fuga! At neque dolores sint, quibusdam vitae
                    soluta vero adipisci quos. Repudiandae nulla dignissimos ex
                    aspernatur animi blanditiis hic reiciendis id nesciunt ab
                    nostrum est, eaque odio iure inventore eligendi nobis,
                    optio, amet nisi quas ratione ut! Tenetur, et cumque?
                  </p>
                </CardText>
                <ReadMore>
                  <CustomArrowIcon className="CustomArrowIcon" />
                </ReadMore>
              </Card>
            </Wrap>

            <Wrap>
              <Card>
                <img src="/images/Cucumber 1.jpg" alt="" />
                <CardText>
                  <h2>Cucumber Collection</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit, sed fuga! At neque dolores sint, quibusdam vitae
                    soluta vero adipisci quos. Repudiandae nulla dignissimos ex
                    aspernatur animi blanditiis hic reiciendis id nesciunt ab
                    nostrum est, eaque odio iure inventore eligendi nobis,
                    optio, amet nisi quas ratione ut! Tenetur, et cumque?
                  </p>
                </CardText>
                <ReadMore>
                  <CustomArrowIcon className="CustomArrowIcon" />
                </ReadMore>
              </Card>
            </Wrap>

            <Wrap>
              <Card>
                <img src="/images/Onion-Red.jpg" alt="" />
                <CardText>
                  <h2>Onion Collection</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit, sed fuga! At neque dolores sint, quibusdam vitae
                    soluta vero adipisci quos. Repudiandae nulla dignissimos ex
                    aspernatur animi blanditiis hic reiciendis id nesciunt ab
                    nostrum est, eaque odio iure inventore eligendi nobis,
                    optio, amet nisi quas ratione ut! Tenetur, et cumque?
                  </p>
                </CardText>
                <ReadMore>
                  <CustomArrowIcon className="CustomArrowIcon" />
                </ReadMore>
              </Card>
            </Wrap>

            <Wrap>
              <Card>
                <img src="/images/Okra.jpg" alt="" />
                <CardText>
                  <h2>Okra Collection</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit, sed fuga! At neque dolores sint, quibusdam vitae
                    soluta vero adipisci quos. Repudiandae nulla dignissimos ex
                    aspernatur animi blanditiis hic reiciendis id nesciunt ab
                    nostrum est, eaque odio iure inventore eligendi nobis,
                    optio, amet nisi quas ratione ut! Tenetur, et cumque?
                  </p>
                </CardText>
                <ReadMore>
                  <CustomArrowIcon className="CustomArrowIcon" />
                </ReadMore>
              </Card>
            </Wrap>

            <Wrap>
              <Card>
                <img src="/images/Hot Pepper 2.jpg" alt="" />
                <CardText>
                  <h2>Hot Pepper Collection</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit, sed fuga! At neque dolores sint, quibusdam vitae
                    soluta vero adipisci quos. Repudiandae nulla dignissimos ex
                    aspernatur animi blanditiis hic reiciendis id nesciunt ab
                    nostrum est, eaque odio iure inventore eligendi nobis,
                    optio, amet nisi quas ratione ut! Tenetur, et cumque?
                  </p>
                </CardText>
                <ReadMore>
                  <CustomArrowIcon className="CustomArrowIcon" />
                </ReadMore>
              </Card>
            </Wrap>

            <Wrap>
              <Card>
                <img src="/images/Determinate Tomato.jpg" alt="" />
                <CardText>
                  <h2>Tomato Collection</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit, sed fuga! At neque dolores sint, quibusdam vitae
                    soluta vero adipisci quos. Repudiandae nulla dignissimos ex
                    aspernatur animi blanditiis hic reiciendis id nesciunt ab
                    nostrum est, eaque odio iure inventore eligendi nobis,
                    optio, amet nisi quas ratione ut! Tenetur, et cumque?
                  </p>
                </CardText>
                <ReadMore>
                  <CustomArrowIcon className="CustomArrowIcon" />
                </ReadMore>
              </Card>
            </Wrap>

            <Wrap>
              <Card>
                <img src="/images/Watermelon.jpg" alt="" />
                <CardText>
                  <h2>Watermelon Collection</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit, sed fuga! At neque dolores sint, quibusdam vitae
                    soluta vero adipisci quos. Repudiandae nulla dignissimos ex
                    aspernatur animi blanditiis hic reiciendis id nesciunt ab
                    nostrum est, eaque odio iure inventore eligendi nobis,
                    optio, amet nisi quas ratione ut! Tenetur, et cumque?
                  </p>
                </CardText>
                <ReadMore>
                  <CustomArrowIcon className="CustomArrowIcon" />
                </ReadMore>
              </Card>
            </Wrap>
            <Wrap>
              <Card>
                <img src="/images/Squash Long.jpg" alt="" />
                <CardText>
                  <h2>Squash Collection</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit, sed fuga! At neque dolores sint, quibusdam vitae
                    soluta vero adipisci quos. Repudiandae nulla dignissimos ex
                    aspernatur animi blanditiis hic reiciendis id nesciunt ab
                    nostrum est, eaque odio iure inventore eligendi nobis,
                    optio, amet nisi quas ratione ut! Tenetur, et cumque?
                  </p>
                </CardText>
                <ReadMore>
                  <CustomArrowIcon className="CustomArrowIcon" />
                </ReadMore>
              </Card>
            </Wrap>
          </Carousel>
        </Products>
      </ProductsContainer>
    </React.Fragment>
  );
};

export default ProductsSection;

const ProductsContainer = styled.div`
  padding: 100px 0;
  position: relative;
  @media screen and (max-width: 550px) {
    padding: 30px 0;
  }
`;
const ProductsBackground = styled.div`
  background-image: url(/images/leaves.gif);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: 450px;
  left: 0;
  right: 0;
  height: 250px;

  @media screen and (max-width: 550px) {
    height: 200px;
    top: 400px;
  }
`;

const Products = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
`;

const Heading = styled.div`
  margin-bottom: 50px;
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
  @media screen and (max-width: 550px) {
    h1 {
      font-size: 35px;
    }
  }
`;

const Carousel = styled(Slider)`
  width: 90% !important;
  margin: 0 auto;
  ul li button {
    &:before {
      font-size: 10px;
      color: var(--heading);
      top: 20px;
      opacity: 0.6;
    }
  }

  li.slick-active button::before {
    font-size: 15px;
    color: var(--heading);
    top: 20px;
    opacity: 1;
  }
  button {
    z-index: 1;
    transform: scale(1.5);
  }
  .slick-prev {
    left: -3% !important;
    z-index: 1;
  }
  .slick-prev:before {
    color: var(--heading);
  }
  .slick-next {
    right: -3% !important;
    z-index: 1;
  }
  .slick-next:before {
    color: var(--heading);
  }
  // .slick-slide{
  //   width
  // }
  @media screen and (max-width: 550px) {
    ul li button {
      &:before {
        font-size: 12px;
      }
    }
    li.slick-active button::before {
      font-size: 16px;
    }
    button {
      transform: scale(1);
    }
  }
`;

const Wrap = styled.div`
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
  }
  @media screen and (max-width: 550px) {
    img {
      height: 200px;
    }
  }
`;

const Card = styled.div`
  margin: 0 20px;
  background: white;
  position: relative;
  overflow: hidden;
`;

const CardText = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  height: 250px;
  padding: 20px;
  position: relative;
  :hover::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  h2 {
    color: var(--heading);
    margin: 0;
  }
  p {
    line-height: 1.4;
    letter-spacing: 0.2px;
    margin: 10px 0 0 0;
  }
  @media screen and (max-width: 550px) {
    overflow-x: hidden;
    overflow-y: hidden;
    height: 100%;
    padding: 20px 10px;

    h2 {
      font-size: 20px;
    }
    p {
      font-size: 14px;
      padding-bottom: 30px;
    }
  }
`;

const ReadMore = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 10px;
  bottom: 10px;
  cursor: pointer;

  border-radius: 20px 0 0 0;
  background: var(--heading);
  transition: all 0.3s ease-in-out;
  padding: 10px;
  border: 1px solid var(--heading);

  &:hover {
    background: none;

    .CustomArrowIcon {
      color: var(--heading);
    }
  }
  @media screen and (max-width: 550px) {
    right: 0;
    bottom: 0;
  }
`;

const CustomArrowIcon = styled(ArrowForwardIcon)`
  color: white;
  transform: scale(0.7);
`;
