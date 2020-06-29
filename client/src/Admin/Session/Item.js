import React from "react";
import { convertDate } from "../../Utils/ConvertData";

function Item(props) {
  const data = props.session ? props.session : null;
  return (
    <div className="container">
      <div className="card container">
        <div className="row mt-3">
          <b className="col-3">Type:</b>
          <p className="col">{data && data.type_sess}</p>
        </div>
        <div className="row">
          <b className="col-3">Mode:</b>
          <p className="col">{data && data.mode_session}</p>
        </div>
        <div className="row">
          <b className="col-3">Date Debut:</b>
          <p className="col">{data && convertDate(data.date_deb_sess)}</p>
        </div>
        <div className="row">
          <b className="col-3">Durée Session:</b>
          <p className="col">{data && data.duree_sess}</p>
        </div>
        <div className="row">
          <b className="col-3">Nmbre d'heure par jour:</b>
          <p className="col">{data && data.hr_j_session}</p>
        </div>
        <div className="row">
          <b className="col-3">Heure Debut:</b>
          <p className="col">{data && data.hr_deb_j}</p>
        </div>
        <div className="row">
          <b className="col-3">Heure Fin:</b>
          <p className="col">{data && data.hr_fin_j}</p>
        </div>
        <div className="row">
          <b className="col-3">Lieu:</b>
          <p className="col">{data && data.lieu_sess}</p>
        </div>
        <div className="row">
          <b className="col-3">Prix:</b>
          <p className="col">{data && data.prix_session}</p>
        </div>
        <div className="row">
          <b className="col-3">Honoraire:</b>
          <p className="col">{data && data.honoraire_sess}</p>
        </div>
        <div className="row">
          <b className="col-3">Frais sejour:</b>
          <p className="col">{data && data.frais_sejour}</p>
        </div>
        <div className="row">
          <b className="col-3">Frais Transport:</b>
          <p className="col">{data && data.frais_transport}</p>
        </div>
        <div className="row">
          <b className="col-3">Perdiem:</b>
          <p className="col">{data && data.perdiem}</p>
        </div>
        <div className="row">
          <b className="col-3">Autres Frais:</b>
          <p className="col">{data && data.autres_frais}</p>
        </div>
        <div className="row">
          <b className="col-3">Formateur:</b>
          <p className="col">{data && data.formateur.nom_f}</p>
        </div>
        <div className="row">
          <b className="col-3">Note du Formateur:</b>
          <p className="col">{data && data.note_eval_formateur}</p>
        </div>
        <div className="row">
          <b className="col-3">Formation:</b>
          <p className="col">{data && data.formation.intitule}</p>
        </div>
        <div className="row">
          <b className="col-3">Client:</b>
          <p className="col">{data && data.client && data.client.nom_client}</p>
        </div>
        <div className="row">
          <b className="col-3">Support:</b>
          <p className="col">{data && data.support ? data.support.titre_support: '--'}</p>
        </div>
        <div className="row">
          <b className="col-3">Participant:</b>
          <p className="col">
            {data && data.participant && data.participant.length} items
          </p>
        </div>
      </div>
    </div>
  );
}
export default Item;
