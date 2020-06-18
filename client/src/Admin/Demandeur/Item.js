import React from "react";
function Item(props) {
  const data = props.demandeur ? props.demandeur : null;
  return (
    <div className="container ">
      <div className="card container">
        <div className="row mt-3">
          <b className="col-2">Nom :</b>
          <p className="col">{data && data.nom_demandeur}</p>
        </div>
        <div className="row">
          <b className="col-2">Prenom:</b>
          <p className="col">{data && data.prenom_demandeur}</p>
        </div>
        <div className="row">
          <b className="col-2">Email:</b>
          <p className="col">{data && data.email_demandeur}</p>
        </div>
        <div className="row">
          <b className="col-2">Tel:</b>
          <p className="col">{data && data.tel_demandeur}</p>
        </div>
      </div>
    </div>
  );
}
export default Item;
