import React from 'react';
import logofcit from '../foundation/logo/logofcit3.png';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className='navbar navbar-expand-lg fixed-top navbar-dark bg-dark '>
      <a className='navbar-brand' href='/'>
        <img src={logofcit} height='60' alt='' />
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarToggler'
        aria-controls='navbarToggler'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarToggler'>
        <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
          <li className='nav-item'>
            <NavLink
              className='nav-link'
              exact
              to='/'
              // activeStyle={{
              //   color: 'red',
              //   borderBottom: 'solid 4px red',
              //   background: 'blue',
              // }}
            >
              Accueil<span className='sr-only'>(current)</span>
            </NavLink>
          </li>
          <li className={`nav-item `}>
            <NavLink className='nav-link' to='/apropos' exact name='propos'>
              A propos
            </NavLink>
          </li>
          <li className='nav-item dropdown'>
            <NavLink
              className='nav-link dropdown-toggle'
              exact
              to='/solution'
              // id='navbarDropdownMenuLink'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
            >
              Nos solutions
            </NavLink>
            <ul
              className='dropdown-menu navdropdown bg-dark'
              // aria-labelledby='navbarDropdownMenuLink'
              style={{ top: '38px' }}
            >
              <li>
                <NavLink className='dropdown-item' exact to='/seminaire'>
                  Séminaire
                </NavLink>
              </li>
              <li>
                <div className='dropdown-divider'></div>
                <NavLink className='dropdown-item' exact to='/consulting'>
                  Consulting
                </NavLink>
              </li>
              <div className='dropdown-divider'></div>
              <li className='dropdown-submenu dropright'>
                <NavLink
                  className='dropdown-item dropdown-toggle'
                  exact
                  to='/formation'
                >
                  Formations
                </NavLink>
                <ul className='dropdown-menu bg-dark'>
                  <li>
                    <NavLink
                      className='dropdown-item'
                      exact
                      to='/nos_formations'
                    >
                      Nos Formations
                    </NavLink>
                  </li>
                  <li>
                    <div className='dropdown-divider'></div>
                    <NavLink
                      className='dropdown-item'
                      exact
                      to='/cursus_metiers'
                    >
                      Cursus Métiers
                    </NavLink>
                  </li>
                  <li>
                    <div className='dropdown-divider'></div>
                    <NavLink className='dropdown-item' exact to='/reconversion'>
                      Reconversion
                    </NavLink>
                  </li>
                  <li>
                    <div className='dropdown-divider'></div>
                    <NavLink className='dropdown-item' exact to='/sur_mesure'>
                      Sur Mesure
                    </NavLink>
                  </li>
                  <li>
                    <div className='dropdown-divider'></div>
                    <NavLink
                      className='dropdown-item'
                      exact
                      to='/top_formations'
                    >
                      Top Formations
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li className='nav-item'>
            <NavLink className='nav-link' exact to='/nos_centres'>
              Nos Centres
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link' exact to='/contact'>
              Contact
            </NavLink>
          </li>
        </ul>
        <ul className='nav justify-content-end'>
          <NavLink className='nav-link' exact to='/admin'>
            <button className='btn btn-outline-success'>S'authentifier</button>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
