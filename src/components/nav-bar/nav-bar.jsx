import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import { NavLink } from "react-router-dom";
import "./nav-bar.css";

import { useEffect } from "react";
import { ReactComponent as InfoIcon } from "../../assets/icons/nav-icons/info.svg";
import { ReactComponent as SignIcon } from "../../assets/icons/nav-icons/sign.svg";
import { ReactComponent as TaxiIcon } from "../../assets/icons/nav-icons/taxies.svg";
import { ReactComponent as MenuIcon } from "../../assets/icons/burger_menu.svg";
import { ReactComponent as CloseIcon } from "../../assets/icons/close_icon.svg";
import { useState } from "react";

function NavBar() {
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <nav>
        <div className="naw_wrapper">
          <div
            className="nav_logo"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <NavLink to="/">
              <p>Yo'l-yo'lakay</p>
            </NavLink>
          </div>
          <div
            className="nav_list"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
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
          <div
            onClick={() => setMenu(false)}
            className={menu ? "nav_burger_menu" : "hide_burger_menu"}
          >
            <CloseIcon />
          </div>
          <div
            onClick={() => setMenu(true)}
            className={menu ? "nav_burger_close" : "hide_close_menu"}
          >
            <MenuIcon data-aos="fade-down" data-aos-duration="1000" />
          </div>
        </div>
      </nav>

      <div
        onClick={() => setMenu(false)}
        className={menu ? "nav_mobilie_menu" : "hide_mobile_menu"}
      >
        <NavLink to="/drivers">
          <div className="nav_menu_item">
            <TaxiIcon />
            <p>Taksilar</p>
          </div>
        </NavLink>
        <NavLink to="/info">
          <div className="nav_menu_item">
            <InfoIcon />
            <p>Info</p>
          </div>
        </NavLink>
        <NavLink to="/login">
          <div className="nav_menu_item">
            <SignIcon />
            <p>Kirish</p>
          </div>
        </NavLink>
      </div>
    </>
  );
}

export default NavBar;
