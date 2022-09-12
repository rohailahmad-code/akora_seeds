import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const EventsSection = () => {
  return (
    <React.Fragment>
      <Container>
        <Heading>
          <h1>Events</h1>
        </Heading>
        <EventWrapper>
          <Card>
            <Link to="/">
              <img src="/images/Onion-Red.jpg" alt="" />
            </Link>
            <Text>
              <span>20 mar 2022</span>
              <h1>Event 1</h1>
              <Link to="/">View More</Link>
            </Text>
          </Card>
          <Card>
            <Link to="/">
              <img src="/images/Onion-Red.jpg" alt="" />
            </Link>
            <Text>
              <span>20 mar 2022</span>
              <h1>Event 2</h1>
              <Link to="/">View More</Link>
            </Text>
          </Card>
          <Card>
            <Link to="/">
              <img src="/images/Onion-Red.jpg" alt="" />
            </Link>
            <Text>
              <span>20 mar 2022</span>
              <h1>Event 3</h1>
              <Link to="/">View More</Link>
            </Text>
          </Card>
          <Card>
            <Link to="/">
              <img src="/images/Onion-Red.jpg" alt="" />
            </Link>
            <Text>
              <span>20 mar 2022</span>
              <h1>Event 4</h1>
              <Link to="/">View More</Link>
            </Text>
          </Card>
          <Card>
            <Link to="/">
              <img src="/images/Onion-Red.jpg" alt="" />
            </Link>
            <Text>
              <span>20 mar 2022</span>
              <h1>Event 5</h1>
              <Link to="/">View More</Link>
            </Text>
          </Card>
          <Card>
            <Link to="/">
              <img src="/images/Onion-Red.jpg" alt="" />
            </Link>
            <Text>
              <span>20 mar 2022</span>
              <h1>Event 6</h1>
              <Link to="/">View More</Link>
            </Text>
          </Card>
        </EventWrapper>
      </Container>
    </React.Fragment>
  );
};

export default EventsSection;

const Container = styled.div`
  max-width: 1440px;
  width: 80%;
  margin: 0 auto;
`;

const Heading = styled.div`
  margin: 50px 0;
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

const EventWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
   
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Card = styled.div`
  border: 2px solid var(--heading);
  overflow: hidden;

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

const Text = styled.div`
  padding: 20px 10px;

  span {
    color: var(--heading);
  }

  h1 {
    color: var(--heading);
  }

  a {
    text-decoration: none;
    color: var(--heading);
  }
`;
