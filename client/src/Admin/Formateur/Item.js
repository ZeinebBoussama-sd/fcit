import React from "react";
import fs from "fs";
import { DOWNLOAD_FILE } from "../GraphQl/Mutation";
import { useMutation } from "@apollo/react-hooks";
import { Link } from "react-router-dom";

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
          <a
            href="C:\Users\Sadok\Project\Zeineb\fcit\src\upload\2\formateur\cin\biljett.pdf"
            target="_blank"
            download
          >
            Download
          </a>
          <a
            className="col pointer"
            target="__blank"
            download
            // onClick={(e) => download_file(data ? data.copie_cin : "")}
            href={data ? data.copie_cin : ""}
          >
            {data && data.copie_cin ? data.copie_cin : "No file"}
          </a>
        </div>
        <div className="row">
          <b className="col-3">Numéro Passeport :</b>
          <p className="col">{data && data.passeport_f}</p>
        </div>
        <div className="row">
          <b className="col-3">Copie Passeport:</b>
          <p className="col">
            {data && data.copie_passeport ? data.copie_passeport : "No file"}
          </p>
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
          <p className="col">
            {data && data.copie_RIB ? data.copie_RIB : "No file"}
          </p>
        </div>
      </div>
    </div>
  );
}
export default Item;
