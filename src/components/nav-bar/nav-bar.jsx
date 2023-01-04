import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import { NavLink } from "react-router-dom";
import "./nav-bar.css";

import { useEffect } from "react";
import { ReactComponent as InfoIcon } from "../../assets/icons/nav-icons/info.svg";
import { ReactComponent as SignIcon } from "../../assets/icons/nav-icons/sign.svg";
import { ReactComponent as TaxiIcon } from "../../assets/icons/nav-icons/taxies.svg";

function NavBar() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <nav>
      <div className="naw_wrapper">
        <div className="nav_logo" data-aos="fade-down" data-aos-duration="1000">
          <NavLink to="/">
            <p>Dream Taxi</p>
          </NavLink>
        </div>
        <div className="nav_list" data-aos="fade-down" data-aos-duration="1000">
          <NavLink to="/drivers">
            <div className="nav_list_item">
              <TaxiIcon />
              <p>Taksilar</p>
            </div>
          </NavLink>
          <NavLink to="/info">
            <div className="nav_list_item">
              <InfoIcon />
              <p>Info</p>
            </div>
          </NavLink>
        </div>
        <div className="nav_auth">
          <NavLink to="/login">
            <div
              className="nav_list_item"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <SignIcon />
              <p>Kirish</p>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
