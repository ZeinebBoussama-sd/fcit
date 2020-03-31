import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logofcit from "../../foundation/logo/logofcit3.png";
function Pt3() {
  return (
    <div>
      <div class="row">
        <div class="col-md-4  ">
          <center>
            <img
              src={logofcit}
              class="bd-placeholder-img rounded-circlebd-placeholder-img rounded-circle"
              height="140px"
              width="140px"
            />
            <h3 id="h3-color"> Formations</h3>
            <p>
              Formations adaptées à vos besoins, votre marché et votre
              environnement.
            </p>
          </center>
        </div>
        <div class="col-md-4">
          <center>
            <img
              src={logofcit}
              class="bd-placeholder-img rounded-circlebd-placeholder-img rounded-circle"
              height="140px"
              width="140px"
            />
            <h3 id="h3-color">Consulting</h3>
            <p>Accompagnement dans votre transformation digitale.</p>
          </center>
        </div>
        <div class="col-md-4">
          <center>
            <img
              src={logofcit}
              class="bd-placeholder-img rounded-circlebd-placeholder-img rounded-circle"
              height="140px"
              width="140px"
            />
            <h3 id="h3-color">Séminaires</h3>
            <p>
              Séminaires sur des thèmes innovants ou sur des tendances
              émergentes.
            </p>
          </center>
        </div>
        <div class="col-md-4">
          <center>
            <img
              src={logofcit}
              class="bd-placeholder-img rounded-circlebd-placeholder-img rounded-circle"
              height="140px"
              width="140px"
            />
            <h3 id="h3-color">Qualité garantie</h3>
            <p>
              Tous nos formateurs et consultants sont des professionnels de leur
              domaine.
            </p>
          </center>
        </div>
        <div class="col-md-4">
          <center>
            <img
              src={logofcit}
              class="bd-placeholder-img rounded-circlebd-placeholder-img rounded-circle"
              height="140px"
              width="140px"
            />
            <h3 id="h3-color">Supports</h3>
            <p>
              Supports développés par FCIT ou officiels des principaux éditeurs
              et constructeurs (Microsoft, IBM, Cisco, etc.).
            </p>
          </center>
        </div>
        <div class="col-md-4">
          <center>
            <img
              src={logofcit}
              class="bd-placeholder-img rounded-circlebd-placeholder-img rounded-circle"
              height="140px"
              width="140px"
            />
            <h3 id="h3-color">Booster</h3>
            <p>Valoriser vos compétences, Accélérer votre retour à l'emploi.</p>
          </center>
        </div>
      </div>
    </div>
  );
}
export default Pt3;
