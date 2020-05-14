import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link, Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Apropos from "./Apropos";
function Admin() {
  return (
    <BrowserRouter>
      <div className="row">
        <input type="checkbox" id="check"></input>
        <nav className="col-md-2 sidebar pt-3 mt-9">
          <label for="check">
            <FontAwesomeIcon icon={faBars} className="mr-1" id="sidebar_btn" />
          </label>
          <Link to="/admin">
            <span>Formation</span>
          </Link>
          <Link to="/admin/f">
            <span>Client</span>
          </Link>
          <Link to="#">
            <span>Session </span>
          </Link>
          <Link to="#">
            <span>Formateur</span>
          </Link>
          <Link to="#">
            <span>Ingenieur Pedagogique</span>
          </Link>
          <Link to="#">
            <span>Support</span>
          </Link>
        </nav>
        <main className="col-md-9 ml-sm-auto col-lg-10">
          <Switch>
            <Route path="/admin" exact component={Home} />
            <Route path="/admin/f" exact component={Apropos} />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}
export default Admin;
