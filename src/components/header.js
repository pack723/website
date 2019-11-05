import React from "react"
import Nav from "./nav"
import PropTypes from "prop-types"

// const Header = ({ siteTitle }) => (
//   <header
//     style={{
//       background: `rebeccapurple`,
//       marginBottom: `1.45rem`,
//     }}
//   >
//     <div
//       style={{
//         margin: `0 auto`,
//         maxWidth: 960,
//         padding: `1.45rem 1.0875rem`,
//       }}
//     >
//       <h1 style={{ margin: 0 }}>
//         <Link
//           to="/"
//           style={{
//             color: `white`,
//             textDecoration: `none`,
//           }}
//         >
//           {siteTitle}
//         </Link>
//       </h1>
//     </div>
//   </header>
// )

const Header = props => {
  const { title, subtitle, size, imageUrl } = props
  return (
    <>
      <Nav />
      <section
        className={`hero ${size}`}
        style={{ background: `url(${imageUrl}) center/cover` }}
      >
        <div className="hero-head"></div>
        <div className="hero-body">
          <div className="container">
            <h1 className="title">{title}</h1>
            <h2 className="subtitle">{subtitle}</h2>
          </div>
        </div>
      </section>
    </>
  )
}

Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  size: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
}

Header.defaultProps = {
  title: ``,
  subtitle: ``,
  size: "is-medium",
  imageUrl: ``,
}

export default Header
