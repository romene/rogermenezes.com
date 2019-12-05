import React from 'react'
import {graphql} from 'gatsby'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import styled from 'styled-components'
import BlogHeader2 from '../images/blogheader2.svg'

export const queryBlog = graphql`
         {
           allContentfulBlogPost {
             totalCount
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

const BlogTemplate = (props) => {
  console.log(props)
 
const myProxy = '/blog/'
const Posts = props.data.allContentfulBlogPost.edges.filter(post => props.path === myProxy+post.node.slug )
    const { title,  publishedAt, writtenBy } = Posts[0].node
    const { json } = Posts[0].node.richTextBlog
  
    const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        console.log(node.data.target.fields.file['en-US'].url)
        const imageData = node.data.target.fields.file['en-US'].url
        return <img style={{maxWidth: 350}} src={imageData}  alt="Blog_Image" />
      }
    }
  }

return (
   <React.Fragment>
    <div style={{
      width: '100%',
      height: 'auto', }}>
      <img
        style={{
          width: '100%',
          height: 'auto',
          objectFit: 'cover'}} 
       src={BlogHeader2} alt="asdas" />
      </div>
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