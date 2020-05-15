import React, { useState } from 'react';
import logofcit from '../foundation/logo/logofcit3.png';

function Nav() {
  const [navActive, setNavActive] = useState('');
  return (
    <nav className='navbar navbar-expand-lg fixed-top navbar-dark bg-dark '>
      <a className='navbar-brand' href='/'>
        <img src={logofcit} height='60' alt='' />
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav mr-auto'>
          <li className={`nav-item ${navActive === 'Accueil' ? 'active' : ''}`}>
            <a
              className='nav-link'
              href='/'
              name='Accueil'
              onClick={() => setNavActive('Accueil')}
            >
              Accueil
            </a>
          </li>
          <li className={`nav-item ${navActive === 'propos' ? 'active' : ''}`}>
            <a
              className='nav-link'
              href='/apropos'
              name='propos'
              onClick={() => setNavActive('propos')}
            >
              A propos
            </a>
          </li>
          <li className='nav-item dropdown'>
            <a
              className='nav-link dropdown-toggle'
              href='http://example.com'
              id='navbarDropdownMenuLink'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
            >
              Nos solutions
            </a>
            <ul
              className='dropdown-menu'
              aria-labelledby='navbarDropdownMenuLink'
              style={{ top: '38px' }}
            >
              <li>
                <a className='dropdown-item' href='#'>
                  Séminaire
                </a>
              </li>
              <li>
                <div className='dropdown-divider'></div>
                <a className='dropdown-item' href='#'>
                  Consulting
                </a>
              </li>
              <div className='dropdown-divider'></div>
              <li className='dropdown-submenu'>
                <a className='dropdown-item dropdown-toggle' href='#'>
                  Formations
                </a>
                <ul className='dropdown-menu'>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Nos Formations
                    </a>
                  </li>
                  <li>
                    <div className='dropdown-divider'></div>
                    <a className='dropdown-item' href='#'>
                      Cursus Métiers
                    </a>
                  </li>
                  <li>
                    <div className='dropdown-divider'></div>
                    <a className='dropdown-item' href='#'>
                      Reconversion
                    </a>
                  </li>
                  <li>
                    <div className='dropdown-divider'></div>
                    <a className='dropdown-item' href='#'>
                      Sur Mesure
                    </a>
                  </li>
                  <li>
                    <div className='dropdown-divider'></div>
                    <a className='dropdown-item' href='#'>
                      Top Formations
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Nos Centres
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Contact
            </a>
          </li>
        </ul>
        <ul className='nav justify-content-end'>
          <button className='btn btn-outline-success'>S'authentifier</button>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
