import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import WrapperSection from './Layout/WrapperSection'
import TitleSection from './Layout/TitleSection'
import { DiHtml5, DiCss3, DiJsBadge, DiBootstrap, DiMsqlServer, DiReact, DiMongodb, DiNodejs } from "react-icons/di";



const About = () => (
  <StaticQuery
  query={graphql`
  {
  aboutimg:file(relativePath:{eq: "RogerioOldLinkdin.png"}){
    childImageSharp{
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`}
  render={data => {
    
    const aboutImg = data.aboutimg.childImageSharp.fluid
    return(
      <WrapperSection id="about">
        <div>
          <TitleSection>About Me</TitleSection>
          <AboutSubtitle>
            {/* <h5> Teste para Subtitle </h5> */}
          </AboutSubtitle>
          <AboutContent>
            <AboutImage>
              <Img fluid={aboutImg} className="Rogerio_photo rounded" alt="" />
            </AboutImage>
            <AboutText>
              <p>I’m a user-focused Front End Developer and Enterprise Resource Planning (ERP) Consultant with industry experience building websites and web applications. I specialize in Front End Development with ReactJS and have a sound understanding, based on experience, of what is required
to take a design and develop it into a website that works.</p>
              

              <h5>My Skills:</h5>
              <IconSkill>
                <DiHtml5 className="iconpb" fill="#E44D26" size={90} />
                <DiCss3 className="iconpb" fill="#1572B6" size={90} />
                <DiBootstrap className="iconpb" fill="#5B4282" size={90} />
                <DiJsBadge className="iconpb" fill="#F1DA4F" size={90} />
                <DiMsqlServer className="iconpb" size={90} />
                <DiReact className="iconpb" fill="#61DAFB" size={90} />
                <DiMongodb className="iconpb" fill="#439934" size={90} />
                <DiNodejs className="iconpb" fill="#83CD29" size={90} />
              </IconSkill>


            </AboutText>

          </AboutContent>
        </div>
      </WrapperSection>
    )
  }} />
)

export default About





const AboutSubtitle = styled.div`
width: auto;
height: auto;
padding: 1em;
margin: 0;
color: #777777;
display: flex;
justify-content: center;
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
