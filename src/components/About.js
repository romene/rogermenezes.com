import React from 'react'
import styled from 'styled-components'
import WrapperSection from './Layout/WrapperSection'
import Rogerio from '../images/RogerioOldLinkdin.png'
import TitleSection from './Layout/TitleSection'

const About = () => {
    
  return (
    <WrapperSection id="about">
      <TitleSection>About Me</TitleSection>
      <AboutSubtitle>
        <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h5>
      </AboutSubtitle>

      <AboutContent>
        <AboutImage>
          <img src={Rogerio} className="img-fluid Rogerio_photo rounded" alt=""/>
        </AboutImage>
      </AboutContent>

    </WrapperSection>
  )
}

export default About





const AboutSubtitle = styled.div`
width: auto;
height: auto;
padding: 1em;
margin: 0;
color: #777777;
align-self: center;
`

const AboutContent = styled.div`
align-self: center;
width: auto;
min-height: 100px;
background-color: white;
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr;
grid-template-areas: "AboutImage AboutText";

@media (max-width: 767.98px) {
    justify-items: center;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr; 
    grid-template-areas: 
    "AboutImage"
    "AboutText";
 }

`

const AboutText = styled.div`
grid-area: AboutText;
min-width: 400px;

`

const AboutImage = styled.div`
grid-area: AboutImage;
padding: 1em;
max-width: 400px;
height: auto;
justify-self: center;
`



