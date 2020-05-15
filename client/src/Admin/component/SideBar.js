import React, { useState } from 'react';
import {
  faBars,
  faTimes,
  faBriefcase,
  faUsers,
  faLaptop,
  faBrain,
  faDiagnoses,
  faGraduationCap,
  faChalkboardTeacher,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function SideBar(props) {
  const [active, setactive] = useState(false);
  const activeSidebar = () => {
    active ? setactive(false) : setactive(true);
  };
  return (
    <nav id='sidebar' className={` ${active ? 'active' : ''}`}>
      <div className='sidebar-header'>
        {active ? (
          <button
            className='navbar-toggler float-right'
            type='button'
            onClick={() => activeSidebar()}
          >
            <FontAwesomeIcon icon={faBars} className='mr-1' id='sidebar_btn' />
          </button>
        ) : (
          <button
            className='navbar-toggler float-right'
            type='button'
            onClick={() => activeSidebar()}
          >
            <FontAwesomeIcon icon={faTimes} className='mr-1' id='sidebar_btn' />
          </button>
        )}
      </div>

      <ul className='list-unstyled components'>
        <li>
          <Link to='/admin/formation'>
            <FontAwesomeIcon
              icon={faGraduationCap}
              className='mr-1'
              id='sidebar_btn'
            />
            <span>formation</span>
          </Link>
        </li>
        <li>
          <Link to='/admin/client'>
            <FontAwesomeIcon icon={faUsers} className='mr-1' id='sidebar_btn' />
            <span>Client</span>
          </Link>
        </li>
        <li>
          <Link to='/admin/session'>
            <FontAwesomeIcon
              icon={faDiagnoses}
              className='mr-1'
              id='sidebar_btn'
            />
            <span>Session </span>
          </Link>
        </li>
        <li>
          <Link to='/admin/formateur'>
            <FontAwesomeIcon
              icon={faChalkboardTeacher}
              className='mr-1'
              id='sidebar_btn'
            />
            <span>Formateur</span>
          </Link>
        </li>
        <li>
          <Link to='/admin/ingenieur_pedagogique'>
            <FontAwesomeIcon icon={faBrain} className='mr-1' id='sidebar_btn' />
            <span>Ingenieur Pedagogique</span>
          </Link>
        </li>
        <li>
          <Link to='/admin/support'>
            <FontAwesomeIcon
              icon={faLaptop}
              className='mr-1'
              id='sidebar_btn'
            />
            <span>Support</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default SideBar;
