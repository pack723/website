import React, { useState } from "react"
// import { useScrollPosition } from "@n8tb1t/use-scroll-position"
import { Link } from "gatsby"
import cubScouts from "../images/cubScouts.gif"

const Nav = () => {
  const [menuToggle, setMenuToggle] = useState(false)
  // const [isTop, setPageTop] = useState(false)

  const onClick = () => setMenuToggle(!menuToggle)

  // useScrollPosition(
  //   ({ prevPos, currPos }) => {
  //     currPos.y === 0 ? setPageTop(true) : setPageTop(false)
  //   },
  //   [isTop]
  // )

  return (
    <nav
      className="navbar is-primary is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link to="/">
          <div className="navbar-item">
            <img src={cubScouts} alt="" />
          </div>
        </Link>
        <div
          role="button"
          className={`navbar-burger burger ${menuToggle ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarButton"
          onClick={onClick}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
      </div>

      <div
        id="navbarButton"
        className={`navbar-menu ${menuToggle ? "is-active" : ""}`}
      >
        <div className="navbar-end">
          {/* <Link to="/blog">
            <a className="navbar-item menu-link">Blog</a>
          </Link> */}

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">Current</a>

            <div className="navbar-dropdown">
              <Link to="/calendar">
                <div className="navbar-item">Calendar</div>
              </Link>
            </div>
          </div>
          <div className="navbar-item has-dropdown is-hoverable">
            <div className="navbar-link">Prospective</div>

            <div className="navbar-dropdown">
              <Link to="/about">
                <div className="navbar-item">About</div>
              </Link>
              {/* <Link to="/ranks">
                <a className="navbar-item">Ranks</a>
              </Link> */}
              <Link to="/faq">
                <div className="navbar-item">FAQ</div>
              </Link>
              <hr className="navbar-divider" />
              <Link to="/join">
                <div className="navbar-item">Join Us</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
