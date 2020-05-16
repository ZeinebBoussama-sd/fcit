import React, { useState } from "react";
import {
  faBars,
  faTimes,
  faUsers,
  faLaptop,
  faBrain,
  faPaintBrush,
  faDiagnoses,
  faGraduationCap,
  faChalkboardTeacher,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

function SideBar(props) {
  const [active, setactive] = useState(false);
  const activeSidebar = () => {
    active ? setactive(false) : setactive(true);
  };
  return (
    <nav id="sidebar" className={`${active ? "mini" : ""}`}>
      <div className="sidebar-header">
        {active ? (
          <button
            className="navbar-toggler float-right"
            type="button"
            onClick={() => activeSidebar()}
          >
            <FontAwesomeIcon icon={faBars} className="mr-1" id="sidebar_btn" />
          </button>
        ) : (
          <button
            className="navbar-toggler float-right"
            type="button"
            onClick={() => activeSidebar()}
          >
            <FontAwesomeIcon icon={faTimes} className="mr-1" id="sidebar_btn" />
          </button>
        )}
      </div>

      <ul className="list-unstyled components">
        <li>
          <NavLink
            to="/admin/formation"
            activeStyle={{ color: "red", borderRight: "solid 4px red" }}
          >
            <FontAwesomeIcon
              icon={faGraduationCap}
              className="mr-1"
              id="sidebar_btn"
            />
            <span>formation</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin/client"
            activeStyle={{ color: "red", borderRight: "solid 4px red" }}
          >
            <FontAwesomeIcon icon={faUsers} className="mr-1" id="sidebar_btn" />
            <span>Client</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin/theme"
            activeStyle={{ color: "red", borderRight: "solid 4px red" }}
          >
            <FontAwesomeIcon
              icon={faPaintBrush}
              className="mr-1"
              id="sidebar_btn"
            />
            <span>Theme</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin/session"
            activeStyle={{ color: "red", borderRight: "solid 4px red" }}
          >
            <FontAwesomeIcon
              icon={faDiagnoses}
              className="mr-1"
              id="sidebar_btn"
            />
            <span>Session </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin/formateur"
            activeStyle={{ color: "red", borderRight: "solid 4px red" }}
          >
            <FontAwesomeIcon
              icon={faChalkboardTeacher}
              className="mr-1"
              id="sidebar_btn"
            />
            <span>Formateur</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin/ingenieur_pedagogique"
            activeStyle={{ color: "red", borderRight: "solid 4px red" }}
          >
            <FontAwesomeIcon icon={faBrain} className="mr-1" id="sidebar_btn" />
            <span>Ingenieur Pedagogique</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin/support"
            activeStyle={{ color: "red", borderRight: "solid 4px red" }}
          >
            <FontAwesomeIcon
              icon={faLaptop}
              className="mr-1"
              id="sidebar_btn"
            />
            <span>Support</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default SideBar;
