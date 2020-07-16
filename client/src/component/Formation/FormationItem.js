import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Item from "../../Admin/Formation/Item";
import { useQuery } from "@apollo/react-hooks";
import { GET_FORMATION } from "../../Admin/GraphQl/Query";
function FormationItem() {
  let { id } = useParams();

  const { loading, error, data, refetch } = useQuery(GET_FORMATION, {
    variables: { CI_formation: id },
  });
  const [edit, setEdit] = useState(false);
  const formation = data ? data.formation : null;
  const action = () => {
    edit ? setEdit(false) : setEdit(true);
  };
  console.log(formation);

  return (
    <div className=" mt-11 ">
      <div className="card bg-light border-light">
        <div className="card-headert row">
          <h5 className="ml-2 col-11">{formation && formation.intitule}</h5>
        </div>
        <Item formation={formation} />
      </div>
    </div>
  );
}
export default FormationItem;
