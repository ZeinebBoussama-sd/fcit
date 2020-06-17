import React from "react";
function Item(props) {
  const data = props.fichier ? props.fichier : null;
  return (
    <div className="container ">
      <div className="card container">
        <div className="row mt-3">
          <b className="col-3">Nom:</b>
          <p className="col">{data && data.nom_fichier}</p>
        </div>
        <div className="row">
          <b className="col-3">Type:</b>
          <p className="col">{data && data.type_fichier}</p>
        </div>
        <div className="row">
          <b className="col-3">Taille_max:</b>
          <p className="col">{data && data.taille_max}</p>
        </div>
        <div className="row">
          <b className="col-3">URL :</b>
          <p className="col">{data && data.url_fichier}</p>
        </div>
        <div className="row">
          <b className="col-3">Nature du Support:</b>
          <p className="col">{data && data.nature_support}</p>
        </div>
        <div className="row">
          <b className="col-3">Support:</b>
          <p className="col">{data && data.support.titre_support}</p>
        </div>
      </div>
    </div>
  );
}
export default Item;
