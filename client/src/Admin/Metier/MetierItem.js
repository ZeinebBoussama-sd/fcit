import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { GET_METIER } from "../GraphQl/Query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import Item from "./Item";
import EditMetier from "./EditMetier";
function MetierItem() {
  let { id } = useParams();

  const { loading, error, data, refetch } = useQuery(GET_METIER, {
    variables: { code_metier: parseInt(id) },
  });
  const [edit, setEdit] = useState(false);
  const metier = data ? data.metier : null;
  const action = () => {
    edit ? setEdit(false) : setEdit(true);
  };
  console.log("metier", metier);

  return (
    <div className=" mt-11 ">
      <div className="card bg-light border-light">
        <div className="card-headert row">
          <h5 className="ml-2 col-11">About: {metier && metier.code_metier}</h5>
          <span className="col-0 text-right">
            <FontAwesomeIcon
              icon={faCog}
              className="ml-5 mt-2 pointer"
              onClick={() => action()}
              data-toggle="collapse"
              data-target="#settingContent"
            />
          </span>
        </div>
        {!edit ? (
          <Item metier={metier} />
        ) : (
          <EditMetier
            className=""
            id={id}
            metier={metier}
            refetch={refetch}
            setEdit={setEdit}
          />
        )}
      </div>
    </div>
  );
}
export default MetierItem;
