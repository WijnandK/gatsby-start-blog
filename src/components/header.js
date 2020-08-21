import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import gatsbyLogo from "../images/gatsby-icon.png"

const isActive = ({ isCurrent }) => {
  return { className: isCurrent ? "active" : "navlink" }
}

const NavLink = props => <Link getProps={isActive} {...props} />

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <header
      style={{
        background: `rgb(26, 121, 100)`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        {/* TITLE AND LOGO AREA */}

        <span style={{ display: "flex", alignItems: "center" }}>
          <img
            src={gatsbyLogo}
            alt="Gatsbylogo"
            style={{
              border: "3px solid orange",
              borderRadius: "50%",
              margin: "0 5px",
              width: "50px",
            }}
          />
          <h1 style={{ margin: 0 }}>
            <NavLink to="/">{data.site.siteMetadata.title}</NavLink>
          </h1>
        </span>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/products">Store</NavLink>
        {/* Shopping cart  */}
        <div
          style={{ color: "white", cursor: "pointer" }}
          className="snipcart-summary snipcart-checkout"
        >
          <div>
            <strong>My cart</strong>
          </div>
          <div>
            <span className="snipcart-total-items"></span> Items in cart
          </div>
          <div>
            Total Price <span className="snipcart-total-price"></span>
          </div>
        </div>
      </div>
    </header>
  )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
