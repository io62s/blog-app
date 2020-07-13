import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavBar, NavWrapper, NavLinks } from "../Styles/NavStyles";

function Nav() {
  const [toggleNavOpen, setToggleNavOpen] = useState(false);

  const handleToggleNavOpen = () => {
    setToggleNavOpen(!toggleNavOpen);
  };

  return (
    <NavBar>
      <div className="logo">
        <Link to="/" className="link">
          <h1>My Blog</h1>
        </Link>
      </div>
      <NavWrapper>
        <form className="search">
          <input type="text" placeholder="search" />
        </form>
        <NavLinks className={`${toggleNavOpen ? "open" : null}`}>
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
          <Link to="/profile" className="link">
            <li>My Profile</li>
          </Link>
          <li>Logout</li>
        </NavLinks>
        <GiHamburgerMenu className="burger" onClick={handleToggleNavOpen} />
      </NavWrapper>
    </NavBar>
  );
}

export default Nav;
