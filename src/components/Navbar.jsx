import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import resortLogo from '../images/logo.svg'
import { Link } from "react-router-dom";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to='/'>
            <img src={resortLogo}/>
          </Link>
          <button type="button" className="nav-btn" onClick={()=>setToggle(!toggle)}>
            <GiHamburgerMenu className="nav-icon"/>
          </button>
        </div>
        <ul className={toggle?"nav-links show-nav":"nav-links"}>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/rooms'>Rooms</Link>
        </li>

        </ul>
      </div>
    </div>
  );
};

export default Navbar;
