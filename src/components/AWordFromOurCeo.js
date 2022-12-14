import React from "react";
import styled from "styled-components";
import TabViewer from "./TabViewer";

const AWordFromOurCeo = () => {
  return <React.Fragment>
    <Container>
      <TabViewer title="A word from our Ceo" />
      <DataContainer>
          <Data>
          <Img>
          <img src="/images/profile-img.png" alt="" />
          <h1>A Word From Our CEO</h1>
          </Img>
            <p>“Doing Agriculture is not only a job, it is a passion too, because it is a source of food for humanity, and luckily we are been selected for this good cause. I believe a good quality seed is the most important bench mark for Agriculture and thus for farmer’s community, as it ensures high production and food security. <br/> <br/>
            Our corporate principle is the provision of best quality seed and our dedicated services, which is the key to our and our stakeholder’s success. Under this principle, we are continuously striving to develop/introduce exceptionally best quality seed for grower’s community. <br/> <br/>
            We constantly challenge our services to update and improve the quality of seeds and to minimize the cost wherever possible without compromising on quality. With this mindset, Akora Seeds Company is contributing its services for the betterment of humanity and farmer’s community in particular.<br/> <br/>
            We are confident that you, our asset, will believe in our principle and products.” <br/> <br/>
            Thank you            
            </p>
          </Data>
        </DataContainer>
    </Container>
  </React.Fragment>;
};

export default AWordFromOurCeo;

const Container = styled.div`
  background: rgb(248, 248, 248);
`


const DataContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: auto;
`
const Data = styled.div`
  width: 65%;
  margin: 0 auto;
  padding: 50px 0;

 

  p {
    line-height: 1.7;
    font-size: 18px;
    letter-spacing: 1.2px;
    font-family: Gilroy;
  }
  @media screen and (max-width: 550px) {
    width: 90%;
    padding: 25px 0;
    h1 {
      font-size: 28px;
      letter-spacing: 2px;
    }
    p {
      font-size: 15px;
    }
  }
`

const Img = styled.div`
display: flex;
align-items: center;
  img {
    width: 250px;
    height: 250px;
    object-fit: cover;
    border-radius: 50%;
  }

  h1 {
    margin-left: 70px;
    color: var(--heading);
    font-family: GilroyBold;
  }

  @media screen and (max-width: 900px) {
    flex-direction: column;

    h1 {
      margin-left: 0px;
    }
  }
  @media screen and (max-width: 550px) {
    img {
      width: 200px;
      height: 200px;
       
    }
  }
`