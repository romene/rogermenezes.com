import React from 'react'
import WrapperSection from './Layout/WrapperSection'
import TitleSection from './Layout/TitleSection'
import Rogerio from '../images/gatsby-astronaut.png'
import churrasco from '../images/ciadochurrasco.jpg'
import styled from 'styled-components'


const Portfolio = () => {
  return (
    <div id="portfolio">
      <WrapperSection>
        <TitleSection>Work Done</TitleSection>

        <GridItem>
          <Card>
            <CardImg img={Rogerio} />
            <CardContent />
          </Card>
          <Card>
            <CardImg img={churrasco} />
            <CardContent />
          </Card>
          <Card>
            <CardImg />
            <CardContent />
          </Card>

          <Card>
            <CardImg />
            <CardContent />
          </Card>

          <Card>
            <CardImg />
            <CardContent />
          </Card>

          <Card>
            <CardImg />
            <CardContent />
          </Card>
        </GridItem>
      </WrapperSection>
    </div>
  )
}

export default Portfolio






const GridItem = styled.div`
display: grid;
grid-template-columns: repeat(3, minmax(auto, 300px));
grid-gap: 1em;

@media (max-width: 991px) {
grid-template-columns: repeat(2, minmax(auto, 300px));
 }

 @media (max-width: 761px) {
grid-template-columns: repeat(1, minmax(auto, 300px));
 }

/* display: grid;
grid-template-columns: repeat(auto-fill, 300px);
padding: 0;
margin: 0;
justify-items: center;
align-content: center;
grid-gap: 1em; */


`

const Card = styled.div`
display: grid;
max-width: 300px;
height: auto;
justify-items: center;
align-items: center;
box-shadow:  0 10px 50px rgba(0, 0, 0, 0.2);
grid-template-rows: 1fr 1fr;
grid-template-areas: 
"CardImg"
"CardContent";

@media(max-width: 768px){
  
}
`

const CardImg = styled.div`
grid-area: CardImg;
min-width: 100%;
min-height: 200px;
border-color: #c2c2c2;
border-style: solid;
border-bottom: none;
border-width: 1px;
border-radius: 10px 10px 0 0;
background-image: url(${props => props.img});
background-size: cover;
background-position: top center;



`

const CardContent = styled.div`
grid-area: CardContent;
min-width: 300px;
min-height: 200px;
border-radius: 0 0 10px 10px;
background-color: #efefef;
@media (max-width: 769px) {
min-width: 300px;
min-height: 200px;
 }
`







