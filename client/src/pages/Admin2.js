import React from 'react';
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom';
import Home from './Home';
import Apropos from './Apropos';
function Admin2() {
  return (
    <BrowserRouter>
      <div class='row'>
        <nav class='col-md-2 d-none d-md-block bg-light sidebar mt-8'>
          <div className=''>
            <div className='sidebar-sticky'>
              <ul className='nav flex-column'>
                <li className='nav-item'>
                  <Link className='nav-link ' to='/admin2'>
                    Formation
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link ' to='/admin2/f'>
                    Client
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link ' to='/admin2/f1'>
                    Session
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link ' to='/admin2/f1'>
                    Formateur
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link ' to='/admin2/f1'>
                    Ingenieur Pedagogique
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link ' to='/admin2/f1'>
                    Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <main className='col-md-9 ml-sm-auto col-lg-10'>
          <Switch>
            <Route path='/admin2' exact component={Home} />
            <Route path='/admin2/f' exact component={Apropos} />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}
export default Admin2;
