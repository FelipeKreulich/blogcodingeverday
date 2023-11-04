import React from 'react'
import logo from '../img/logoCE.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Coding Everday" />
        </div>
        <div className="links">
          <Link className='link' to="/?cat=programacao">
            <h6>PROGRAMMING</h6>
          </Link>
          <Link className='link' to="/?cat=front-end">
            <h6>FRONT-END</h6>
          </Link>
          <Link className='link' to="/?cat=back-end">
            <h6>BACK-END</h6>
          </Link>
          <Link className='link' to="/?cat=data-science">
            <h6>DATA SCIENCE</h6>
          </Link>
          <Link className='link' to="/?cat=ux-design">
            <h6>UX & DESIGN</h6>
          </Link>
          <Link className='link' to="/?cat=mobile">
            <h6>MOBILE</h6>
          </Link>
          <span>Kreulich</span>
          <span>Logout</span>
          <span className='write'>
            <Link className='link' to="/write">Write</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
