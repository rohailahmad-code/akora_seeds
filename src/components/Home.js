import React from 'react'
import styled from 'styled-components'
import HeroSlider from './HeroSlider'
import Navbar from './Navbar'

const Home = () => {
  return (
    <Container>
        <Navbar />
        <HeroSlider />
    </Container>
  )
}

export default Home;

const Container = styled.div`
    color: black;
`