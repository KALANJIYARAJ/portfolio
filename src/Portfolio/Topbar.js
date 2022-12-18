import React from "react";
import { Link } from "react-router-dom";
import Introduction from "./Introduction";
function Topbar() {
  return (
    <> <nav class="navbar navbar-expand-lg bg-dark fixed-top">
    <div class="container-fluid bg-dark">
      <Link className="navbar-brand fw-bold text-white" to={"intro"}>KALANJIYARAJ M</Link>
        <button className="navbar-toggler  btn-close-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo01">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active text-white" aria-current="page" to={"about"}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to={"skills"}>Skills</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to={"projects"}>Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to={"services"}>Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to={"contact"}>Contact</Link>
            </li>
          </ul>
        </div>
        </div>
    </nav>
<br /><br /><br />

    </>
  );
}

export default Topbar;
