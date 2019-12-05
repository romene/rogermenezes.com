import React from 'react'
import {graphql} from 'gatsby'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import styled from 'styled-components'
import Hero from '../components/Global/Hero'


const BlogTemplate = (props) => {
 console.log("MERDA" ,props.location.pathname)
const myProxy = '/blog/' || 'http://www.rogermenezes.com'
const Posts = props.data.allContentfulBlogPost.edges.filter(post => props.location.pathname === myProxy+post.node.slug )
    const { title,  publishedAt, writtenBy } = Posts[0].node
    const { json } = Posts[0].node.richTextBlog
  console.log(Posts[0].node)
  
    const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const imageData = node.data.target.fields.file['en-US'].url
        return <img style={{maxWidth: 350}} src={imageData}  alt="Blog_Image" />
      }
    }
  }

return (
   <React.Fragment>
    <Hero />
        <StyledBlogWrapper>
            <StyledBlogTitle>{title}</StyledBlogTitle>
      <StyledSubTitle>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi voluptatum ratione voluptatem accusantium repellat nisi, sint perferendis tempore, voluptatibus neque necessitatibus corrupti quam eaque! Dolorum voluptatem modi fugit velit unde?</StyledSubTitle>
      <StyledPostInfo>
        <p>By: {writtenBy} - {publishedAt} </p>
      </StyledPostInfo>
      <StyledRichText> {documentToReactComponents(json, options)} </StyledRichText> 
        </StyledBlogWrapper>
  </React.Fragment>
)
}

export const queryBlog = graphql`
         {
           allContentfulBlogPost {
             edges {
               node {
                 id
                 title
                 slug
                 publishedAt(formatString: "DD/MMMM/Y")
                 writtenBy
                 subtitle {
                   subtitle
                 }
                 thumbmail {
                   fluid (maxWidth: 500){
                     
                     src
                   }
                 }
                 richTextBlog {
                   json
                 }
                 contentful_id
                 updatedAt
               }
             }
           }
         }
       `

      //  Styled Components 

export default BlogTemplate


const StyledBlogWrapper = styled.div`
max-width: 900px;
margin: 2em auto 0 auto;
display: flex;
flex-direction: column;
justify-content: center;
`

const StyledBlogTitle = styled.h1`
  font-size: 5em;
  margin: .5em auto;
  line-height: 0.8em;
  font-weight: 700;
  @media (max-width: 767.98px) {
    font-size: 2em;
  }
`

const StyledSubTitle = styled.h6`
text-align: left;
color: gray;
margin: 0 auto 2em auto;
`

const StyledPostInfo = styled.div`
display: flex;
font-size: 1.2em;
font-weight: 700;
`

const StyledRichText = styled.div`
margin-top: 3em;
text-align: center;
`