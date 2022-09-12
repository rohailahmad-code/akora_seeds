import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const AllProducts = () => {
  return (
    <React.Fragment>
      <ProductsContainer>
        <Heading>
          <h1>Products Collection</h1>
        </Heading>
        <Products>
          <Wrap>
            <Card>
              <Link to="melon">
                <img src="/images/Melon.jpg" alt="" />
              </Link>
              <CardText>
                <h2>Melon Collection</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit, sed fuga! At neque dolores sint, quibusdam vitae
                  soluta vero adipisci quos. Repudiandae nulla dignissimos ex
                  
                </p>
              </CardText>
              <ReadMore>
                <Link to="melon">
                  <CustomArrowIcon className="CustomArrowIcon" />
                </Link>
              </ReadMore>
            </Card>
          </Wrap>

          <Wrap>
            <Card>
              <Link to="bitter">
                <img src="/images/Bitter Gourd.jpeg" alt="" />
              </Link>
              <CardText>
                <h2>Bitter Collection</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit, sed fuga! At neque dolores sint, quibusdam vitae
                  soluta vero adipisci quos. Repudiandae nulla dignissimos ex
                  
                </p>
              </CardText>
              <ReadMore>
                <Link to="bitter">
                  <CustomArrowIcon className="CustomArrowIcon" />
                </Link>
              </ReadMore>
            </Card>
          </Wrap>

          <Wrap>
            <Card>
              <Link to="cabbage">
                <img src="/images/Cabbage.jpg" alt="" />
              </Link>
              <CardText>
                <h2>Cabbage Collection</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit, sed fuga! At neque dolores sint, quibusdam vitae
                  soluta vero adipisci quos. Repudiandae nulla dignissimos ex
                  
                </p>
              </CardText>
              <ReadMore>
                <Link to="cabbage">
                  <CustomArrowIcon className="CustomArrowIcon" />
                </Link>
              </ReadMore>
            </Card>
          </Wrap>

          <Wrap>
            <Card>
              <Link to="cucumber">
                <img src="/images/Cucumber 1.jpg" alt="" />
              </Link>
              <CardText>
                <h2>Cucumber Collection</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit, sed fuga! At neque dolores sint, quibusdam vitae
                  soluta vero adipisci quos. Repudiandae nulla dignissimos ex
                  
                </p>
              </CardText>
              <ReadMore>
                <Link to="cucumber">
                  <CustomArrowIcon className="CustomArrowIcon" />
                </Link>
              </ReadMore>
            </Card>
          </Wrap>

          <Wrap>
            <Card>
              <Link to="onion">
                <img src="/images/Onion-Red.jpg" alt="" />
              </Link>
              <CardText>
                <h2>Onion Collection</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit, sed fuga! At neque dolores sint, quibusdam vitae
                  soluta vero adipisci quos. Repudiandae nulla dignissimos ex
                  
                </p>
              </CardText>
              <ReadMore>
                <Link to="onion">
                  <CustomArrowIcon className="CustomArrowIcon" />
                </Link>
              </ReadMore>
            </Card>
          </Wrap>

          <Wrap>
            <Card>
              <Link to="okra">
                <img src="/images/Okra.jpg" alt="" />
              </Link>
              <CardText>
                <h2>Okra Collection</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit, sed fuga! At neque dolores sint, quibusdam vitae
                  soluta vero adipisci quos. Repudiandae nulla dignissimos ex
                  
                </p>
              </CardText>
              <ReadMore>
                <Link to="okra">
                  <CustomArrowIcon className="CustomArrowIcon" />
                </Link>
              </ReadMore>
            </Card>
          </Wrap>

          <Wrap>
            <Card>
              <Link to="pepper">
                <img src="/images/Hot Pepper 2.jpg" alt="" />
              </Link>
              <CardText>
                <h2>Hot Pepper Collection</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit, sed fuga! At neque dolores sint, quibusdam vitae
                  soluta vero adipisci quos. Repudiandae nulla dignissimos ex
                  
                </p>
              </CardText>
              <ReadMore>
                <Link to="pepper">
                  <CustomArrowIcon className="CustomArrowIcon" />
                </Link>
              </ReadMore>
            </Card>
          </Wrap>

          <Wrap>
            <Card>
              <Link to="tomato">
                <img src="/images/Determinate Tomato.jpg" alt="" />
              </Link>
              <CardText>
                <h2>Tomato Collection</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit, sed fuga! At neque dolores sint, quibusdam vitae
                  soluta vero adipisci quos. Repudiandae nulla dignissimos ex
                  
                </p>
              </CardText>
              <ReadMore>
                <Link to="tomato">
                  <CustomArrowIcon className="CustomArrowIcon" />
                </Link>
              </ReadMore>
            </Card>
          </Wrap>

          <Wrap>
            <Card>
              <Link to="watermelon">
                <img src="/images/Watermelon.jpg" alt="" />
              </Link>
              <CardText>
                <h2>Watermelon Collection</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit, sed fuga! At neque dolores sint, quibusdam vitae
                  soluta vero adipisci quos. Repudiandae nulla dignissimos ex
                  
                </p>
              </CardText>
              <ReadMore>
                <Link to="watermelon">
                  <CustomArrowIcon className="CustomArrowIcon" />
                </Link>
              </ReadMore>
            </Card>
          </Wrap>

          <Wrap>
            <Card>
              <Link to="squash">
                <img src="/images/Squash Long.jpg" alt="" />
              </Link>
              <CardText>
                <h2>Squash Collection</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit, sed fuga! At neque dolores sint, quibusdam vitae
                  soluta vero adipisci quos. Repudiandae nulla dignissimos ex
                  
                </p>
              </CardText>
              <ReadMore>
                <Link to="squash">
                  <CustomArrowIcon className="CustomArrowIcon" />
                </Link>
              </ReadMore>
            </Card>
          </Wrap>
        </Products>
      </ProductsContainer>
    </React.Fragment>
  );
};

export default AllProducts;

const ProductsContainer = styled.div`
  padding: 100px 0;
  position: relative;
  @media screen and (max-width: 550px) {
    padding: 50px 0;
  }
`;

const Products = styled.div`
  max-width: 1440px;
  width: 80%;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 50px;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
  }
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
  @media screen and (max-width: 768px) {
    h1 {
      margin: 0 70px;
      font-size: 40px;
    }
  }
  @media screen and (max-width: 550px) {
    h1 {
      font-size: 35px;
    }
  }
`;

const Wrap = styled.div`
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
    transition: all 0.3s ease-in-out;
  }
  &:hover {
    img {
      transform: scale(1.03);
    }

    .CustomArrowIcon {
      background: none;
      color: var(--heading);
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
   
  height: 200px;
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
    font-family: GilRoy;
    line-height: 1.7;
    letter-spacing: 0.3px;
    margin: 10px 0 0 0;
  }

  @media screen and (max-width: 768px) {
    overflow-y: hidden;
    height: 100%;

    p {
      padding-bottom: 20px;
    }
  }
  @media screen and (max-width: 550px) {
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

const ReadMore = styled.div`
  .CustomArrowIcon {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: -8px;
    bottom: -8px;
    cursor: pointer;
    background: var(--heading);
    border-radius: 20px 0 0 0;
    transition: all 0.3s ease-in-out;
    padding: 20px;
    border: 1px solid var(--heading);
  }

  &:hover {
    background: none;

    .CustomArrowIcon {
      color: var(--heading);
    }
  }
`;

const CustomArrowIcon = styled(ArrowForwardIcon)`
  color: white;
  transform: scale(0.8);
`;
