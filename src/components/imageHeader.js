import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Nav from "./nav"
// import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "hero.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
          style={{
            width: "100%",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="hero-head"></div>
          <div className="hero-body">
            <div className="container"></div>
          </div>
        </BackgroundImage>
      )
    }}
  />
)

export default BackgroundSection
