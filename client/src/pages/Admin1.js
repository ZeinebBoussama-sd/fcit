import React from 'react';
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom';
import Home from './Home';
import Apropos from './Apropos';
function Admin1() {
  return (
    <div class='row mt-9'>
      <BrowserRouter>
        <div class='col-3'>
          <div
            className='nav flex-column nav-pills'
            id='v-pills-tab'
            role='tablist'
            aria-orientation='vertical'
          >
            <Link
              className='nav-link active'
              id='v-pills-home-tab'
              // data-toggle='pill'
              to='/admin1/f'
              role='tab'
              aria-controls='v-pills-home'
              aria-selected='true'
            >
              Formation
            </Link>

            <Link
              className='nav-link'
              id='v-pills-messages-tab'
              // data-toggle='pill'
              to='/admin1/f1'
              role='tab'
              aria-controls='v-pills-messages'
              aria-selected='false'
            >
              Client
            </Link>
            <Link
              className='nav-link'
              id='v-pills-messages-tab'
              // data-toggle='pill'
              to='/admin1/f1'
              role='tab'
              aria-controls='v-pills-messages'
              aria-selected='false'
            >
              Session
            </Link>
            <Link
              className='nav-link'
              id='v-pills-messages-tab'
              // data-toggle='pill'
              to='/admin1/f1'
              role='tab'
              aria-controls='v-pills-messages'
              aria-selected='false'
            >
              Formateur
            </Link>
            <Link
              className='nav-link'
              id='v-pills-messages-tab'
              // data-toggle='pill'
              to='/admin1/f1'
              role='tab'
              aria-controls='v-pills-messages'
              aria-selected='false'
            >
              Ingenieur Pedagogique
            </Link>
            <Link
              className='nav-link'
              id='v-pills-messages-tab'
              // data-toggle='pill'
              to='/admin1/f1'
              role='tab'
              aria-controls='v-pills-messages'
              aria-selected='false'
            >
              Support
            </Link>
          </div>
        </div>
        <div className='col-9'>
          <div className='tab-content' id='v-pills-tabContent'>
            <Switch>
              <Route path='/admin1/f' exact component={Apropos} />
              <Route path='/admin1/f1' exact component={Home} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}
export default Admin1;
