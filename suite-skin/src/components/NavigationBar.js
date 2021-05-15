import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="/Enter">
        Home
      </a>
      <a className="navbar-brand" href="/Services">
        Services
      </a>
      <a className="navbar-brand" href="/BeforeAndAfter">
        Before and After
      </a>
      <a className="navbar-brand" href="/Products">
        Products
      </a>
      <a className="navbar-brand" href="/Contact">
        Contact
      </a>
      <a className="navbar-brand" href="">
        Online Booking
      </a>
    </nav>
  );
}

export default Nav;