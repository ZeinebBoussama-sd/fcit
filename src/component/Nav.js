import React from "react";

function Nav() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-primary" id="nav">
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
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Accueil <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                A propos
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Nos Solutions
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li class="nav-item dropright">
                  <a
                    class="dropdown-item nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Nos formations
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">
                      formation
                    </a>
                    <a class="dropdown-item" href="#">
                      cursus
                    </a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </li>

                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  Séminaire
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  Consulting
                </a>
              </div>
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
