import React, { useContext } from "react";
import logo from "../img/logoCE.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext.jsx";
import profile from "../img/profile.png";

const Navbar = () => {

  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar animate__animated animate__backInDown">
      <div className="container">
        <div className="logo">
          <Link>
            <img src={logo} alt="Coding Everday" />
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/?cat=programacao">
            <h6>PROGRAMMING</h6>
          </Link>
          <Link className="link" to="/?cat=front-end">
            <h6>FRONT-END</h6>
          </Link>
          <Link className="link" to="/?cat=back-end">
            <h6>BACK-END</h6>
          </Link>
          <Link className="link" to="/?cat=data-science">
            <h6>DATA SCIENCE</h6>
          </Link>
          <Link className="link" to="/?cat=ux-design">
            <h6>UX & DESIGN</h6>
          </Link>
          <Link className="link" to="/?cat=mobile">
            <h6>MOBILE</h6>
          </Link>
          <img className="profile" src={profile} alt="Profile" />
          <span>{currentUser?.username}</span>
          {currentUser ? (<span onClick={logout}>Logout</span>) : (<Link className="link" to="/login" >Login</Link>)}
          <span className="write">
            <Link className="link" to="/write">Write</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
