import React from "react";
import styled from "styled-components";
import AllProducts from "../components/AllProducts";
import Footer from "../components/Footer";
import Viewer from "../components/Viewer";

const Products = () => {
  return (
    <React.Fragment>
      <Viewer heading="Products" />
      <AllProducts />
      <Footer />
    </React.Fragment>
  );
};

export default Products;
