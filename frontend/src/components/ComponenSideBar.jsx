import React from "react";
import { NavLink } from "react-router-dom";

function ComponentSideBar() {
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="/#"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">Song MATP</div>
      </a>
      <li className="nav-item active">
        <NavLink className="nav-link" to="/#">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </NavLink>
      </li>
      <li className="nav-item">
        <a
          className="nav-link collapse"
          href="/#"
          data-toggle="collapse"
          data-target="#masterSection"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i className="fas fa-fw fa-cog"></i>
          <span>Master</span>
        </a>
        <div
          id="masterSection"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Custom Components:</h6>
            <NavLink className="collapse-item" to="/song">
              Song
            </NavLink>
            <NavLink className="collapse-item" to="/borrower">
              Borrower
            </NavLink>
            <NavLink className="collapse-item" to="/borrowings">
              Borrowing
            </NavLink>
          </div>
        </div>
      </li>
    </ul>
  );
}
export default ComponentSideBar;
