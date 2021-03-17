import React from "react";
import img from "../Images/a.jpg";
import "../index.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="nav_bg">
        <div className="row">
          <div className="col-12 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
              <div className="container-fluid">
                <div className="logo-img">
                  <img src={img} alt="notFound" />
                </div>
                <a className="navbar-brand" href="#">
                  24/7 BANKING
                </a>
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
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink
                        className="nav-link active a"
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link a" to="/views">
                        View Customers
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link a" to="/transfer">
                        Transfer Money
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link a" to="/transaction">
                        Transaction History
                      </NavLink>
                    </li>
                   
                    <li className="nav-item">
                      <NavLink className="nav-link a" to="/contact">
                        Contact us
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
