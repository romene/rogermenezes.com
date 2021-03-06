import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import Header from "../components/header"
import NavigationBar from "../components/Global/NavigationBar"

const IndexPage = (props) => {
console.log(props)

  return(

   <Layout>
     <NavigationBar/>
    <Header />
    <About />
    <Portfolio />
    <Contact />
  </Layout>
 )
}

export default IndexPage
