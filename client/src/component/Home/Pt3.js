import React from "react";
import Booster from "../../foundation/images/booster1.png";
import Consulting from "../../foundation/images/Consulting.png";
import Guaranteed from "../../foundation/images/Guaranteed.png";
import Supports from "../../foundation/images/Supports.png";
import training from "../../foundation/images/training.svg";
import Seminars from "../../foundation/images/Seminars.png";
import Pt3Item from "./Pt3Item";
import { Link } from "react-router-dom";

function Pt3() {
  return (
    <div className="container ">
      <div className="row mt-5 mb-5">
        <div className="col-md-4  ">
          <center>
            <Link to={`/formation`}>
              <img
                className="px-auto rounded-circle"
                src={training}
                alt=""
                height="140px"
                width="140px"
                style={{ background: "#0074ff" }}
              />

              <h3 id="h3-color">Formations</h3>
              <p>
                Formations adaptées à vos besoins, votre marché et votre
                environnement.
              </p>
            </Link>
          </center>
        </div>
        <Pt3Item
          img={Consulting}
          title={"Consulting"}
          text={"Accompagnement dans votre transformation digitale."}
        />
        <Pt3Item
          img={Seminars}
          title={"Séminaires"}
          text={
            "Séminaires sur des thèmes innovants ou sur des tendances émergentes."
          }
        />
        <Pt3Item
          img={Guaranteed}
          title={"Qualité garantie"}
          text={
            "Tous nos formateurs et consultants sont des professionnels de leur domaine."
          }
        />
        <Pt3Item
          img={Supports}
          title={"Supports"}
          text={
            "Supports développés par FCIT ou officiels des principaux éditeurs et constructeurs (Microsoft, IBM, Cisco, etc.)."
          }
        />
        <Pt3Item
          img={Booster}
          title={"Booster"}
          text={`Valoriser vos compétences, Accélérer votre retour à l'emploi.`}
        />
      </div>
    </div>
  );
}
export default Pt3;
