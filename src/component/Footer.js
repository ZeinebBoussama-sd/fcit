import React from "react";
import logofcit from "../foundation/logo/logofcit3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileAlt,
  faEnvelopeOpenText
} from "@fortawesome/free-solid-svg-icons";
function Footer() {
  return (
    <div>
      <div class="container-fluid bg-dark text-white">
        <div class="row">
          <div class="col-lg-1">
            <a href="#">
              <img src={logofcit} height="100" width="100" alt=""></img>
            </a>
          </div>
          <div class="col-lg-3 text-center font-italic">
            FC-IT est un cabinet de formation et de conseil en nouvelles
            technologies de l'information.
          </div>
          <div class="col-lg-2 text-center font-italic">
            <FontAwesomeIcon icon={faEnvelopeOpenText} color="blue" />
            contact@fc4it.net espace.clients@fc4it.net
          </div>
          <div class="col-lg-3 text-center font-italic">
            <FontAwesomeIcon icon={faMobileAlt} color="blue" />
            Tél: +21656563753 Office:+21656563643/+21656563633/ +21656563833
          </div>
          <div class="col-lg-3 text-center font-italic">
            Centre Millenium 2éme étage-Bureau N°19 Route de la Marsa, Sidi
            Daoud La Marsa, Tunisie Mindup, Bureau 1, 8 avenue de l’université
            Manar1 , Tunis, Tunisie
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
