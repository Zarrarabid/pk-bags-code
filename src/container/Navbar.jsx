import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className=" sticky-top">
      <nav className=" navbar navbar-expand-lg bg-body-tertiary py-3">
        <div className="container-fluid px-5">
          <NavLink className="navbar-brand ms-3"  to="#">
            Brand
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
              <li className="nav-item">
                <NavLink className="nav-link fw-medium" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fw-medium" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fw-medium" to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fw-medium" to="/LogIn">
                  LogIn
                </NavLink>
              </li>

            </ul>
            
          </div>
        </div>
      </nav>
      
    </div>
  );
}

export default Navbar;
