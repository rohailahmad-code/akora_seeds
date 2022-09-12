import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Viewer from "../components/Viewer";
import ContactComp from "../components/ContactComp";

const Contact = () => {
  return (
    <React.Fragment>
      <Viewer heading="Get in touch" />
      <ContactComp />
       
    </React.Fragment>
  );
};

export default Contact;
