import React from 'react'
import styled from 'styled-components'
import WrapperSection from './Layout/WrapperSection'
import Rogerio from '../images/RogerioOldLinkdin.png'
import TitleSection from './Layout/TitleSection'
import { DiHtml5, DiCss3, DiJsBadge, DiBootstrap, DiMsqlServer, DiReact, DiMongodb, DiNodejs } from "react-icons/di";


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
        <AboutText>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime cupiditate accusantium ex sunt eaque quaerat iusto rem! Accusamus aliquam mollitia pariatur quaerat labore quibusdam! Quia et repudiandae deserunt debitis ut.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime cupiditate accusantium ex sunt eaque quaerat iusto rem! Accusamus aliquam mollitia pariatur quaerat labore quibusdam! Quia et repudiandae deserunt debitis ut.</p>

          <h5>My Skills:</h5>
          <IconSkill>
            <DiHtml5 fill="#E44D26" size={90} />
            <DiCss3 fill="#1572B6" size={90} />
            <DiBootstrap fill="#5B4282" size={90} />
            <DiJsBadge fill="#F1DA4F" size={90} />
            <DiMsqlServer size={90} />
            <DiReact fill="#61DAFB" size={90} />
            <DiMongodb fill="#439934" size={90} />
            <DiNodejs fill="#83CD29" size={90} />
           
          </IconSkill>


        </AboutText>
       
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
max-width: 1000px;
background-color: white;
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr;
grid-template-areas: "AboutImage AboutText";



@media (max-width: 768px) {
    justify-items: center;
    align-content: center;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr; 
    grid-template-areas: 
    "AboutImage"
    "AboutText";
 }

`

const AboutText = styled.div`
grid-area: AboutText;
max-width: auto;
align-self: start;
padding: 2em; 
font-family: 'Hind', sans-serif;

h5{
  color: #944646;
  text-transform: uppercase;
  font-weight: 700;
}

`



const AboutImage = styled.div`
grid-area: AboutImage;
padding: 1em; 
max-width: 400px;

@media(max-width: 768px){
  padding: 4em; 
  
}`
const IconSkill = styled.div`
max-width: 400px;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;

`




