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
        <div class="container-fluid bg-light fixed-bottom text-center">
          <div class="row bg-light">
            <div class="col-lg align-self-center"><br/>
              <p class="footer__copyright">©KALANJIYARAJ</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default PortalLayout;
