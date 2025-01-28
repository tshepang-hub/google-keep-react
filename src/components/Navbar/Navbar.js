import React from "react";
import "./Navbar.css";
import Tooltip from "../Tooltip/Tooltip";

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav>
      <div className="logo-area">
        <Tooltip icon="menu" text="Main Menu" onClick={toggleSidebar} />
        <img
          className="gb_uc gb_7d"
          src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
          srcSet="
          https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png 1x,
          https://www.gstatic.com/images/branding/product/2x/keep_2020q4_48dp.png 2x
        "
          alt=""
          aria-hidden="true"
          style={{ width: "40px", height: "40px" }}
        />
        <span className="logo-text">Keep</span>
      </div>

      <div className="search-area">
        <Tooltip icon="search" text="Search" />
        <input type="text" placeholder="Search" />
      </div>

      <div className="settings-area">
        <Tooltip icon="refresh" text="Refresh" />
        <Tooltip icon="view_agenda" text="List View" />
        <Tooltip icon="settings" text="Settings" />
      </div>

      <div className="profile-actions-area">
        <Tooltip icon="apps" text="Apps" />
        <Tooltip icon="account_circle" text="Account" />
      </div>
    </nav>
  );
};

export default Navbar;