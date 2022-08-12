import React from 'react'
import styled from 'styled-components'
import HeroSlider from './HeroSlider'
import Navbar from './Navbar'
import Services from './Services'

const Home = () => {
  return (
    <Container>
      <Navbar />
      <HeroSlider />
      <Services />
    </Container>
  )
}

export default Home;

const Container = styled.div`
    color: black;
    position: relative;
`