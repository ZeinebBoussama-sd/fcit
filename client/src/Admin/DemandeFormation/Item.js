import React from "react";
import moment from "moment";
function Item(props) {
  const data = props.demandeformation ? props.demandeformation : null;

  return (
    <div className="container  ">
      <div className="card container">
        <div className="row mt-3">
          <b className="col-2">code:</b>
          <p className="col">{data && data.code_demande}</p>
        </div>
        <div className="row">
          <b className="col-2">date_demande:</b>
          <p className="col">
            {data && moment(data.date_demande).format("yyyy-MM-DD")}
          </p>
        </div>
        <div className="row">
          <b className="col-2">duree_prevu:</b>
          <p className="col">{data && data.duree_prevu}</p>
        </div>
        <div className="row">
          <b className="col-2">etat_demande:</b>
          <p className="col">{data && data.etat_demande}</p>
        </div>
        <div className="row">
          <b className="col-2">type:</b>
          <p className="col">{data && data.type_demande}</p>
        </div>
        <div className="row">
          <b className="col-2">hr_deb_j_prev:</b>
          <p className="col">{data && data.hr_deb_j_prev}</p>
        </div>
        <div className="row">
          <b className="col-2">hr_fin_j_prev:</b>
          <p className="col">{data && data.hr_fin_j_prev}</p>
        </div>
        <div className="row">
          <b className="col-2">Heure Par jour:</b>
          <p className="col">{data && data.hr_j_prev}</p>
        </div>
        <div className="row">
          <b className="col-2">Client:</b>
          <p className="col">{data && data.client.nom_client}</p>
        </div>
        <div className="row">
          <b className="col-2">Formation:</b>
          <p className="col">{data && data.formation.intitule}</p>
        </div>
        <div className="row">
          <b className="col-2">Demandeur:</b>
          <p className="col">
            {data && data.demandeur ? data.demandeur.prenom_demandeur : "--"}
          </p>
        </div>
      </div>
    </div>
  );
}
export default Item;
