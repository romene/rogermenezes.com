import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'

const IndexPage = () => (
  <Layout>
    <About />
    <Portfolio />
    <Contact />
  </Layout>
)

export default IndexPage
