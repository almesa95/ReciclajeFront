import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/App.css";
export const Navbar = () => {
  return (
    <nav className=" navbar navbar-expand-sm navbar-light bg-light  justify-content-center container  fw-bold  ">
      <div className="navbar-collapse mx-3 text-center">
        <div className="navbar-nav m-auto ">
          <Link className="navbar-brand mx-3 text-success " to="/">
            <i className="fas fa-recycle pe-3 logo "></i>
            El Reciclaje
          </Link>

          <NavLink
            activeClassName="active"
            className="navbar-brand text-success "
            exact
            to="/about"
          >
            <i class="fas fa-users logo pe-3"></i>
            Como Reciclar
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
