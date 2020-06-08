import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { GET_DEMANDEUR } from "../GraphQl/Query";
function DemandeurItem() {
  let { id } = useParams();

  const { loading, error, data } = useQuery(GET_DEMANDEUR, {
    variables: { code_demandeur: id },
  });
  console.log(data);

  return (
    <div className="container mt-11 ">
      <div className="card container">
        <div className="row">
          <b className="col-2">Nom :</b>
          <p className="col">{data && data.demandeur.nom_demandeur}</p>
        </div>
        <div className="row">
          <b className="col-2">Prenom:</b>
          <p className="col">{data && data.demandeur.prenom_demandeur}</p>
        </div>
        <div className="row">
          <b className="col-2">Email:</b>
          <p className="col">{data && data.demandeur.email_demandeur}</p>
        </div>
        <div className="row">
          <b className="col-2">Tel:</b>
          <p className="col">{data && data.demandeur.tel_demandeur}</p>
        </div>
      </div>
    </div>
  );
}
export default DemandeurItem;
