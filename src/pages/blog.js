import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import {
  BlogWrapper, BlogCard, BlogCardImage, BlogCardBody
} from '../components/Layout/BlogWrapper'
import Hero from "../components/Global/Hero"


export const queryBlog = graphql`
         query {
           allContentfulBlogPost(sort: { fields: publishedAt, order: DESC }) {
             edges {
               node {
                 id
                 slug
                 title
                 thumbmail {
                   fixed(width: 255) {
                     src
                     ...GatsbyContentfulFixed_tracedSVG
                   }
                 }
                 subtitle {
                   subtitle
                 }
                 publishedAt(formatString: "DD/M/YYYY")
                 writtenBy
               }
             }
           }
         }
       `

const BlogPage = (props) => {
  const Blogs = props.data.allContentfulBlogPost.edges
  return (
    <Layout>
      <Hero />
      <BlogWrapper>
        {Blogs.map(blog => {
          const { id, title, slug, writtenBy, publishedAt } = blog.node
          const { subtitle } = blog.node.subtitle
          const { fixed } = blog.node.thumbmail
          return (
            <React.Fragment>
              <h1 style={{textAlign: 'center'}}>Coming Soon...</h1>
              <Link key={id} style={LinkStyle} to={`/blog/${slug}`}>
                <BlogCard>
                  <BlogCardImage>
                    <Img backgroundColor="#fff" fixed={fixed} alt={title} />
                  </BlogCardImage>
                  <BlogCardBody>
                    <h2>{title}</h2>
                    <span>{`${publishedAt} - ${writtenBy}`}</span>
                    <p>{subtitle}</p>
                  </BlogCardBody>
                </BlogCard>
              </Link>
            </React.Fragment>
          )
        })}
      </BlogWrapper>
    </Layout>
  )
}

export default BlogPage

const LinkStyle = {
  color: 'black',
  textDecoration: 'none',
 
}