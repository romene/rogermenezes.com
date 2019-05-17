import React from 'react'
import styled from 'styled-components'
import heroimg from '../../images/cgtrader-sell-your-3d-models-3f3daf0d60c28e23384449b321a04efb9ba6c41feb3ff4a6153740f5e0a6ad02.png'
import Fade from 'react-reveal/Fade';

const Hero2 = () => {
  return (
    <HeroWrapper>
      <HeroImg>
              <Fade right><img src={heroimg} alt="" /></Fade>
      </HeroImg>
      <HeroIntro>
          <Fade left>
              <h5>Hello, My name is</h5>
          <h1>ROGER MENEZES</h1>
          <h4 className="text-center">FRONT-END DEVELOPER * ERP CONSULTANT * MINIMALIST</h4>
          </Fade>
      </HeroIntro>
    </HeroWrapper>
  )
}

export default Hero2



//Hero Wrapper 
const HeroWrapper = styled.div`
    max-width: 100vw;
    max-height: 1000px;
    background-color: #fff;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    grid-template-areas: "Intro Image";

@media (max-width: 768px) {
grid-template-columns: 1fr;
grid-template-rows: repeat(2, 1fr);
grid-template-areas:
"Intro"
"Image";
}

`

// Hero image
const HeroImg = styled.div`
width: 100%;
height: 100%;
grid-area: Image;
display: grid;
justify-items: center;
align-content: center;

 img {

     max-width: 80%;
     display: block;

   
 }

   @media (max-height: 415px){
        display: none;
     }

`

const HeroIntro = styled.div`
grid-area: Intro;
color: #954646;
display: grid;
justify-items: center;
align-content: center;
padding: 0 1em;
overflow: hidden;

h5 {
    color: #c2c2c2;
    text-transform: uppercase;
}

h4{
    color: black;
    font-size: 20px;
}

h1 {
    font-size: 90px;
    font-weight: bold;
    text-align: center;
    box-sizing: border-box;
    
    @media(max-width: 768px){
        font-size: 70px;
    }
}

`
