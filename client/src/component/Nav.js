import React from "react";
import logofcit from "../foundation/logo/logofcit3.png";
function Nav() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <a class="navbar-brand" href="/">
              <img src={logofcit} height="30" alt="" />
            </a>
            <li class="nav-item active">
              <a class="nav-link" href="/">
                Accueil <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/apropos">
                A propos
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="http://example.com"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Nos solutions
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
                style={{ top: "38px" }}
              >
                <li>
                  <a class="dropdown-item" href="#">
                    Séminaire
                  </a>
                </li>
                <li>
                  {" "}
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">
                    Consulting
                  </a>
                </li>
                <div class="dropdown-divider"></div>
                <li class="dropdown-submenu">
                  <a class="dropdown-item dropdown-toggle" href="#">
                    Formations
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Nos Formations
                      </a>
                    </li>
                    <li>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#">
                        Cursus Métiers
                      </a>
                    </li>
                    <li>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#">
                        Reconversion
                      </a>
                    </li>
                    <li>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#">
                        Sur Mesure
                      </a>
                    </li>
                    <li>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#">
                        Top Formations
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">
                Nos Centres
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
          <ul class="nav justify-content-end">
            <button class="btn btn-light">S'authentifier</button>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
