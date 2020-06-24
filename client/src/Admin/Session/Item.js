import React from "react";

function Item(props) {
  const data = props.session ? props.session : null;
  console.log(data);
  return (
    <div className="container">
      <div className="card container">
        <div className="row mt-3">
          <b className="col-2">Type:</b>
          <p className="col">{data && data.type_sess}</p>
        </div>
        <div className="row">
          <b className="col-2">Mode:</b>
          <p className="col">{data && data.mode_session}</p>
        </div>
        <div className="row">
          <b className="col-2">Date Debut:</b>
          <p className="col">{data && data.date_deb_sess}</p>
        </div>
        <div className="row">
          <b className="col-2">Durée Session:</b>
          <p className="col">{data && data.duree_sess}</p>
        </div>
        <div className="row">
          <b className="col-2">Nmbre d'heure par jour:</b>
          <p className="col">{data && data.hr_j_session}</p>
        </div>
        <div className="row">
          <b className="col-2">Heure Debut:</b>
          <p className="col">{data && data.hr_deb_j}</p>
        </div>
        <div className="row">
          <b className="col-2">Heure Fin:</b>
          <p className="col">{data && data.hr_fin_j}</p>
        </div>
        <div className="row">
          <b className="col-2">Lieu:</b>
          <p className="col">{data && data.lieu_sess}</p>
        </div>
        <div className="row">
          <b className="col-2">Prix:</b>
          <p className="col">{data && data.prix_session}</p>
        </div>
        <div className="row">
          <b className="col-2">Honoraire:</b>
          <p className="col">{data && data.honoraire_sess}</p>
        </div>
        <div className="row">
          <b className="col-2">Frais sejour:</b>
          <p className="col">{data && data.frais_sejour}</p>
        </div>
        <div className="row">
          <b className="col-2">Frais Transport:</b>
          <p className="col">{data && data.frais_transport}</p>
        </div>
        <div className="row">
          <b className="col-2">Perdiem:</b>
          <p className="col">{data && data.perdiem}</p>
        </div>
        <div className="row">
          <b className="col-2">Autres Frais:</b>
          <p className="col">{data && data.autres_frais}</p>
        </div>
        <div className="row">
          <b className="col-2">Formateur:</b>
          <p className="col">{data && data.formateur.nom_f}</p>
        </div>
        <div className="row">
          <b className="col-2">Note du Formateur:</b>
          <p className="col">{data && data.note_eval_formateur}</p>
        </div>
        <div className="row">
          <b className="col-2">Formation:</b>
          <p className="col">{data && data.formation.intitule}</p>
        </div>
        <div className="row">
          <b className="col-2">Client:</b>
          <p className="col">{data && data.client && data.client.nom_client}</p>
        </div>
        <div className="row">
          <b className="col-2">Support:</b>
          <p className="col">{data && data.support.titre_support}</p>
        </div>
        <div className="row">
          <b className="col-2">Participant:</b>
          <p className="col">
            {data && data.participant && data.participant.length}
          </p>
        </div>
      </div>
    </div>
  );
}
export default Item;
