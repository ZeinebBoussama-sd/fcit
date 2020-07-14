import React from "react";
import moment from "moment";
function Item(props) {
  const data = props.validation ? props.validation : null;
  return (
    <div className="mt-3 mb-3">
      <div className="card container">
        <div className="row mt-3">
          <b className="col-4"> Date :</b>
          <p className="col">
            {data && moment(data.date_val).format("YYYY-MM-DD")}
          </p>
        </div>
        <div className="row">
          <b className="col-4">Remarque:</b>
          <p className="col">{data && data.remarque}</p>
        </div>
        <div className="row">
          <b className="col-4">Decision par rapport au Support:</b>
          <p className="col">{data && data.decision_r ? "Accord" : "Refus"}</p>
        </div>
        <div className="row">
          <b className="col-4">Décision par rapport au Formateur:</b>
          <p className="col">{data && data.decision_f ? "Accord" : "Refus"}</p>
        </div>
        <div className="row">
          <b className="col-4">Formateur:</b>
          <p className="col">{data && data.formateur.nom_f}</p>
        </div>
        <div className="row">
          <b className="col-4">Ingenieur:</b>
          <p className="col">{data && data.ingenieurpedagogique.nom_ing}</p>
        </div>
        <div className="row">
          <b className="col-4">Support:</b>
          <p className="col">{data && data.support.titre_support}</p>
        </div>
      </div>
    </div>
  );
}
export default Item;
