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
  faCommentAlt,
  faFileAlt,
  faUserTie,
  faCheckCircle,
  faIdBadge,
  faPencilAlt,
  faIdCardAlt,
  faCalendarAlt,
  faRing,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

function SideBar(props) {
  const [active, setactive] = useState(false);
  const [show, setShow] = useState("");
  const [showFormation, setShowFormation] = useState("");
  const activeSidebar = () => {
    active ? setactive(false) : setactive(true);
  };
  const subShow = (type) => {
    if (type === "formation") {
      showFormation === "" ? setShowFormation("show") : setShowFormation("");
    } else {
      show === "" ? setShow("show") : setShow("");
    }
  };
  return (
    <nav id="sidebar" className={`${active ? "mini" : ""}`}>
      <div className="sidebar-header">
        {active ? (
          <div
            className="navbar-toggler float-right"
            type="button"
            onClick={() => activeSidebar()}
          >
            <FontAwesomeIcon icon={faBars} className="mr-1" id="sidebar_btn" />
          </div>
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
          <NavLink to="#" onClick={() => subShow()}>
            {!show ? (
              <FontAwesomeIcon
                icon={faPlus}
                className="mr-1"
                id="sidebar_btn"
              />
            ) : (
              <FontAwesomeIcon
                icon={faMinus}
                className="mr-1"
                id="sidebar_btn"
              />
            )}
            <span>Personnels</span>
          </NavLink>
          <div class={`collapse ${show}`} id="collapseExample">
            <ul>
              <NavLink
                to="/formateur"
                activeStyle={{
                  color: "red",
                  borderRight: "solid 4px red",
                }}
              >
                <FontAwesomeIcon
                  icon={faChalkboardTeacher}
                  className="mr-1"
                  id="sidebar_btn"
                />
                <span>Formateur</span>
              </NavLink>
            </ul>
            <ul>
              <NavLink
                to="/ingenieur_pedagogique"
                activeStyle={{ color: "red", borderRight: "solid 4px red" }}
              >
                <FontAwesomeIcon
                  icon={faBrain}
                  className="mr-1"
                  id="sidebar_btn"
                />
                <span>Ingenieur Pedagogique</span>
              </NavLink>
            </ul>
            <ul>
              <NavLink
                to="/demandeur"
                activeStyle={{ color: "red", borderRight: "solid 4px red" }}
              >
                <FontAwesomeIcon
                  icon={faIdBadge}
                  className="mr-1"
                  id="sidebar_btn"
                />
                <span>Demandeur</span>
              </NavLink>
            </ul>
            <ul>
              <NavLink
                to="/participant"
                activeStyle={{ color: "red", borderRight: "solid 4px red" }}
              >
                <FontAwesomeIcon
                  icon={faUsers}
                  className="mr-1"
                  id="sidebar_btn"
                />
                <span> Participant</span>
              </NavLink>
            </ul>
          </div>
        </li>
        <li>
          <NavLink to="#" onClick={() => subShow("formation")}>
            {!showFormation ? (
              <FontAwesomeIcon
                icon={faPlus}
                className="mr-1"
                id="sidebar_btn"
              />
            ) : (
              <FontAwesomeIcon
                icon={faMinus}
                className="mr-1"
                id="sidebar_btn"
              />
            )}
            <span>Formation</span>
          </NavLink>
          <div class={`collapse ${showFormation}`} id="collapseExample">
            <ul>
              <NavLink
                to="/formation"
                activeStyle={{ color: "red", borderRight: "solid 4px red" }}
              >
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  className="mr-1"
                  id="sidebar_btn"
                />
                <span>Formation</span>
              </NavLink>
            </ul>
            <ul>
              <NavLink
                to="/motcle"
                activeStyle={{ color: "red", borderRight: "solid 4px red" }}
              >
                <FontAwesomeIcon
                  icon={faPencilAlt}
                  className="mr-1"
                  id="sidebar_btn"
                />
                <span>Mot Clé</span>
              </NavLink>
            </ul>
            <ul>
              <NavLink
                to="/theme"
                activeStyle={{ color: "red", borderRight: "solid 4px red" }}
              >
                <FontAwesomeIcon
                  icon={faPaintBrush}
                  className="mr-1"
                  id="sidebar_btn"
                />
                <span>Theme</span>
              </NavLink>
            </ul>
            <ul>
              <NavLink
                to="/support"
                activeStyle={{ color: "red", borderRight: "solid 4px red" }}
              >
                <FontAwesomeIcon
                  icon={faLaptop}
                  className="mr-1"
                  id="sidebar_btn"
                />
                <span>Support</span>
              </NavLink>
            </ul>
            <ul>
              <NavLink
                to="/fichier"
                activeStyle={{ color: "red", borderRight: "solid 4px red" }}
              >
                <FontAwesomeIcon
                  icon={faFileAlt}
                  className="mr-1"
                  id="sidebar_btn"
                />
                <span> Fichier</span>
              </NavLink>
            </ul>
          </div>
        </li>
        <li>
          <NavLink
            to="/demandeformation"
            activeStyle={{ color: "red", borderRight: "solid 4px red" }}
          >
            <FontAwesomeIcon
              icon={faCommentAlt}
              className="mr-1"
              id="sidebar_btn"
            />
            <span>Demande Formation</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dateprevue"
            activeStyle={{ color: "red", borderRight: "solid 4px red" }}
          >
            <FontAwesomeIcon
              icon={faCalendarAlt}
              className="mr-1"
              id="sidebar_btn"
            />
            <span> Date Prevue</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/participer"
            activeStyle={{ color: "red", borderRight: "solid 4px red" }}
          >
            <FontAwesomeIcon icon={faRing} className="mr-1" id="sidebar_btn" />
            <span> Participer</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/metier"
            activeStyle={{ color: "red", borderRight: "solid 4px red" }}
          >
            <FontAwesomeIcon
              icon={faIdCardAlt}
              className="mr-1"
              id="sidebar_btn"
            />
            <span>Metier</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/client"
            activeStyle={{ color: "red", borderRight: "solid 4px red" }}
          >
            <FontAwesomeIcon
              icon={faUserTie}
              className="mr-1"
              id="sidebar_btn"
            />
            <span>Client</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/session"
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
            to="/validation"
            activeStyle={{ color: "red", borderRight: "solid 4px red" }}
          >
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="mr-1"
              id="sidebar_btn"
            />
            <span>Validation</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default SideBar;
