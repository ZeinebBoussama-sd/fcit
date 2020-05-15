import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Apropos from './Apropos';
import Formation from '../Admin/Formation/Formation';
import Client from '../Admin/Client/Client';
import SideBar from '../Admin/component/SideBar';
function Admin() {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <SideBar />
        <div id='content'>
          <Switch>
            <Route path='/admin/formation' exact component={Formation} />
            <Route path='/admin/client' exact component={Client} />
            <Route path='/admin/session' exact component={Apropos} />
            <Route path='/admin/formateur' exact component={Apropos} />
            <Route
              path='/admin/ingenieur_pedagogique'
              exact
              component={Apropos}
            />
            <Route path='/admin/support' exact component={Apropos} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default Admin;
