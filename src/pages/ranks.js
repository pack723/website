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

    <section>
      <div className="container">
        <div className="content rank-grid">
          <div>
            <h2>Tiger</h2>
          </div>
          <div>
            {" "}
            {/* <figure className="image is-128x128">
              <img src="/images/ranks/tiger.jpg" />
            </figure> */}
            <Img
              fluid={data.tiger.childImageSharp.fluid}
              alt="Scouts visit the USS Clamagore"
              style={{ width: "128", height: "auto" }}
            />
          </div>
          <div>first graders or 7-year-olds </div>

          <div>
            <h2>Wolf</h2>
          </div>
          <div>
            {" "}
            <figure className="image is-128x128">
              <img src="/images/ranks/wolf.jpg" />
            </figure>
          </div>
          <div>Second graders or 8-year-olds </div>

          <div>
            <h2>Bear</h2>
          </div>
          <div>
            {" "}
            <figure className="image is-128x128">
              <img src="/images/ranks/bear.jpg" />
            </figure>
          </div>
          <div>Third graders or 9-year-olds </div>

          <div>
            <h2>Webelos</h2>
          </div>
          <div>
            {" "}
            <figure className="image is-128x128">
              <img src="/images/ranks/webelos.jpg" />
            </figure>
          </div>
          <div>Fourth graders or 9-year-olds </div>

          <div>
            <h2>Arrow of Light</h2>
          </div>
          <div>
            {" "}
            <figure className="image is-128x128">
              <img src="/images/ranks/arrow-of-light.jpg" />
            </figure>
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
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bear: file(relativePath: { eq: "bear.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    webelos: file(relativePath: { eq: "webelos.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    aol: file(relativePath: { eq: "aol.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Ranks
