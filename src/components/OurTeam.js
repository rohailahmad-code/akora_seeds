import React from "react";
import styled from "styled-components";
import TabViewer from "./TabViewer";

const OurTeam = () => {
  return (
    <React.Fragment>
      <Container>
        <TabViewer title="Our Team" />
        <DataContainer>
          <ManagingDirector>
            <Image>
              <img src="/images/profile-img.png" alt="" />
            </Image>
            <h2>Mr. Muhammad Siddique</h2>
            <span>Managing Director</span>
          </ManagingDirector>
          <Wrapper>
            <Profile>
              <Image>
                <img src="/images/profile-img.png" alt="" />
              </Image>
              <h2>Mr. Javed Iqbal</h2>
              <span>Marketing Director</span>
            </Profile>
            <Profile>
              <Image>
                <img src="/images/profile-img.png" alt="" />
              </Image>
              <h2>Mr. Hameed Ullah </h2>
              <span>Finance Director</span>
            </Profile>
            <Profile>
              <Image>
                <img src="/images/profile-img.png" alt="" />
              </Image>
              <h2>Dr Muhammad Sajjad</h2>
              <span>Manager B & R</span>
            </Profile>
            <Profile>
              <Image>
                <img src="/images/profile-img.png" alt="" />
              </Image>
              <h2>Dr Zahid</h2>
              <span>Designation</span>
            </Profile>
            <Profile>
              <Image>
                <img src="/images/profile-img.png" alt="" />
              </Image>
              <h2>Profile Name</h2>
              <span>Designation</span>
            </Profile>
            <Profile>
              <Image>
                <img src="/images/profile-img.png" alt="" />
              </Image>
              <h2>Profile Name</h2>
              <span>Designation</span>
            </Profile>
            <Profile>
              <Image>
                <img src="/images/profile-img.png" alt="" />
              </Image>
              <h2>Profile Name</h2>
              <span>Designation</span>
            </Profile>
            <Profile>
              <Image>
                <img src="/images/profile-img.png" alt="" />
              </Image>
              <h2>Profile Name</h2>
              <span>Designation</span>
            </Profile>
            <Profile>
              <Image>
                <img src="/images/profile-img.png" alt="" />
              </Image>
              <h2>Profile Name</h2>
              <span>Designation</span>
            </Profile>
            <Profile>
              <Image>
                <img src="/images/profile-img.png" alt="" />
              </Image>
              <h2>Profile Name</h2>
              <span>Designation</span>
            </Profile>
            <Profile>
              <Image>
                <img src="/images/profile-img.png" alt="" />
              </Image>
              <h2>Profile Name</h2>
              <span>Designation</span>
            </Profile>
          </Wrapper>
        </DataContainer>
      </Container>
    </React.Fragment>
  );
};

export default OurTeam;

const Container = styled.div`
  background: rgb(248, 248, 248);
`;

const DataContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: auto;
  padding: 50px 0;
`;

const ManagingDirector = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  overflow: hidden;

  h2 {
    color: var(--heading);
  }

  span {
    font-size: 18px;
    font-weight: bold;
    font-family: Gilroy;
    letter-spacing: 1px;
    color: grey;
  }
`;

const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 3px solid var(--heading);
  overflow: hidden;
  img {
    width: 350px;
    height: 350px;
    object-fit: cover;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

const Wrapper = styled.div`
  display: grid;
  align-content: center;
  justify-items: center;
  grid-template-columns: repeat(6, 1fr);
  row-gap: 50px;
`;

const Profile = styled.div`
  text-align: center;
  grid-column: span 3;
  img {
    width: 350px;
    height: 350px;
  }
  &:first-child {
    grid-column: 1 / 4;
  }
  &:nth-child(n + 3) {
    grid-column: span 2;
  }

  h2 {
    color: var(--heading);
  }

  span {
    font-size: 18px;
    font-weight: bold;
    font-family: Gilroy;
    letter-spacing: 1px;
    color: grey;
  }
`;
