import React from "react";
import moment from "moment";

function Item(props) {
  const data = props.support ? props.support : null;
  return (
    <div className="container ">
      <div className="card container">
        <div className="row mt-3">
          <b className="col-2">Titre:</b>
          <p className="col">{data && data.titre_support}</p>
        </div>

        <div className="row">
          <b className="col-2">Fichier:</b>
          <p className="col">{data && data.fichier.length}</p>
        </div>
        <div className="row">
          <b className="col-2">Date de creation:</b>
          <p className="col">
            {data && moment(data.date_support).format("YYYY-MM-DD")}
          </p>
        </div>
        <div className="row">
          <b className="col-2">Valide:</b>
          <p className="col">{data && data.validation.decision_r}</p>
        </div>
        <div className="row">
          <b className="col-2">Remarques:</b>
          <p className="col">{data && data.validation.remarque}</p>
        </div>
        <div className="row">
          <b className="col-2">Date :</b>
          <p className="col">{data && data.validation.date_support}</p>
        </div>
      </div>
    </div>
  );
}
export default Item;
