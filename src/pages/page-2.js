import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

import SEO from "../components/seo"

import "../styles/page-2.css"

const SecondPage = () => (
  <>
    <Header />
    <SEO title="Page two" />
    <h1 className="page2__title">Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </>
)

export default SecondPage
