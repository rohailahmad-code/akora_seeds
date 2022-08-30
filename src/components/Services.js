import React from "react";
import styled from "styled-components";

const Services = () => {
  return (
    <MainContainer>
      <ServicesContiner>

        <Heading>
          <h1>Services</h1>
        </Heading>

        <Wrap>
          <QualitySeeds>
            <Image>
              <img src="/images/bg-img-2.jpg" alt="" />
            </Image>
            <Text>
              <h2>Quality Seeds</h2>
              <p>
              Commitment for provision of quality seed at affordable price
              Commitment for provision of quality seed at affordable price
              Commitment for provision of quality seed at affordable price
              Commitment for provision of quality seed at affordable price
              Commitment for provision of quality seed at affordable price
              </p>
            </Text>
          </QualitySeeds>

          <CertifiedProducts>
            <Image className="CertifiedProductsImg">
              <img src="/images/bg-img-3.jpg" alt="" />
            </Image>
            <Text>
              <h2>Certified Products</h2>
              <p>
              Supply the seed to farmers: What they need? What they expect? What is the demand of seed industry?
              Supply the seed to farmers: What they need? What they expect? What is the demand of seed industry?
              Supply the seed to farmers: What they need? What they expect? What is the demand of seed industry?
              Supply the seed to farmers: What they need? What they expect? What is the demand of seed industry?
              </p>
            </Text>
          </CertifiedProducts>

          <Distributer>
            <Image>
              <img src="/images/bg-img-4.jpg" alt="" />
            </Image>
            <Text>
              <h2>Distributer</h2>
              <p>
              To touch the inner core of heart of farmers, dealers and distributers with sincerity, devotion and dedication in services
              To touch the inner core of heart of farmers, dealers and distributers with sincerity, devotion and dedication in services
              To touch the inner core of heart of farmers, dealers and distributers with sincerity, devotion and dedication in services
              To touch the inner core of heart of farmers, dealers and distributers with sincerity, devotion and dedication in services
              </p>
            </Text>
          </Distributer>
        </Wrap>

        

      </ServicesContiner>
    </MainContainer>
  );
};

export default Services;

const MainContainer = styled.div`
  border-bottom: 1px solid var(--heading);
`

const ServicesContiner = styled.main`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 100px 0;

 
`

const Heading = styled.div`
  display: flex;
  justify-content: center;
  h1{
    text-align: center;
    font-size: 50px;
    font-weight: bold;
    color: var(--heading);
    text-transform: uppercase;
    letter-spacing: 10px;
    position: relative;

    &:after{
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

`

const Wrap = styled.div`
@media screen and (max-width: 768px) {
  margin: 0 20px;
}
`
const QualitySeeds = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`

const Image = styled.div`

  padding: 20px 0;
  
  img{
    width: 400px;
    height: 400px;
    border-radius: 50%;
    border: 4px solid var(--heading);

    object-fit: cover;
    transition: all .4s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }

  @media screen and (max-width: 550px) {
    padding: 20px 0 0px;
    img {
      width: 250px;
      height: 250px;
    }
  }
   
`

const Text = styled.div`
  width: 30%;

  display: flex;
  flex-direction: column;

  h2 {
  
    font-size: 40px;
    color: var(--heading);
    position: relative;
    align-self: flex-start;
    letter-spacing: 1.5px;

    &:after{
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

  p {
    font-family: Gilroy;
    line-height: 1.7;
    letter-spacing: .5px;
  }

  @media screen and (max-width: 768px) {
     width: 100%;
     text-align: center;
     

     h2 {
      align-self: center;
     }
  }

  @media screen and (max-width: 550px) {
    h2 {
      font-size: 30px;
    }
    p{
      font-size: 15px;
    }
  }
   
`

const CertifiedProducts = styled(QualitySeeds)`
  
  flex-direction: row-reverse;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

const Distributer = styled(QualitySeeds)`

`