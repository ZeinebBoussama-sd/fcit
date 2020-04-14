import React from 'react';
import logofcit from '../foundation/logo/logofcit3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhoneVolume,
  faEnvelopeOpenText,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
function Footer() {
  return (
    <div className='container-fluid bg-dark text-white'>
      <div className='row pt-4 pb-3'>
        <div className='col-lg-2'>
          <a href='/'>
            <img src={logofcit} height='100' alt='' />
          </a>
        </div>
        <div className='col-lg-3 text-left font-italic '>
          <p>
            FC-IT est un cabinet de formation et de conseil en nouvelles
            technologies de l'information.
          </p>
        </div>
        <div className='col-lg-2 text-left font-italic'>
          <p>
            <FontAwesomeIcon
              icon={faEnvelopeOpenText}
              className='mr-1'
              color='cornflowerblue'
            />
            <a className='text-white' href='mailto:contact@fc4it.net'>
              contact@fc4it.net
            </a>
          </p>

          <p>
            <FontAwesomeIcon
              icon={faEnvelopeOpenText}
              className='mr-1'
              color='cornflowerblue'
            />
            <a className='text-white' href='mailto:espace.clients@fc4it.net'>
              espace.clients@fc4it.net
            </a>
          </p>
        </div>
        <div className='col-lg-2 text-left font-italic'>
          <p>
            <FontAwesomeIcon
              icon={faPhoneVolume}
              className='mr-1'
              color='cornflowerblue'
            />
            Tél: +21656563753
          </p>
          <div>
            <FontAwesomeIcon
              icon={faPhoneVolume}
              className='mr-1'
              color='cornflowerblue'
            />
            Office:
            <ul className='no-list-style'>
              <li>+21656563643</li>
              <li>+21656563633</li>
              <li>+21656563833</li>
            </ul>
          </div>
        </div>
        <div className='col-lg-3 text-left font-italic'>
          <p>
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className='mr-1'
              color='cornflowerblue'
            />
            Centre Millenium 2éme étage-Bureau N°19 Route de la Marsa, Sidi
            Daoud La Marsa
          </p>
          <p className='mt-2'>
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className='mr-1'
              color='cornflowerblue'
            />
            Mindup, Bureau 1, 8 avenue de l’université Manar1 , Tunis, Tunisie
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
