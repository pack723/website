import React from "react"
import Layout from "../components/layout"
import Fade from "react-reveal/Fade"
import ImageHeader from "../components/imageHeader"
import Img from "gatsby-image"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <ImageHeader className="hero is-medium" />
      <section>
        <div className="columns">
          <div className="column is-paddingless">
            <div className="has-text-centered  leftInnerColumn has-background-black">
              <h1 className="title has-text-warning is-family-secondary">
                Bethel Cubscout Pack 723
              </h1>
              <h2 className="subtitle has-text-warning">Greensboro, NC</h2>
              <p className="is-size-6">
                Pack 723 provides well-rounded and fun activities with true and
                lasting value for boys and their families in Greensboro. The
                activities are based on more than just having good times; they
                offer the satisfaction of meeting challenges, the confidence
                created by accomplishing goals and the camaraderie of lasting
                friendships. Boys have a blast completing adventures at the same
                time they achieve the aims of scouting – character development,
                participatory citizenship, personal fitness, outdoor skills, and
                leadership and life skills. Many former members of Pack 723 have
                transitioned into Boy Scouts, Eagle Scouts and roles of
                leadership and influencers throughout the community.We invite
                you and your son to join us!
              </p>
            </div>
          </div>
          <div
            className="column is-paddingless"
            style={{ display: `flex`, alignItems: "center" }}
          >
            {/* <Fade left> */}
            <Img
              fluid={data.ship.childImageSharp.fluid}
              alt="Woodfield Pirate Ship"
              style={{ width: "60%", height: "auto" }}
            />
            {/* </Fade> */}
          </div>
        </div>
      </section>

      <section>
        <div className="columns columns-alt">
          <div
            className="column is-paddingless"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            {/* <figure style={{ display: "flex", justifyContent: "flex-end" }}> */}
            {/* <Fade delay={500}> */}
            {/* <img
                  className="column-image"
                  style={{ width: "60%", height: "auto" }}
                  src="/images/front-images/sub.jpg"
                /> */}
            <Img
              fluid={data.sub.childImageSharp.fluid}
              alt="Scouts visit the USS Clamagore"
              style={{ width: "60%", height: "auto" }}
            />

            {/* </Fade> */}
          </div>
          <div className="column is-paddingless">
            <div className="has-text-centered rightInnerColumn has-background-black">
              <h1 className="title has-text-warning">What is Scouting?</h1>
              <p>
                Scouting complements the school and the family, filling needs
                when necessary. Scouting develops self-knowledge and the need to
                explore, to discover, and to want to know. Scouts discover the
                world beyond the classroom, tapping the skills of others to
                learn and to become well-rounded people.
              </p>

              <h2
                className="subtitle has-text-warning"
                style={{ paddingTop: "30px" }}
              >
                Fun with a Purpose
              </h2>
              <p>
                Through recreation, Scouting achieves its purpose of helping
                young people develop physically, intellectually, socially, and
                spiritually. Scouting is all about building confidence and
                self-esteem, learning important life skills and leadership
                skills, team building, outdoor adventure, education, and fun!
                Scouts learn how to make good choices and to take responsibility
                for their actions so that they are prepared for their adult life
                as independent persons.
              </p>
              <h2
                className="subtitle has-text-warning"
                style={{ paddingTop: "30px" }}
              >
                Principles to Live By
              </h2>
              <p>
                Scouting's Principles describe a simple code of living to which
                all Scouts make a personal commitment through the Scout Promise
                and Law. Scouting helps Scouts learn how to carry out their
                commitment in everyday life.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section scout-law">
        <Fade>
          <h2 className="subtitle">A Scout is...</h2>
        </Fade>

        <div className="grid has-text-centered" style={{ width: "100%" }}>
          <content className="a content grid-item">
            <ul>
              <Fade left cascade>
                <li>Trustworthy</li>
              </Fade>
              <Fade left cascade delay={1000}>
                <li>Loyal</li>
              </Fade>
              <Fade left cascade delay={2000}>
                <li>Helpful</li>
              </Fade>
            </ul>
          </content>
          <div className="b grid-item">
            <Fade>
              {/* <figure className="image is-5by4"> */}
              {/* <img src="/images/front-images/front1.jpg" /> */}

              <Img
                fluid={data.campfire.childImageSharp.fluid}
                alt="Campfire at the fall family campout"
              />
              {/* </figure> */}
            </Fade>
          </div>
          <content className="c content grid-item">
            <ul>
              <Fade left cascade>
                <li>Friendly</li>
              </Fade>
              <Fade left cascade delay={1000}>
                <li>Courteous</li>
              </Fade>
              <Fade left cascade delay={2000}>
                <li>Kind</li>
              </Fade>
            </ul>
          </content>
          <div className="d grid-item">
            {/* <figure className="image is-5by4"> */}
            {/* <img src="/images/front-images/front2.jpg" /> */}
            <Img
              fluid={data.crafts.childImageSharp.fluid}
              alt="Scouts activities include crafts and art"
            />
            {/* </figure> */}
          </div>
          <content className="e content grid-item">
            <ul>
              <Fade left cascade>
                <li>Obedient</li>
              </Fade>
              <Fade left cascade delay={1000}>
                <li>Cheerful</li>
              </Fade>
              <Fade left cascade delay={2000}>
                <li>Thrifty</li>
              </Fade>
            </ul>
          </content>
          <div className="f grid-item">
            {/* <figure className="image is-5by4"> */}
            {/* <img src="/images/front-images/front3.jpg" /> */}

            <Img
              fluid={data.trailer.childImageSharp.fluid}
              alt="Bethel Cub Scouts Pack 723 on an activity"
            />
            {/* </figure> */}
          </div>
          <content className="g content grid-item">
            <ul>
              <Fade left cascade>
                <li>Brave</li>
              </Fade>
              <Fade left cascade delay={1000}>
                <li>Clean</li>
              </Fade>
              <Fade left cascade delay={2000}>
                <li>Reverent</li>
              </Fade>
            </ul>
          </content>
          <div className="h grid-item">
            {/* <figure className="image is-5by4"> */}
            {/* <img src="/images/woodfield/campfire.jpg" /> */}

            <Img
              fluid={data.walking.childImageSharp.fluid}
              alt="Scouts walking on a camping trip"
            />
            {/* </figure> */}
          </div>
          {/* </div> */}
        </div>
      </section>

      <section className="hero is-medium is-primary is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title has-text-white">Scout Oath</h1>

            <div className="columns">
              <div className="column is-one-third">
                {/* <figure className="image is-5by4 image-oath"> */}
                {/* <img
                  src="/images/woodfield/pledge.jpg"
                  style={{ borderRadius: "5px" }}
                /> */}

                <Img
                  fluid={data.pledge.childImageSharp.fluid}
                  alt="Scouts on the USS Yorktown"
                />
                {/* </figure> */}
              </div>
              <div className="column oath">
                <Fade bottom delay={1000}>
                  <p>
                    On my honor I will do my best To do my duty to God and my
                    country and to obey the Scout Law; To help other people at
                    all times; To keep myself physically strong, mentally awake,
                    and morally straight.
                  </p>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    ship: file(relativePath: { eq: "ship.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    sub: file(relativePath: { eq: "sub.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    campfire: file(relativePath: { eq: "campfire.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    crafts: file(relativePath: { eq: "crafts.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    trailer: file(relativePath: { eq: "trailer.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    walking: file(relativePath: { eq: "walking.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    pledge: file(relativePath: { eq: "pledge.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
