import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { GET_FORMATEUR } from "../GraphQl/Query";
function FormateurItem() {
  let { id } = useParams();

  const { loading, error, data } = useQuery(GET_FORMATEUR, {
    variables: { code_formateur: id },
  });
  console.log(data);

  return (
    <div className="container mt-11 ">
      <div className="card container">
        <div className="row">
          <b className="col-2">code:</b>
          <p className="col">
            {data && data.formateur && data.formateur.code_formateur}
          </p>
        </div>
        <div className="row">
          <b className="col-2">Nom:</b>
          <p className="col">{data && data.formateur.nom_f}</p>
        </div>
        <div className="row">
          <b className="col-2">Prenom:</b>
          <p className="col">{data && data.formateur.prenom_f}</p>
        </div>
        <div className="row">
          <b className="col-2">Classe:</b>
          <p className="col">{data && data.formateur.classe_f}</p>
        </div>
        <div className="row">
          <b className="col-2">Fonction:</b>
          <p className="col">{data && data.formateur.fonction_f}</p>
        </div>
        <div className="row">
          <b className="col-2">CV:</b>
          <p className="col">{data && data.formateur.cv_f}</p>
        </div>
        <div className="row">
          <b className="col-2">Email::</b>
          <p className="col">{data && data.formateur.email_f}</p>
        </div>
        <div className="row">
          <b className="col-2">TEL:</b>
          <p className="col">{data && data.formateur.tel_f}</p>
        </div>
        <div className="row">
          <b className="col-2">NSS:</b>
          <p className="col">{data && data.formateur.NSS_f}</p>
        </div>
        <div className="row">
          <b className="col-2">Adresse:</b>
          <p className="col">{data && data.formateur.adr_f}</p>
        </div>
        <div className="row">
          <b className="col-2">Date D'ajout:</b>
          <p className="col">{data && data.formateur.date_ajout}</p>
        </div>
        <div className="row">
          <b className="col-2">CIN:</b>
          <p className="col">{data && data.formateur.cin_f}</p>
        </div>
        <div className="row">
          <b className="col-2">Copie CIN:</b>
          <p className="col">{data && data.formateur.copie_cin}</p>
        </div>
        <div className="row">
          <b className="col-2">Numéro Passeport :</b>
          <p className="col">{data && data.formateur.passeport_f}</p>
        </div>
        <div className="row">
          <b className="col-2">Copie Passeport:</b>
          <p className="col">{data && data.formateur.copie_passeport}</p>
        </div>
        <div className="row">
          <b className="col-2"> Numéro de Visa:</b>
          <p className="col">{data && data.formateur.visa_f}</p>
        </div>
        <div className="row">
          <b className="col-2">Date de visa:</b>
          <p className="col">{data && data.formateur.val_visa}</p>
        </div>
        <div className="row">
          <b className="col-2">Tarif:</b>
          <p className="col">{data && data.formateur.tarif_f}</p>
        </div>
        <div className="row">
          <b className="col-2">RIB:</b>
          <p className="col">{data && data.formateur.RIB_f}</p>
        </div>
        <div className="row">
          <b className="col-2">Copie de RIB:</b>
          <p className="col">{data && data.formateur.copie_RIB}</p>
        </div>
      </div>
    </div>
  );
}
export default FormateurItem;
