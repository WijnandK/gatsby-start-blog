import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"
import Image from "../components/image"
import SEO from "../components/seo"
import "../styles/index.css"

const IndexPage = () => (
  <>
    <Header />
    <SEO title="Home" />
    <div className="index__first"></div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/blog/">Go to blog pages</Link> <br />
  </>
)

export default IndexPage
