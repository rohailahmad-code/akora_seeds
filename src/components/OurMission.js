import React from "react";
import styled from "styled-components";
import TabViewer from "./TabViewer";

const OurMission = () => {
  return (
    <React.Fragment>
      <Container>
        <TabViewer title="Our Mission" />
        <DataContainer>
          <Data>
            <OurMissionData>
              <h1>Our Mission</h1>
              <ul>
                <li>
                  Develop a federated network that provides high quality and
                  high yielding seed to Farmers, dealers and other stakeholders
                </li>
                <li>Sustain the best quality of our seeds</li>
                <li>Incorporate advance technology in seed development</li>
                <li>Expands education within team, community and beyond</li>
              </ul>
            </OurMissionData>
            <OurVision>
              <h1>Our Vision</h1>
              <ul>
                <li>
                  Akora Seeds Company aspires to be the trusted organization
                  that serves fot the betterment of Farmer's cummunity
                </li>
                <li>
                  Create a smart and effective tech-managed environment able to
                  grow up the business continually
                </li>
              </ul>
            </OurVision>
            <OurCoreValues>
              <h1>Our Core Values</h1>
              <ul>
                <li>Human Resource</li>
                <li>Quality</li>
                <li>Sustainability</li>
                <li>Faith</li>
                <li>Education</li>
                <li>Community</li>
              </ul>
            </OurCoreValues>
            <img src="/images/our-mission.jpg" alt="" />
          </Data>
        </DataContainer>
      </Container>
    </React.Fragment>
  );
};

export default OurMission;

const Container = styled.div`
  background: rgb(248, 248, 248);
`;

const DataContainer = styled.div`
  max-width: 1440px;
  width: 65%;
  margin: auto;
  @media screen and (max-width: 550px) {
    width: 90%;
  }
`;
const Data = styled.div`
  margin: 0 auto;
  padding: 50px 0;

  img {
    width: 100%;
    margin: 40px 0;
    border: 3px solid var(--heading);
    border-radius: 10px;
  }

`;

const OurMissionData = styled.div`
  h1 {
    color: var(--heading);
    font-family: GilroyBold;
  }
  ul li {
    font-size: 18px;
    font-family: Gilroy;
    line-height: 1.7;
    letter-spacing: 1px;
  }
  @media screen and (max-width: 550px) {
    h1 {
      font-size: 28px;
      letter-spacing: 2px;
    }
    ul {
      padding-left: 15px;
    }
    ul li {
      font-size: 15px;
    }
  }
`;

const OurVision = styled(OurMissionData)``;

const OurCoreValues = styled(OurMissionData)``;
