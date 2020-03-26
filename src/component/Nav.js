import React from 'react';

function Nav() {
  return (
    <div>
      <nav class='navbar navbar-expand-lg navbar-light bg-primary' id='nav'>
        <button
          class='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button>

        <div class='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul class='navbar-nav mr-auto'>
            <li class='nav-item active'>
              <a class='nav-link' href='#'>
                Accueil <span class='sr-only'>(current)</span>
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link' href='#'>
                A propos
              </a>
            </li>
            <li class='nav-item dropdown'>
              <a
                class='nav-link dropdown-toggle'
                href='http://example.com'
                id='navbarDropdownMenuLink'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                {' '}
                Dropdown{' '}
              </a>
              <ul
                class='dropdown-menu'
                aria-labelledby='navbarDropdownMenuLink'
              >
                <li>
                  <a class='dropdown-item' href='#'>
                    Action
                  </a>
                </li>
                <li>
                  <a class='dropdown-item' href='#'>
                    Another action
                  </a>
                </li>
                <li class='dropdown-submenu'>
                  <a
                    class='dropdown-item dropdown-toggle'
                    href='http://google.com'
                  >
                    Google
                  </a>
                  <ul class='dropdown-menu'>
                    <li>
                      <a class='dropdown-item' href='#'>
                        Submenu
                      </a>
                    </li>
                    <li>
                      <a class='dropdown-item' href='#'>
                        Submenu0
                      </a>
                    </li>
                    <li class='dropdown-submenu'>
                      <a class='dropdown-item dropdown-toggle' href='#'>
                        Submenu 1
                      </a>
                      <ul class='dropdown-menu'>
                        <li>
                          <a class='dropdown-item' href='#'>
                            Subsubmenu1
                          </a>
                        </li>
                        <li>
                          <a class='dropdown-item' href='#'>
                            Subsubmenu1
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class='dropdown-submenu'>
                      <a class='dropdown-item dropdown-toggle' href='#'>
                        Submenu 2
                      </a>
                      <ul class='dropdown-menu'>
                        <li>
                          <a class='dropdown-item' href='#'>
                            Subsubmenu2
                          </a>
                        </li>
                        <li>
                          <a class='dropdown-item' href='#'>
                            Subsubmenu2
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li class='nav-item dropdown'>
              <a
                class='nav-link dropdown-toggle'
                href='#'
                id='navbarDropdown'
                role='button'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                Nos Solutions
              </a>
              <div class='dropdown-menu' aria-labelledby='navbarDropdown'>
                <a class='dropdown-item' href='#'>
                  Formation
                </a>
                <a class='dropdown-item' href='#'>
                  Séminaire
                </a>
                <div class='dropdown-divider'></div>
                <a class='dropdown-item' href='#'>
                  Consulting
                </a>
              </div>
            </li>
            <li class='nav-item'>
              <a class='nav-link' href='#'>
                Nos Centres
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link' href='#'>
                Contact
              </a>
            </li>
          </ul>
          <ul class='nav justify-content-end'>
            <button class='btn btn-light'>S'authentifier</button>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
