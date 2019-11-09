import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { graphql } from "gatsby"

const Ranks = ({ data }) => (
  <Layout>
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Cub Scout Rankings</h1>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <p>
          Scouts who join our pack are assigned to ranks based on age. Meetings
          and Den meetings are planned around activities being worked on for
          rank advancement. Some activities may include games, handicrafts,
          hikes and other outdoor fun while also preparing for the next pack
          meeting.
        </p>
      </div>
    </section>

    <section style={{ marginBottom: "80px" }}>
      <div className="container">
        <div className="content rank-grid">
          <div>
            <h2>Tiger</h2>
          </div>
          <div style={{ width: "40%" }}>
            <Img
              fluid={data.tiger.childImageSharp.fluid}
              alt="The Cub Scouts Tiger logo"
              style={{ width: "128", height: "auto" }}
            />
          </div>
          <div>first graders or 7-year-olds </div>

          <div>
            <h2>Wolf</h2>
          </div>
          <div style={{ width: "40%" }}>
            <Img
              fluid={data.wolf.childImageSharp.fluid}
              // fixed={data.wolf.childImageSharp.fixed}
              alt="The Cub Scouts Wolf logo"
              style={{ width: "128", height: "auto" }}
            />
          </div>
          <div>Second graders or 8-year-olds </div>

          <div>
            <h2>Bear</h2>
          </div>
          <div style={{ width: "40%" }}>
            <Img
              fluid={data.bear.childImageSharp.fluid}
              // fixed={data.bear.childImageSharp.fixed}
              alt="The Cub Scouts Bear logo"
              style={{ width: "128", height: "auto" }}
            />
          </div>
          <div>Third graders or 9-year-olds </div>

          <div>
            <h2>Webelos</h2>
          </div>
          <div style={{ width: "40%" }}>
            <Img
              fluid={data.webelos.childImageSharp.fluid}
              // fixed={data.webelos.childImageSharp.fixed}
              alt="The Cub Scouts Webelos logo"
              style={{ width: "128", height: "auto" }}
            />
          </div>
          <div>Fourth graders or 9-year-olds </div>

          <div>
            <h2>Arrow of Light</h2>
          </div>
          <div style={{ width: "40%" }}>
            <Img
              fluid={data.aol.childImageSharp.fluid}
              // fixed={data.tiger.childImageSharp.fixed}
              alt="The Cub Scouts Arrow of Light logo"
              style={{ width: "128", height: "auto" }}
            />
          </div>
          <div>Fifth graders who are about to transition to Boy Scouts </div>
        </div>
      </div>
    </section>
  </Layout>
)

export const query = graphql`
  {
    tiger: file(relativePath: { eq: "tiger.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    wolf: file(relativePath: { eq: "wolf.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bear: file(relativePath: { eq: "bear.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    webelos: file(relativePath: { eq: "webelos.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    aol: file(relativePath: { eq: "aol.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Ranks
