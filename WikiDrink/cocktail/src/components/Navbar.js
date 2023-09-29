import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import { LinkComponent, SocialComponent } from "../utils/links";
const Navbar = () => {
  // Custom hook
  const{openSidebar} = useGlobalContext();
  return (
  <nav className="nav">
    <div className='container nav-container' >
      <header className='nav-header'>
        
        <Link to='/' className="nav-brand">
          <h3>Wiki drink</h3>
        </Link>

        <div>
          <button 
          onClick={openSidebar}
          className="btn nav-toggler icon-btn"
          >
          <FaBars className="nav-icon" />
          </button>
        </div>

      </header>
      <LinkComponent classLink="nav-links" />
      <SocialComponent classSocial='socialTop' />
    </div>
  </nav>
  );
};

export default Navbar;
