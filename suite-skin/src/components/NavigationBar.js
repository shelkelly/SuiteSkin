import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="/Enter">
        Home
      </a>
      <a className="navbar-brand" href="/Services" className="services">
        Services
      </a>
      <a className="navbar-brand" href="/BeforeAndAfter" id="bg03">
        Before and After
      </a>
      <a className="navbar-brand" href="/Products" id="bg04">
        Products
      </a>
      <a className="navbar-brand" href="/Contact" id="bg05">
        Contact
      </a>
      <a className="navbar-brand" href="https://suiteskinbylindsey.glossgenius.com/">
        Online Booking
      </a>
    </nav>
  );
}

export default Nav;