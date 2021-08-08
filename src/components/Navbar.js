import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand logo">
          <span className="title">
            <span className="bigj">J</span>
            <span className="azzy">azzy</span>
            <span> </span>
            <span className="bigs">S</span>
            <span className="ingh">ingh</span>
          </span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/search" className="nav-link">
                Search
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/testimonial" className="nav-link">
                Testimonials
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://jazzysingh.cbintouch.com/featuredlistings/#RecentSales"
                target="blank">
                Sales
              </a>
            </li>
          </ul>
          <span className="navbar-text">
            <Button href="/contact" color="secondary">
              Contact Jazzy
            </Button>
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
