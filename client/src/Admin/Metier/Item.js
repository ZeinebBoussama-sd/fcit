import React from "react";
function Item(props) {
  const data = props.metier ? props.metier : null;
  console.log(data);

  return (
    <div className="container ">
      <div className="card container">
        <div className="row mt-3">
          <b className="col-3">Code:</b>
          <p className="col">{data && data.code_metier}</p>
        </div>
        <div className="row mt-3">
          <b className="col-3">Intitule:</b>
          <p className="col">{data && data.intitule_metier}</p>
        </div>

        <div className="row">
          <b className="col-3">Formation:</b>
          <p className="col">{data ? data.formation.intitule : "--"}</p>
        </div>
      </div>
    </div>
  );
}
export default Item;
