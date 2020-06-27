import React from "react";
function Item(props) {
  const data = props.dateprevue ? props.dateprevue : null;
  return (
    <div className="container ">
      <div className="card container">
        <div className="row mt-3">
          <b className="col-2">Date Prevue :</b>
          <p className="col">{data && data.date_prev}</p>
        </div>

        <div className="row">
          <b className="col-2">Demande:</b>
          <p className="col">
            {data &&
              data.demandeformation &&
              data.demandeformation.code_demande}
          </p>
        </div>
      </div>
    </div>
  );
}
export default Item;
