import React from "react";
function Item(props) {
  const data = props.theme ? props.theme : null;
  return (
    <div className="container ">
      <div className="card container">
        <div className="row mt-3">
          <b className="col-2">Code :</b>
          <p className="col">{data && data.code_theme}</p>
        </div>

        <div className="row">
          <b className="col-2">Titre:</b>
          <p className="col">{data && data.nom_theme}</p>
        </div>
      </div>
    </div>
  );
}
export default Item;
