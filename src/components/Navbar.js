import {React,useEffect} from 'react'
import { Link,useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'


function Navbar(props) {
let location = useLocation();

useEffect(() => {

}, [location])

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light " >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Inotebook</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/"?"active":""} `} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/about"?"active":""} `} to="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

Navbar.propTypes = {
  title:PropTypes.string
}

export default Navbar;
