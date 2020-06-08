import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { GET_INGENIEUR_PEDAGOGIQUE } from "../GraphQl/Query";
function IngenieurPedagogiueItem() {
  let { id } = useParams();

  const { loading, error, data } = useQuery(GET_INGENIEUR_PEDAGOGIQUE, {
    variables: { code_IP: id },
  });
  console.log(data);

  return (
    <div className="container mt-11 ">
      <div className="card container">
        <div className="row">
          <b className="col-2">Nom:</b>
          <p className="col">{data && data.ingenieurpedagogique.nom_ing}</p>
        </div>
        <div className="row">
          <b className="col-2">Prenom:</b>
          <p className="col">{data && data.ingenieurpedagogique.prenom_ing}</p>
        </div>
        <div className="row">
          <b className="col-2">CV:</b>
          <p className="col">{data && data.ingenieurpedagogique.cv_ing}</p>
        </div>
        <div className="row">
          <b className="col-2">Email:</b>
          <p className="col">{data && data.ingenieurpedagogique.email_ing}</p>
        </div>
        <div className="row">
          <b className="col-2">Tel:</b>
          <p className="col">{data && data.ingenieurpedagogique.tel_ing}</p>
        </div>
        <div className="row">
          <b className="col-2">NSS:</b>
          <p className="col">{data && data.ingenieurpedagogique.NSS_ing}</p>
        </div>
        <div className="row">
          <b className="col-2">Specialite:</b>
          <p className="col">
            {data && data.ingenieurpedagogique.specialite_ing}
          </p>
        </div>
        <div className="row">
          <b className="col-2">Salaire:</b>
          <p className="col">{data && data.ingenieurpedagogique.salaire_ing}</p>
        </div>
        <div className="row">
          <b className="col-2">Adresse:</b>
          <p className="col">{data && data.ingenieurpedagogique.adr_ing}</p>
        </div>
      </div>
    </div>
  );
}
export default IngenieurPedagogiueItem;
