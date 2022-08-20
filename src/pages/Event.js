import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Viewer from "../components/Viewer";

const Event = (props) => {
  return (
    <React.Fragment>
      <Viewer heading="Events" />
      <Footer />
    </React.Fragment>
  );
};

export default Event;
