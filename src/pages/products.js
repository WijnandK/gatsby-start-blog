import React from "react"

import { graphql, Link } from "gatsby"

import Img from "gatsby-image"

import Header from "../components/header"

const Products = ({ data: { allContentfulProduct } }) => (
  <>
    <Header />
    <h2 style={{ textAlign: "center", marginTop: "42px" }}>
      {" "}
      Some unique products...
    </h2>
    <div
      style={{
        width: "900px",
        height: "800px",
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap-reverse",
        marginTop: "30px",
      }}
    >
      {allContentfulProduct.edges.map(({ node: product }) => (
        <div key={product.id} style={{ width: "350px", textAlign: "center" }}>
          <Link
            to={`/products/${product.slug}`}
            style={{
              textDecoration: "none",
              color: "darkpurple",
            }}
          >
            <h3>
              {product.name} .{" "}
              <span style={{ fontSize: "1.2rem", color: "#cfc" }}>
                {product.price}
              </span>
            </h3>
          </Link>
          <Img style={{ maxWidth: 700 }} fluid={product.image.fluid} />
        </div>
      ))}
    </div>
  </>
)

export const query = graphql`
  {
    allContentfulProduct {
      edges {
        node {
          id
          slug
          name
          price
          image {
            fluid(maxWidth: 700) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

export default Products
