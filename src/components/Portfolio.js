import React from 'react'
import { StaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import WrapperSection from './Layout/WrapperSection'
import TitleSection from './Layout/TitleSection'
import styled from 'styled-components'


export default () => (
  <StaticQuery
  query={graphql`
   {
  portfolio:allContentfulPortfolio(
    sort: {
      fields: [createdAt]
      order: DESC
    }
  ){
    edges{
      node{
        createdAt
        id
        portfolioTitle
        portfolioTechnologies
        link
        portfolioImage{
          fluid(maxWidth: 300){
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }
}

`}
render={data => {
  return(
    <div id="portfolio">
      <WrapperSection>
        <TitleSection>Portfolio</TitleSection>
          <GridItem>
      {data.portfolio.edges.map((item) => {
        const { id , portfolioTitle, portfolioTechnologies, link } = item.node
        const { fluid } = item.node.portfolioImage
        return( 
          <a style={{textDecoration: 'none'}} href={link} target="_blank" rel="noopener noreferrer">
            <Card key={id}>
                
                <CardImg>
              
              <Img  imgStyle={{maxHeight: 200, maxWidth: 300}} fluid={fluid} alt={portfolioTitle} />
                </CardImg>


          
                  <CardContent>
                  <h3> {portfolioTitle} </h3>
                  <span>Technologies: </span>
                  <p> {portfolioTechnologies.toUpperCase()} </p>
                </CardContent>
               
              </Card>
            </a>
          )
      })}
        
        </GridItem>
      </WrapperSection>
    </div>
  )
}} />
)

 






const GridItem = styled.div`
display: grid;
grid-template-columns: repeat(3, minmax(auto, 300px));
grid-gap: 1em;

:hover{
  text-decoration: none !important;
}

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
overflow: hidden;
display: grid;
cursor: pointer;
max-width: 300px;
height: auto;
justify-items: center;
align-items: center;
border-radius:  10px 10px 10px 10px;
box-shadow:  0 10px 50px rgba(0, 0, 0, 0.2);
grid-template-rows: 1fr 1fr;
grid-template-areas: 
"CardImg"
"CardContent";

`

const CardImg = styled.div`
overflow: hidden;
grid-area: CardImg;
width: 300px;
max-height: 200px;
border-radius: 10px 10px 0 0;
display: grid;
}

 .gatsby-image-wrapper{
  overflow: hidden !important;
  transition: transform .4s;
 

 :hover{
  transform: scale(1.2);
 }




`

const CardContent = styled.div`
grid-area: CardContent;
display: grid;
justify-items: center;
align-content: center;
padding: .5em;
min-width: 300px;
min-height: 200px;
border-radius: 0 0 10px 10px;
background-color: #efefef;
color: black;


h3 {
color: #944646;
text-align: center;
}

p{
  padding: 0 .5em;
  text-align: center;
}

span {
  font-weight: 600;
}



@media (max-width: 769px) {
min-width: 300px;
min-height: 200px;
 }
`

// const Overlay = styled.div`
//   position: relative;
//    width: 100%;
//    height: 100%;
//    padding: 0;
//    margin: 0;
//    background-color: black;
//    top: 0;
//    opacity: .5;
//    border-radius:  10px 10px 0 0;
//    display: flex;
//    justify-content: center;
//    align-items: center;
//    transition: opacity 1s;
//     p {
      
//       color: white;
//     }

//     ${CardImg}:hover & {
//       opacity: 1;
//     }
// `
