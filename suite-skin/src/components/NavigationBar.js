import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="/Enter" id="brand">
        Suite Skin
      </a>
      <a className="navbar-link" href="/Services" className="services">
        Services
      </a>
      <a className="navbar-link" href="/BeforeAndAfter" id="bg03">
        Before and After
      </a>
      <a className="navbar-link" href="/Products" id="bg04">
        Product Lines
      </a>
      <a className="navbar-link" href="/Contact" id="bg05">
        Contact
      </a>
      <a className="navbar-link" href="https://suiteskinbylindsey.glossgenius.com/">
        Online Booking
      </a>
    </nav>
  );
}

export default Nav;