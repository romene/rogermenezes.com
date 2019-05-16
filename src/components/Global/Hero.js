import React from 'react'
import styled, {css} from 'styled-components'
import HeroPhoto from '../../images/cgtrader-sell-your-3d-models-3f3daf0d60c28e23384449b321a04efb9ba6c41feb3ff4a6153740f5e0a6ad02.png'
import Wrapper from '../Layout/Wrapper'
import Button from '../Layout/Button'
const Hero = () => {
  return (
    <Wrapper>
          <HeroImage>
              <img src={HeroPhoto} className="img-fluid" alt=""/>
          </HeroImage>
          <HeroText>
        <SubTitle><h5>Hello, My name is</h5></SubTitle>
        <Title><h1>Roger Menezes</h1></Title>
              <SubTitle secundary>FRON-END DEVELOPER * ERP CONSULTANT * MINIMALIST</SubTitle>
                <Button>Find out more...</Button>
          </HeroText>

        
    </Wrapper>
  )
}

export default Hero



const HeroImage = styled.div`
grid-area: HeroImage;
box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;    
padding: 3em;


 @media (max-width: 768px) {
  align-items: flex-end;   
} 
`

const HeroText = styled.div`
grid-area: HeroText;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
margin-left: 3rem;

`

const SubTitle = styled.div`
color: #c2c2c2;
text-align: left;
text-transform: uppercase;


${props => props.secundary && css`
color: #000;
margin-bottom: 2em;
`}
`

const Title = styled.div`
color: #944646;
display: grid;

h1 {
text-transform: uppercase;
font-weight: bold;
line-height: 1em;
text-align: left;
font-size: 6em;
}

@media(max-width: 768px){
  h1{
    font-size: 4em;
    }
}

@media(max-width: 400px){
  h1{
    font-size: 3em;
    }
} 


`

