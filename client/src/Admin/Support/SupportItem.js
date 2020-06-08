import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { GET_SUPPORT } from "../GraphQl/Query";
function SupportItem() {
  let { id } = useParams();

  const { loading, error, data } = useQuery(GET_SUPPORT, {
    variables: { code_support: id },
  });
  console.log(data);

  return (
    <div className="container mt-11 ">
      <div className="card container">
        <div className="row">
          <b className="col-2">Titre:</b>
          <p className="col">{data && data.support.titre_support}</p>
        </div>

        <div className="row">
          <b className="col-2">Fichier:</b>
          <p className="col">{data && data.support.fichier.length}</p>
        </div>
        <div className="row">
          <b className="col-2">Date de creation:</b>
          <p className="col">{data && data.support.date_support}</p>
        </div>
        <div className="row">
          <b className="col-2">Valide:</b>
          <p className="col">{data && data.support.validation.decision_r}</p>
        </div>
        <div className="row">
          <b className="col-2">Remarques:</b>
          <p className="col">{data && data.support.validation.remarque}</p>
        </div>
        <div className="row">
          <b className="col-2">Date :</b>
          <p className="col">{data && data.support.validation.date_support}</p>
        </div>
      </div>
    </div>
  );
}
export default SupportItem;
