import React from "react";
function Item(props) {
  const data = props.ingenieurpedagogique ? props.ingenieurpedagogique : null;
  return (
    <div className="container ">
      <div className="card container">
        <div className="row mt-3">
          <b className="col-2">Nom:</b>
          <p className="col">{data && data.nom_ing}</p>
        </div>
        <div className="row">
          <b className="col-2">Prenom:</b>
          <p className="col">{data && data.prenom_ing}</p>
        </div>
        <div className="row">
          <b className="col-2">CV:</b>
          <p className="col">{data && data.cv_ing}</p>
        </div>
        <div className="row">
          <b className="col-2">Email:</b>
          <p className="col">{data && data.email_ing}</p>
        </div>
        <div className="row">
          <b className="col-2">Tel:</b>
          <p className="col">{data && data.tel_ing}</p>
        </div>
        <div className="row">
          <b className="col-2">NSS:</b>
          <p className="col">{data && data.NSS_ing}</p>
        </div>
        <div className="row">
          <b className="col-2">Specialite:</b>
          <p className="col">{data && data.specialite_ing}</p>
        </div>
        <div className="row">
          <b className="col-2">Salaire:</b>
          <p className="col">{data && data.salaire_ing}</p>
        </div>
        <div className="row">
          <b className="col-2">Adresse:</b>
          <p className="col">{data && data.adr_ing}</p>
        </div>
      </div>
    </div>
  );
}
export default Item;
