import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import HeroSlider from '../components/HeroSlider'
import Navbar from '../components/Navbar'
import ProductsSection from '../components/ProductsSection'
import Services from '../components/Services'

const Home = () => {
  return (
    <Container>
      <HeroSlider />
      <Services />
      <ProductsSection />
      <Footer />
    </Container>
  )
}

export default Home;

const Container = styled.div`
    color: black;
    position: relative;

    // overflow-X: hidden;
`