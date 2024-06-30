import React from "react";
import logo from "./images/logo.svg";
import { pageLinks, iconLinks } from "./data";

const Navbar = () => {
  const NavbarLinks = () => {
    return (
      <ul className="nav-links" id="nav-links">
        {pageLinks.map((link) => {
          const { id, href, text } = link;
          return (
            <li key={id}>
              <a href={href} className="nav-link">
                {text}
              </a>
            </li>
          );
        })}
      </ul>
    );
  };
  const SocialMediaLinks = () => {
    return (
      <ul className="nav-icons">
        {iconLinks.map((link) => {
          const { id, href, icon } = link;
          return (
            <li key={id}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="nav-icon"
              >
                <i className={icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
    );
  };
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <NavbarLinks />
        <SocialMediaLinks />
      </div>
    </nav>
  );
};

export default Navbar;
