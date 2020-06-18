import React from "react";
function Item(props) {
  const data = props.validation ? props.validation : null;
  return (
    <div className="mt-3 mb-3">
      <div className="card container">
        <div className="row mt-3">
          <b className="col-3"> Date :</b>
          <p className="col">{data && data.date_val}</p>
        </div>
        <div className="row">
          <b className="col-3">Remarque:</b>
          <p className="col">{data && data.remarque}</p>
        </div>
        <div className="row">
          <b className="col-3">Decision par rapport au Support:</b>
          <p className="col">{data && data.decision_r}</p>
        </div>
        <div className="row">
          <b className="col-3">Décision par rapport au Formateur:</b>
          <p className="col">{data && data.decision_f}</p>
        </div>
        <div className="row">
          <b className="col-3">Formateur:</b>
          <p className="col">{data && data.formateur.nom_f}</p>
        </div>
        <div className="row">
          <b className="col-3">Ingenieur:</b>
          <p className="col">{data && data.ingenieurpedagogique.nom_ing}</p>
        </div>
        <div className="row">
          <b className="col-3">Support:</b>
          <p className="col">{data && data.support.titre_support}</p>
        </div>
        =
      </div>
    </div>
  );
}
export default Item;
