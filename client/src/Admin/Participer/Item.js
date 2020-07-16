import React from "react";

function Item(props) {
  const data = props.participer ? props.participer : null;
  console.log(data);
  return (
    <div className="container ">
      <div className="card container">
        <div className="row mt-3">
          <b className="col-2">Nom :</b>
          <p className="col">
            {data && data.participant && data.participant.nom_participant}
          </p>
        </div>
        <div className="row">
          <b className="col-2">Prenom:</b>
          <p className="col">
            {data && data.participant && data.participant.prenom_participant}
          </p>
        </div>
        <div className="row">
          <b className="col-2">Rapport d'évaluation :</b>
          <p className="col">{data && data.rapport_eval}</p>
        </div>
        <div className="row">
          <b className="col-2">Note QCM:</b>
          <p className="col">{data && data.note_QCM}</p>
        </div>
        <div className="row">
          <b className="col-2">Date d'évaluation:</b>
          <p className="col">{data && data.date_eval}</p>
        </div>
        <div className="row">
          <b className="col-2">Session:</b>
          <p className="col">
            {data && data.session && data.session.code_session}
          </p>
        </div>
      </div>
    </div>
  );
}
export default Item;
