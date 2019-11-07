import React from "react"
import Layout from "../components/layout"
import Map from "../components/map"

const Join = () => (
  <Layout>
    <div className="join-container">
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Join Us</h1>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p>
            Pack 723 meets on school nights at Bethel AME Church located near
            downtown Greensboro and North Carolina A&T State University. We are
            located a the corner of East Market St, Beech St and Regan St. We
            meet on Mondays from 7pm to 8pm. You are free to come check out a
            meeting before officially registering.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h1 className="title">Map</h1>
          <Map />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h1 className="title">What are the Costs?</h1>
          <p>
            Our Cub Scout pack receives much our funding from donations and
            popcorn sales. However, there are membership fees in addition to
            various costs for each scout.
          </p>
          <p>
            Required: $33 registration fee every year (may be prorated first
            year based on join date) There are also costs for uniform items,
            scout books and other items.
          </p>
          <p>
            We also have get togethers, trips, and other activities that may
            have a cost associated as well.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <h1 className="title">Registration</h1>
          <p>
            When you are ready for your child to register, please fill out the
            following youth application and bring a check for the annual dues
            described below.
          </p>
          <ul>
            <li>
              <a href="#">Online Registration Form</a>
            </li>
          </ul>

          <p>
            To register as an adult leader , please use the following
            application:
          </p>

          <ul>
            <li>
              <a href="http://www.scouting.org/filestore/pdf/524-501.pdf">
                Downloadable Adult Application Form
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <div className="container">
          <h1 className="title">Uniforms</h1>
          <p>
            Cub Scouts are required to purchase a className “A” uniform
            (official blue shirt and insignia) to be worn at official activities
            and some meetings. Uniforms, manuals and other items can be
            purchased at the Old North State Council Boy Scout office. You can
            find more information about the Cub Scout uniform{" "}
            <a href="http://www.scouting.org/scoutsource/CubScouts/Uniform/cubscout.aspx">
              here
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  </Layout>
)

export default Join
