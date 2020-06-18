import React from "react";
function Item(props) {
  const data = props.participant ? props.participant : null;
  return (
    <div className="container ">
      <div className="card container">
        <div className="row mt-3">
          <b className="col-2">Nom :</b>
          <p className="col">{data && data.nom_participant}</p>
        </div>
        <div className="row">
          <b className="col-2">Prenom:</b>
          <p className="col">{data && data.prenom_participant}</p>
        </div>
        <div className="row">
          <b className="col-2">CIN:</b>
          <p className="col">{data && data.carte_identiter}</p>
        </div>
        <div className="row">
          <b className="col-2">Tel:</b>
          <p className="col">{data && data.client.nom_client}</p>
        </div>
      </div>
    </div>
  );
}
export default Item;
