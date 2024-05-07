import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        style={{
          backgroundColor: "#e5e5e5",
          boxShadow: "0 0 10px 10px #e5e5e5",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <div className="container-fluid">
          <b> Hirademy</b>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={"collapse navbar-collapse" + (isOpen ? " show" : "")}>
            <ul className="navbar-nav">
              <li className="nav-item px-3">
                <Link className="nav-link" to="/" onClick={toggleNavbar}>
                  Home
                </Link>
              </li>
              <li className="nav-item px-3">
                <Link
                  className="nav-link"
                  to="/products"
                  onClick={toggleNavbar}
                >
                  Products
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
