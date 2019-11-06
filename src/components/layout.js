/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
// import "./layout.css"
import "../styles/global.scss"
import Nav from "./nav"

const Layout = props => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      {/* <Header
        title={props.title}
        subtitle={props.subtitle}
        size={props.size}
        imageUrl={props.imageUrl}
      /> */}
      <Nav />
      <main>{props.children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
