import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
function Admin() {
  return (
    <div>
      <input type="checkbox" id="check"></input>
      <div className="sidebar">
        <label for="check">
          <FontAwesomeIcon icon={faBars} className="mr-1" id="sidebar_btn" />
        </label>
        <a href="#">
          <span>Formation</span>
        </a>
        <a href="#">
          <span>Client</span>
        </a>
        <a href="#">
          <span>Session </span>
        </a>
        <a href="#">
          <span>Formateur</span>
        </a>
        <a href="#">
          <span>Ingenieur Pedagogique</span>
        </a>
        <a href="#">
          <span>Support</span>
        </a>
      </div>
    </div>
  );
}
export default Admin;
