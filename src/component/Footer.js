import React from "react";
import logofcit from "../foundation/logo/logofcit3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneVolume,
  faEnvelopeOpenText,
  faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";
function Footer() {
  return (
    <div>
      <div class="container-fluid bg-dark text-white">
        <div class="row">
          <div class="col-lg-1">
            <a href="#">
              <img src={logofcit} height="100" width="100" alt="" />
            </a>
          </div>
          <div class="col-lg-3 text-left font-italic ">
            <p>
              FC-IT est un cabinet de formation et de conseil en nouvelles
              technologies de l'information.
            </p>
          </div>
          <div class="col-lg-2 text-left font-italic">
            <p>
              <FontAwesomeIcon
                icon={faEnvelopeOpenText}
                color="cornflowerblue	"
              />
              contact@fc4it.net{" "}
            </p>

            <p>
              <FontAwesomeIcon
                icon={faEnvelopeOpenText}
                color="cornflowerblue	"
              />
              espace.clients@fc4it.net
            </p>
          </div>
          <div class="col-lg-3 text-left font-italic">
            <p>
              <FontAwesomeIcon icon={faPhoneVolume} color="cornflowerblue	" />
              Tél: +21656563753{" "}
            </p>

            <p>
              <FontAwesomeIcon icon={faPhoneVolume} color="cornflowerblue	" />
              Office:+21656563643/+21656563633/ +21656563833{" "}
            </p>
          </div>
          <div class="col-lg-3 text-left font-italic">
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} color="cornflowerblue	" />
              Centre Millenium 2éme étage-Bureau N°19 Route de la Marsa, Sidi
              Daoud La Marsa
            </p>
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} color="cornflowerblue	" />
              Mindup, Bureau 1, 8 avenue de l’université Manar1 , Tunis, Tunisie
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
