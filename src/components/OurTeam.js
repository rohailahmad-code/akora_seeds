import React from "react";
import styled from "styled-components";
import TabViewer from "./TabViewer";

const OurTeam = () => {
  return (
    <React.Fragment>
      <Container>
        <TabViewer title="Our Team" />
        <DataContainer>
          <BoardMembers>
          <Heading>
            <h1>Board Members</h1>
          </Heading>
          <BoardMemberWrapper>
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
              <h2>Mr. Javed Iqbal</h2>
              <span>Marketing Director</span>
            </Profile>
            <Profile>
              <Image>
                <img src="/images/profile-img.png" alt="" />
              </Image>
              <h2>Mr. Javed Iqbal</h2>
              <span>Marketing Director</span>
            </Profile>
          </BoardMemberWrapper>
          </BoardMembers>
          <TeamMembers>
          <Heading>
            <h1>Team Members</h1>
          </Heading>
            <TeamMembersWrapper>
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
                <h2>Muhammad Zahid</h2>
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
            </TeamMembersWrapper>
          </TeamMembers>
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

    margin: 50px 0 100px;

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
      margin: 0px 50px;
      h1 {
        font-size: 35px;
       }
    }
`

const BoardMembers = styled.div`

`

const BoardMemberWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-content: center;
  justify-items: center;
  row-gap: 50px;
  margin-bottom: 50px;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
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
  @media screen and (max-width: 1025px) {
    img {
      width: 300px;
      height: 300px;
    }
  }
  @media screen and (max-width: 940px) {
    img {
      width: 250px;
      height: 250px;
    }
  }
  @media screen and (max-width: 768px) {
    img {
      width: 350px;
      height: 350px;
    }
  }
  @media screen and (max-width: 550px) {
    img {
      width: 250px;
      height: 250px;
    }
  }
`;

const TeamMembers = styled.div`

`

const TeamMembersWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-content: center;
  justify-items: center;
  row-gap: 50px;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Profile = styled.div`
  text-align: center;
  
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
