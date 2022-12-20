import React from "react";
import { Outlet } from "react-router-dom";
import Topbar from "./Portfolio/Topbar";

function PortalLayout() {
  return (
    <div className="container-fluid">
      <Topbar />
      <Outlet />
      <br/><br/>
      <footer>
        <div className="container-fluid bg-light fixed-bottom text-center">
          <div className="row bg-light">
            <div className="col-lg align-self-center"><br/>
              <p className="footer__copyright">©KALANJIYARAJ</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default PortalLayout;
