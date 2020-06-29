import React from "react";
import { DOWNLOAD_FILE } from "../GraphQl/Mutation";
import { useMutation } from "@apollo/react-hooks";

function Item(props) {
  const [downloadFile, res] = useMutation(DOWNLOAD_FILE);
  const download_file = async (path) => {
    try {
      await downloadFile({
        variables: {
          file: path,
        },
      });
    } catch (e) {
      console.error(e.message);
    }
  };
  const data = props.formateur ? props.formateur : null;

  const convertDate = (dateInt) => {
    if(!!dateInt){
      const date = new Date(dateInt)
      return date.toLocaleDateString("fr-FR");
    }
    return "";
  };

  return (
    <div className="container ">
      <div className="card container">
        <div className="row mt-3">
          <b className="col-3">code:</b>
          <p className="col">{data && data.code_formateur}</p>
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
          <a
              className="col pointer"
              target="__blank"
              download
              href={data ? data.cv_f : ""}
          >
            {data && data.cv_f ? data.cv_f.replace(/^.*[\\\/]/, ''): "No file"}
          </a>
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
          <b className="col-3">Date d'ajout:</b>
          <p className="col">{data && convertDate(data.date_dajout)}</p>
        </div>
        <div className="row">
          <b className="col-3">CIN:</b>
          <p className="col">{data && data.cin_f}</p>
        </div>
        <div className="row">
          <b className="col-3">Copie CIN:</b>
          <a
            className="col pointer"
            target="__blank"
            download
            href={data ? data.copie_cin : ""}
          >
            {data && data.copie_cin ? data.copie_cin.replace(/^.*[\\\/]/, '') : "No file"}
          </a>
        </div>
        <div className="row">
          <b className="col-3">Numéro Passeport :</b>
          <p className="col">{data && data.passeport_f}</p>
        </div>
        <div className="row">
          <b className="col-3">Copie Passeport:</b>
          <a
              className="col pointer"
              target="__blank"
              download
              href={data ? data.copie_passeport : ""}
          >
            {data && data.copie_passeport ? data.copie_passeport.replace(/^.*[\\\/]/, '') : "No file"}
          </a>
        </div>
        <div className="row">
          <b className="col-3"> Numéro de Visa:</b>
          <p className="col">{data && data.visa_f}</p>
        </div>
        <div className="row">
          <b className="col-3">Date de visa:</b>
          <p className="col">{data && convertDate(data.val_visa)}</p>
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
          <a
              className="col pointer"
              target="__blank"
              download
              href={data ? data.copie_RIB : ""}
          >
            {data && data.copie_RIB ? data.copie_RIB.replace(/^.*[\\\/]/, '') : "No file"}
          </a>
        </div>
      </div>
    </div>
  );
}
export default Item;
