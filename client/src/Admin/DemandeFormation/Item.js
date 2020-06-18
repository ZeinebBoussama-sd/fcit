import React from "react";

function Item(props) {
  const data = props.demandeformation ? props.demandeformation : null;

  return (
    <div className="container mt-11 ">
      <div className="card container">
        <div className="row">
          <b className="col-2">code:</b>
          <p className="col">
            {data &&
              data.demandeformation &&
              data.demandeformation.code_demande}
          </p>
        </div>
        <div className="row">
          <b className="col-2">date_demande:</b>
          <p className="col">{data && data.date_demande}</p>
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
          <p className="col">{data && data.ClientCodeClient}</p>
        </div>
        <div className="row">
          <b className="col-2">Formation:</b>
          <p className="col">{data && data.FormationCIFormation}</p>
        </div>
        <div className="row">
          <b className="col-2">Demandeur:</b>
          <p className="col">{data && data.DemandeurCodeDemandeur}</p>
        </div>
      </div>
    </div>
  );
}
export default Item;
