import React, { useState } from "react"
// import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { Link } from "gatsby"
import cubScouts from "../images/cubScouts.gif"

const Nav = () => {
  const [menuToggle, setMenuToggle] = useState(false)
  //   const [isTop, setPageTop] = useState(false)

  const onClick = () => setMenuToggle(!menuToggle)

  //   useScrollPosition(
  //     ({ prevPos, currPos }) => {
  //       currPos.y === 0 ? setPageTop(true) : setPageTop(false)
  //     },
  //     [isTop]
  //   )

  return (
    <nav
      className="navbar is-primary is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item">
          <img src={cubScouts} alt="" />
        </a>
        <a
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
        </a>
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
                <a className="navbar-item">Calendar</a>
              </Link>
            </div>
          </div>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">Prospective</a>

            <div className="navbar-dropdown">
              <Link to="/about">
                <a className="navbar-item">About</a>
              </Link>
              <Link to="/ranks">
                <a className="navbar-item">Ranks</a>
              </Link>
              <Link to="/faq">
                <a className="navbar-item">FAQ</a>
              </Link>
              <hr className="navbar-divider" />
              <Link to="/join">
                <a className="navbar-item">Join Us</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
