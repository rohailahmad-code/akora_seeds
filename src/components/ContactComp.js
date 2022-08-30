import React from "react";
import styled from "styled-components";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const ContactComp = () => {
  return (
    <React.Fragment>
      <Container>
        <ContactWrapper>
          <Heading>
            <h1>Contact Us</h1>
          </Heading>

          <Grid>
            <Wrap>
              <CustomPhoneIcon />
              <h1>Call Us On</h1>
              <span>0923 633265</span>
            </Wrap>
            <Wrap>
              <CustomMailIcon />
              <h1>Email Us At</h1>
              <span>akora.seeds@gmail.com</span>
            </Wrap>
            <Wrap>
              <CustomLocationIcon />
              <h1>Visit Office</h1>
              <span>Qazi Mashood Plaza, G.T Road, Akora Khattak.</span>
            </Wrap>
          </Grid>

          <Wrapper>
            <GoogleMap>
              <iframe
                width="100%"
                height="500"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=akora%20seeds%20company&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe>
            </GoogleMap>
            <form>
              <h1>Get In Touch</h1>
              <input
                type="text"
                name="user_name"
                placeholder="Full Name *"
                required
              />
              <input
                type="email"
                name="user_email"
                placeholder="Email Address *"
                required
              />
              <textarea
                rows={10}
                name="message"
                placeholder="Message *"
                required
              />
              <input className="Button" type="submit" value="Send" />
            </form>
          </Wrapper>
        </ContactWrapper>
      </Container>
    </React.Fragment>
  );
};

export default ContactComp;

const Container = styled.div`
  padding: 50px 0;
`;

const ContactWrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: auto;
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
      font-size: 40px;
    }
  }
  @media screen and (max-width: 550px) {
    h1 {
      font-size: 30px;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  padding: 50px 0 100px;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 50px;
  }
  @media screen and (max-width: 550px) {
    text-align: center;
    padding: 10px 0 100px;
    margin: 0 20px;
  }
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: var(--heading);
    margin: 30px 0 10px;
    font-family: Gilroy;
  }

  span {
    color: var(--heading);
    font-family: Gilroy;
    font-weight: bold;
  }
  @media screen and (max-width: 550px) {
    h1 {
      font-size: 24px;
      margin: 10px 0 10px;
    }
    span {
      font-size: 14px;
    }
  }
`;

const CustomPhoneIcon = styled(PhoneIphoneIcon)`
  transform: scale(3.5);
  margin-bottom: 20px;
  color: var(--heading);
  @media screen and (max-width: 550px) {
    transform: scale(2);
  }
`;

const CustomMailIcon = styled(EmailIcon)`
  transform: scale(3.5);
  margin-bottom: 20px;
  color: var(--heading);
  @media screen and (max-width: 550px) {
    transform: scale(2);
  }
`;

const CustomLocationIcon = styled(LocationOnIcon)`
  transform: scale(3.5);
  margin-bottom: 20px;
  color: var(--heading);
  @media screen and (max-width: 550px) {
    transform: scale(2);
  }
`;

const Wrapper = styled.div`
  width: 100;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border: 1px solid var(--heading);
  border-radius: 10px;

  margin: 0 20px;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      color: var(--heading);
      text-transform: uppercase;
      letter-spacing: 8px;
      margin-bottom: 30px;
    }

    input {
      width: 80%;
      margin-bottom: 10px;
      padding: 10px;
      border: 2px solid var(--heading);
      border-radius: 10px;

      ::placeholder {
        color: grey;
        font-size: 16px;
        font-family: eurostile;
        letter-spacing: 1px;
      }

      &:focus {
        outline: none;
      }
    }
    textarea {
      width: 80%;
      margin-bottom: 10px;
      padding: 10px;
      border: 2px solid var(--heading);
      border-radius: 10px;

      ::placeholder {
        color: grey;
        font-size: 16px;
        font-family: eurostile;
        letter-spacing: 1px;
      }

      &:focus {
        outline: none;
      }
    }
    .Button {
      align-self: center;
      width: 20%;
      font-size: 16px;
      background: var(--heading);
      color: white;
      cursor: pointer;
      transition: all 0.3s ease-in-out;

      &:hover {
        background: none;
        color: var(--heading);
      }
    }
    @media screen and (max-width: 768px) {
      border-top: 1px solid var(--heading);
    }
    @media screen and (max-width: 550px) {
      h1 {
        font-size: 26px;
      }
      input {
        ::placeholder {
          font-size: 14px;
        }
      }
      textarea {
        ::placeholder {
          font-size: 14px;
        }
      }
      .Button {
        width: 35%;
        font-size: 14px;
        padding: 8px 0;
      }
    }
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const GoogleMap = styled.div`
  iframe {
    border-radius: 10px 0 0 10px;
  }
  @media screen and (max-width: 768px) {
    iframe {
      border-radius: 10px 10px 0 0;
    }
  }
  @media screen and (max-width: 550px) {
    iframe {
      height: 320px;
    }
  }
`;
