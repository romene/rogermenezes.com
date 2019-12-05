import React from 'react'
import styled from 'styled-components'


import BlogHeader2 from "../../images/blogheader2.svg"
import NavigationBar from './NavigationBar'

const Hero = () => {
  return (
    <div>
     <HeroImage>
    <NavigationBar/>
    <h1
    style={{color: '#fff', fontWeight: 900}}
    >Blog</h1>
     </HeroImage>
    </div>
  )
}

export default Hero



const HeroImage = styled.div`
background-image: url(${BlogHeader2});
width: 100vw;
min-height: 400px;
background-size: cover;
background-position: center;

  h1{
    text-align: center;
    margin-top: 2em;
  }
 @media (max-width: 768px) {
  align-items: flex-end;  
  
  h1{
    display: none;
  }
} 
`








