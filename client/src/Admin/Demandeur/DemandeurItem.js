import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { GET_DEMANDEUR } from "../GraphQl/Query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import Item from "./Item";
import EditDemandeur from "./EditDemandeur";
function DemandeurItem() {
  let { id } = useParams();

  const { loading, error, data, refetch } = useQuery(GET_DEMANDEUR, {
    variables: { code_demandeur: id },
  });
  const [edit, setEdit] = useState(false);
  const demandeur = data ? data.demandeur : null;
  const action = () => {
    edit ? setEdit(false) : setEdit(true);
  };
  console.log(demandeur);

  return (
    <div className=" mt-11 ">
      <div className="card bg-light border-light">
        <div className="card-headert row">
          <h5 className="ml-2 col-11">
            About: {demandeur && demandeur.prenom_demandeur}
          </h5>
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
          <Item demandeur={demandeur} />
        ) : (
          <EditDemandeur
            className=""
            id="navbarSupportedContent"
            demandeur={demandeur}
            refetch={refetch}
            setEdit={setEdit}
          />
        )}
      </div>
    </div>
  );
}
export default DemandeurItem;
