import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { GET_SESSION } from "../GraphQl/Query";
function SessionItem() {
  let { id } = useParams();

  const { loading, error, data } = useQuery(GET_SESSION, {
    variables: { CI_session: id },
  });
  console.log(data);

  return (
    <div className="container mt-11 ">
      <div className="card container">
        <div className="row">
          <b className="col-2">Type:</b>
          <p className="col">{data && data.session.type_session}</p>
        </div>
        <div className="row">
          <b className="col-2">Mode:</b>
          <p className="col">{data && data.session.mode_session}</p>
        </div>
        <div className="row">
          <b className="col-2">Date Debut:</b>
          <p className="col">{data && data.session.date_deb_session}</p>
        </div>
        <div className="row">
          <b className="col-2">Durée Session:</b>
          <p className="col">{data && data.session.duree_session}</p>
        </div>
        <div className="row">
          <b className="col-2">Nmbre d'heure par jour:</b>
          <p className="col">{data && data.session.hr_j_session}</p>
        </div>
        <div className="row">
          <b className="col-2">Heure Debut:</b>
          <p className="col">{data && data.session.hr_deb_j}</p>
        </div>
        <div className="row">
          <b className="col-2">Heure Fin:</b>
          <p className="col">{data && data.session.hr_fin}</p>
        </div>
        <div className="row">
          <b className="col-2">Lieu:</b>
          <p className="col">{data && data.session.lieu_session}</p>
        </div>
        <div className="row">
          <b className="col-2">Prix:</b>
          <p className="col">{data && data.session.prix}</p>
        </div>
        <div className="row">
          <b className="col-2">Honoraire:</b>
          <p className="col">{data && data.session.honoraire_formateur}</p>
        </div>
        <div className="row">
          <b className="col-2">Frais sejour:</b>
          <p className="col">{data && data.session.frais_sejour}</p>
        </div>
        <div className="row">
          <b className="col-2">Frais Transport:</b>
          <p className="col">{data && data.session.frais_transport}</p>
        </div>
        <div className="row">
          <b className="col-2">Perdiem:</b>
          <p className="col">{data && data.session.perdiem}</p>
        </div>
        <div className="row">
          <b className="col-2">Autres Frais:</b>
          <p className="col">{data && data.session.autres_frais}</p>
        </div>
        <div className="row">
          <b className="col-2">Formateur:</b>
          <p className="col">{data && data.session.formateur.nom_f}</p>
        </div>
        <div className="row">
          <b className="col-2">Note du Formateur:</b>
          <p className="col">{data && data.session.note_eval_formateur}</p>
        </div>
        <div className="row">
          <b className="col-2">Formation:</b>
          <p className="col">
            {data && data.session.formation.intitule_formation}
          </p>
        </div>
        <div className="row">
          <b className="col-2">Client:</b>
          <p className="col">{data && data.session.client.nom_client}</p>
        </div>
        <div className="row">
          <b className="col-2">Support:</b>
          <p className="col">{data && data.session.support.titre_support}</p>
        </div>
        <div className="row">
          <b className="col-2">Participant:</b>
          <p className="col">
            {data && data.session.formation.participant.length}
          </p>
        </div>
      </div>
    </div>
  );
}
export default SessionItem;
