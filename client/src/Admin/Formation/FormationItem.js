import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { GET_FORMATION } from "../GraphQl/Query";
function FormationItem() {
  let { id } = useParams();

  const { loading, error, data } = useQuery(GET_FORMATION, {
    variables: { CI_formation: id },
  });
  console.log(data);

  return (
    <div className="container mt-11 ">
      <div className="card container">
        <div className="row">
          <b className="col-2">Code:</b>
          <p className="col">{data && data.formation.code_formation}</p>
        </div>
        <div className="row">
          <b className="col-2">Intitule:</b>
          <p className="col">{data && data.formation.intitule_formation}</p>
        </div>
        <div className="row">
          <b className="col-2">Durée:</b>
          <p className="col">{data && data.formation.duree_formation}</p>
        </div>
        <div className="row">
          <b className="col-2">Nbre min de Personne:</b>
          <p className="col">{data && data.formation.nbre_mi_part}</p>
        </div>
        <div className="row">
          <b className="col-2">Description:</b>
          <p className="col">{data && data.formation.description_formation}</p>
        </div>
        <div className="row">
          <b className="col-2">Categorie:</b>
          <p className="col">{data && data.formation.categorie_formation}</p>
        </div>
        <div className="row">
          <b className="col-2">Prix:</b>
          <p className="col">{data && data.formation.prix_formation}</p>
        </div>
        <div className="row">
          <b className="col-2">Participant:</b>
          <p className="col">{data && data.formation.participant}</p>
        </div>
        <div className="row">
          <b className="col-2">Prérequis:</b>
          <p className="col">{data && data.formation.prerequis}</p>
        </div>
      </div>
    </div>
  );
}
export default FormationItem;
