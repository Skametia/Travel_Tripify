import React, { useState, useEffect } from "react";
import { CustomButton } from "../Button/CustomButton";
import "./Navbar.css";
import { Link } from "react-router-dom";

import { SiYourtraveldottv } from "react-icons/si";
import { ImCross } from "react-icons/im";
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <span style={{ padding: "10px", fontSize: "40px" }}>
              <span style={{}}>𝐓𝐫𝐢𝐩𝐢𝐟𝐲</span>
            </span>
            <SiYourtraveldottv
              style={{
                width: "50px",
                height: "70",
                marginTop: "10px",
              }}
            />{" "}
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? (
              <ImCross style={{ color: "white" }} />
            ) : (
              <TiThMenu style={{ color: "white" }} />
            )}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Discover"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Discover
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/Sign_up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
                id="signup-hide"
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && (
            <CustomButton buttonStyle="btn--outline">SIGN UP</CustomButton>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
