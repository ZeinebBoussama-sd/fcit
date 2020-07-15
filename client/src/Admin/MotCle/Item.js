import React from "react";
function Item(props) {
  const data = props.motcle ? props.motcle : null;
  console.log(data);

  return (
    <div className="container ">
      <div className="card container">
        <div className="row mt-3">
          <b className="col-3">Mot Cle:</b>
          <p className="col">{data && data.motcle}</p>
        </div>

        <div className="row">
          <b className="col-3">Formation:</b>
          <p className="col">
            {data && data.formation
              ? data.formation.map((f, idx) => {
                  return <li key={idx}>{f.intitule}</li>;
                })
              : "--"}
          </p>
        </div>
      </div>
    </div>
  );
}
export default Item;
