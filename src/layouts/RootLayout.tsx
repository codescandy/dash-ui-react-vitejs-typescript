//import node module libraries
import { Outlet } from "react-router";
import { Fragment } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import Sidebar from "components/navbars/sidebar/Sidebar";
import Header from "components/navbars/topbar/Header";
import { Image } from "react-bootstrap";
import { useState } from "react";

const RootLayout = () => {
  const [showMenu, setShowMenu] = useState(true);
  const ToggleMenu = () => {
    return setShowMenu(!showMenu);
  };

  return (
    <Fragment>
      <div id="db-wrapper" className={`${showMenu ? "" : "toggled"}`}>
        <div className="navbar-vertical navbar">
          <Sidebar showMenu={showMenu} toggleMenu={ToggleMenu} />
        </div>
        <div id="page-content">
          <div className="header">
            <Header toggleMenu={ToggleMenu} />
          </div>
          <Outlet />
        </div>
      </div>

      <Link
        to="https://bit.ly/3YoCCRH"
        target="_blank"
        className="btn btn-dark btn-float-button m-5 fs-4 d-inline-flex gap-1 align-items-center text-white"
      >
        <Image src="/images/shopping-icon.svg" className="text-white" />
        Buy Now
      </Link>
    </Fragment>
  );
};

export default RootLayout;
