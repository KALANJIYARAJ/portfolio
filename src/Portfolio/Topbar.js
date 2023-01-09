import React, { useState } from "react";
import { Link } from "react-router-dom";
function Topbar() {

  const [show, setShow] = useState({
    expanded: "false",
    collapsed: "navbar-toggler btn-close-white",
    show: "collapse navbar-collapse justify-content-end",
  });

  let hide = () => {
    setShow({
      expanded: "false",
      collapsed: "navbar-toggler btn-close-white",
      show: "collapse navbar-collapse justify-content-end",
    });
  };

  let checkHide = () => {
    if (show.expanded === "true") {
      setShow({
        expanded: "false",
        collapsed: "navbar-toggler btn-close-white",
        show: "collapse navbar-collapse justify-content-end",
      });
    } else {
      setShow({
        expanded: "true",
        collapsed: "navbar-toggler btn-close-white collapsed",
        show: "collapse navbar-collapse justify-content-end show",
      });
    }
  };

  return (
    <>
      <nav class="navbar navbar-expand-lg bg-dark fixed-top">
        <div class="container-fluid bg-dark">
          <Link className="navbar-brand fw-bold text-white" to={"intro"}>
            KALANJIYARAJ M
          </Link>
          <button
            className={show.collapsed}
            type="button"
            onClick={() => {
              checkHide();
            }}
            aria-controls="navbarTogglerDemo01"
            aria-expanded={show.expanded}
            aria-label="Toggle navigation "
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={show.show}
            id="navbarTogglerDemo01"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to={"about"}
                  onClick={() => {
                    hide();
                  }}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to={"skills"}
                 onClick={() => {
                  hide();
                }}>
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to={"projects"}
                 onClick={() => {
                  hide();
                }}>
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to={"services"}
                 onClick={() => {
                  hide();
                }}>
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to={"contact"}
                 onClick={() => {
                  hide();
                }}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <br />
      <br />
      <br />
    </>
  );
}

export default Topbar;
