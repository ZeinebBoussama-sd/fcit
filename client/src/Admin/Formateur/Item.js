import React from "react";
function Item(props) {
  const data = props.formateur ? props.formateur : null;
  return (
    <div className="container mt-11 ">
      <div className="card container">
        <div className="row">
          <b className="col-3">code:</b>
          <p className="col">
            {data && data.formateur && data.formateur.code_formateur}
          </p>
        </div>
        <div className="row">
          <b className="col-3">Nom:</b>
          <p className="col">{data && data.nom_f}</p>
        </div>
        <div className="row">
          <b className="col-3">Prenom:</b>
          <p className="col">{data && data.prenom_f}</p>
        </div>
        <div className="row">
          <b className="col-3">Classe:</b>
          <p className="col">{data && data.classe_f}</p>
        </div>
        <div className="row">
          <b className="col-3">Fonction:</b>
          <p className="col">{data && data.fonction_f}</p>
        </div>
        <div className="row">
          <b className="col-3">CV:</b>
          <p className="col">{data && data.cv_f}</p>
        </div>
        <div className="row">
          <b className="col-3">Email::</b>
          <p className="col">{data && data.email_f}</p>
        </div>
        <div className="row">
          <b className="col-3">TEL:</b>
          <p className="col">{data && data.tel_f}</p>
        </div>
        <div className="row">
          <b className="col-3">NSS:</b>
          <p className="col">{data && data.NSS}</p>
        </div>
        <div className="row">
          <b className="col-3">Adresse:</b>
          <p className="col">{data && data.adr_f}</p>
        </div>
        <div className="row">
          <b className="col-3">Date D'ajout:</b>
          <p className="col">{data && data.date_dajout}</p>
        </div>
        <div className="row">
          <b className="col-3">CIN:</b>
          <p className="col">{data && data.cin_f}</p>
        </div>
        <div className="row">
          <b className="col-3">Copie CIN:</b>
          <p className="col">{data && data.copie_cin}</p>
        </div>
        <div className="row">
          <b className="col-3">Numéro Passeport :</b>
          <p className="col">{data && data.passeport_f}</p>
        </div>
        <div className="row">
          <b className="col-3">Copie Passeport:</b>
          <p className="col">{data && data.copie_passeport}</p>
        </div>
        <div className="row">
          <b className="col-3"> Numéro de Visa:</b>
          <p className="col">{data && data.visa_f}</p>
        </div>
        <div className="row">
          <b className="col-3">Date de visa:</b>
          <p className="col">{data && data.val_visa}</p>
        </div>
        <div className="row">
          <b className="col-3">Tarif:</b>
          <p className="col">{data && data.tarif_f}</p>
        </div>
        <div className="row">
          <b className="col-3">RIB:</b>
          <p className="col">{data && data.RIB_f}</p>
        </div>
        <div className="row">
          <b className="col-3">Copie de RIB:</b>
          <p className="col">{data && data.copie_RIB}</p>
        </div>
      </div>
    </div>
  );
}
export default Item;
