import React from 'react'
import styled, {css} from 'styled-components'
import HeroPhoto from '../../images/cgtrader-sell-your-3d-models-3f3daf0d60c28e23384449b321a04efb9ba6c41feb3ff4a6153740f5e0a6ad02.png'
import Wrapper from '../Layout/Wrapper'
import Button from '../Layout/Button'
const Hero = () => {
  return (
    <Wrapper>
          <HeroImage>
              <img src={""} className="" alt=""/>
          </HeroImage>
          <HeroText>
              <SubTitle >Hello, My name is</SubTitle>
              <Title>Roger Menezes</Title>
              <SubTitle secundary>FRON-END DEVELOPER * ERP CONSULTANT * MINIMALIST</SubTitle>
                <Button>Find out more...</Button>
          </HeroText>

        
    </Wrapper>
  )
}

export default Hero



const HeroImage = styled.div`
grid-area: HeroImage;
max-width: 700px;
display: flex;
justify-content: center;
align-items: center;    
overflow: hidden;
box-sizing: border-box;
padding: 3em;
background-image: url(${HeroPhoto});
background-position: center;
background-size: 80%;
background-repeat: no-repeat;

`

const HeroText = styled.div`
grid-area: HeroText;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
margin-left: 3rem;

`

const SubTitle = styled.h5`
color: #c2c2c2;
text-align: left;
text-transform: uppercase;


${props => props.secundary && css`
color: #000;
`}
`

const Title = styled.h1`
color: #944646;
font-size: 6em;
text-transform: uppercase;
font-weight: bold;
line-height: 1em;
text-align: left;


`

